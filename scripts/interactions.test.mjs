import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

function setup(config = {}, optimized = false) {
  const html = readFileSync('index.html', 'utf8').replace('<html lang="pt-BR">', `<html lang="pt-BR"${optimized ? ' data-optimized="true"' : ''}>`);
  const dom = new JSDOM(html, { url: 'http://localhost:4173', runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom;
  window.matchMedia = query => ({ matches: query.includes('reduce'), addEventListener() {} });
  // JSDOM does not implement the native modal UI; test application state only.
  window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  window.HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); this.dispatchEvent(new window.Event('close')); };
  window.ORVIA_CONFIG = config;
  window.eval(readFileSync('app.js', 'utf8'));
  return { dom, window, document: window.document };
}

test('treatments keep a single panel open and synchronize image, caption and keyboard focus', () => {
  const { dom, document, window } = setup();
  const buttons = [...document.querySelectorAll('.treatment-toggle')];
  assert.equal(buttons.length, 6);
  assert.equal(document.querySelectorAll('.treatment-toggle[aria-expanded="true"]').length, 1);
  buttons[3].click();
  assert.equal(document.querySelectorAll('.treatment-toggle[aria-expanded="true"]').length, 1);
  assert.equal(document.querySelector('#treatment-panel-0').hidden, true);
  assert.equal(document.querySelector('#treatment-panel-3').hidden, false);
  assert.match(document.querySelector('#treatment-image').src, /tratamento-implantes\.png$/);
  assert.equal(document.querySelector('#treatment-count').textContent, '04 / 06');
  buttons[3].dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
  assert.equal(document.activeElement, buttons[4]);
  buttons[3].click();
  assert.equal(document.querySelectorAll('.treatment-toggle[aria-expanded="true"]').length, 0);
  dom.window.close();
});

test('mobile menu closes with Escape, anchor navigation and opening a booking dialog', () => {
  const { dom, document, window } = setup();
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  toggle.click(); assert.equal(menu.hidden, false); assert.equal(toggle.getAttribute('aria-expanded'), 'true');
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
  assert.equal(menu.hidden, true); assert.equal(document.activeElement, toggle);
  toggle.click(); menu.querySelector('a').click(); assert.equal(menu.hidden, true);
  toggle.click(); menu.querySelector('[data-book]').click(); assert.equal(menu.hidden, true);
  assert.equal(document.querySelector('#booking-dialog').open, true);
  document.querySelector('#booking-dialog [data-close]').click(); assert.equal(document.activeElement, toggle);
  dom.window.close();
});

test('booking preserves treatment context, restores focus and uses a safe external URL when configured', () => {
  const { dom, document } = setup({ bookingUrl: 'javascript:alert(1)' });
  document.querySelector('#treatment-button-3').click();
  const button = document.querySelector('[data-treatment="Implantes"]');
  button.click();
  assert.equal(document.querySelector('#booking-dialog').open, true);
  assert.equal(document.querySelector('#booking-treatment').textContent, 'Seu interesse: Implantes');
  assert.equal(document.body.style.overflow, 'hidden');
  document.querySelector('#booking-dialog [data-close]').click();
  assert.equal(document.body.style.overflow, ''); assert.equal(document.activeElement, button);
  document.querySelector('.header-cta').click(); assert.equal(document.querySelector('#booking-treatment').hidden, true);
  dom.window.close();
  const external = setup({ bookingUrl: 'https://example.com/agendar', phone: '(11) 0000-0000' });
  let opened;
  external.window.open = (...args) => { opened = args; };
  external.document.querySelector('.header-cta').click();
  assert.deepEqual(opened, ['https://example.com/agendar', '_blank', 'noopener,noreferrer']);
  assert.equal(external.document.querySelector('[data-config="phone"]').textContent, '(11) 0000-0000');
  external.dom.window.close();
});

test('production treatment switching uses optimized responsive assets', () => {
  const { dom, document } = setup({}, true);
  document.querySelector('#treatment-button-5').click();
  const img = document.querySelector('#treatment-image');
  assert.match(img.src, /tratamento-estetica\.webp$/);
  assert.match(img.srcset, /tratamento-estetica-480\.webp 480w/);
  assert.ok([...document.querySelectorAll('.treatment-mobile-image')].every(image => image.src.endsWith('.webp')));
  dom.window.close();
});
