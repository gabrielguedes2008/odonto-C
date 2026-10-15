# Orvia Odontologia

Landing page responsiva em HTML, CSS e JavaScript, com as imagens criadas para o projeto. Inclui tratamentos em acordeão, galeria, equipe, perguntas frequentes, menu mobile e diálogos acessíveis.

## Executar

Requer Node.js 20 ou superior. No PowerShell, usar `npm.cmd` se a política de execução bloquear `npm.ps1`.

```sh
npm install
npm run dev
```

Abrir `http://127.0.0.1:4173`. Não é necessário instalar dependências para executar apenas o servidor de desenvolvimento.

```sh
npm run check
npm run build
npm run preview
```

`node scripts/check-build.mjs` verifica os arquivos otimizados depois do build. Os testes de interação usam JSDOM; não substituem inspeção visual em um navegador real.

O build usa Sharp para gerar `dist/` com WebP e versões responsivas; preserva os PNG originais. `npm run preview` serve esse build. Somente `dist/` deve ser hospedado.

## Personalizar

- `site-config.js`: URL HTTPS de agendamento, telefone, endereço, horários e registro profissional. Com URL vazia ou inválida, o site apresenta o diálogo de demonstração, sem simular confirmação.
- `styles.css`: tokens visuais, componentes e responsividade.
- `app.js`: conteúdo dos tratamentos e interações.
- `index.html`: demais conteúdos e estrutura.

As fotos de ambientes e equipe são conceituais, geradas por IA. Os perfis estão identificados como ilustrativos e não possuem nomes ou registros inventados. Antes do uso comercial, preencher dados reais, substituir fotos de equipe e clínica, confirmar tratamentos e revisar a política de privacidade. O SVG da marca é uma interpretação vetorial simples do conceito de arcos, com wordmark tipográfico em HTML.

Referências e planejamento: [spec](DESIGN-SPEC.md), [prompts](IMAGE-PROMPTS.md) e [imagens geradas](IMAGES-GENERATED.md).
