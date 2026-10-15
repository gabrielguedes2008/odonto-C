# Orvia — imagens geradas

Geradas em 15/10/2026 com a ferramenta integrada `image_gen`, a partir do prompt base e dos briefings de [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md). Entrega: 16 ativos selecionados para o site e a marca, mais uma variante de retrato preservada.

## Arquivos selecionados

| ID | Uso | Arquivo | Dimensões reais |
| --- | --- | --- | --- |
| A01 | Hero 3D com transparência | [hero-implante.png](public/images/hero-implante.png) | 1161 × 1355 |
| A03 | Prevenção | [tratamento-prevencao.png](public/images/tratamento-prevencao.png) | 1448 × 1086 |
| A04 | Limpeza | [tratamento-limpeza.png](public/images/tratamento-limpeza.png) | 1448 × 1086 |
| A05 | Restauração | [tratamento-restauracao.png](public/images/tratamento-restauracao.png) | 1448 × 1086 |
| A06 | Planejamento de implantes | [tratamento-implantes.png](public/images/tratamento-implantes.png) | 1448 × 1086 |
| A07 | Ortodontia | [tratamento-ortodontia.png](public/images/tratamento-ortodontia.png) | 1448 × 1086 |
| A08 | Estética / sorriso natural | [tratamento-estetica.png](public/images/tratamento-estetica.png) | 1448 × 1086 |
| A09 | Consultório vertical | [avaliacao-consultorio.png](public/images/avaliacao-consultorio.png) | 1086 × 1448 |
| A10 | Recepção | [clinica-recepcao.png](public/images/clinica-recepcao.png) | 1536 × 1024 |
| A11 | Consultório horizontal | [clinica-consultorio.png](public/images/clinica-consultorio.png) | 1448 × 1086 |
| A12 | Espera | [clinica-espera.png](public/images/clinica-espera.png) | 1448 × 1086 |
| A13 | Equipe 1 | [equipe-01.png](public/images/equipe-01.png) | 1122 × 1402 |
| A14 | Equipe 2 | [equipe-02.png](public/images/equipe-02.png) | 1122 × 1402 |
| A15 | Equipe 3 | [equipe-03.png](public/images/equipe-03.png) | 1122 × 1402 |
| A16 | Equipe 4 — versão selecionada | [equipe-04-v2.png](public/images/equipe-04-v2.png) | 1122 × 1402 |
| B01 | Conceito raster de marca | [orvia-logo-conceito.png](brand/orvia-logo-conceito.png) | 1774 × 887 |

Variante preservada: [equipe-04.png](public/images/equipe-04.png). Preferir `equipe-04-v2.png` no site, pois apresenta maior distinção facial em relação ao segundo retrato.

## Direção e referências usadas na geração

- A01: interpretação do briefing de hero, sem referência de imagem anexada, com transparência solicitada.
- A09, A13 e B01: prompt base + briefing individual, sem imagem anexada.
- A03–A08 e A10–A12: prompt base + briefing individual, com A09 anexada como referência de arquitetura e materiais. A11 mantém o ambiente e muda o ângulo.
- A14, A15 e primeira A16: prompt base + briefing individual, com A13 anexada somente como referência de sessão, iluminação e fundo.
- A16 selecionada: nova geração independente com o prompt revisado abaixo, para afastar a semelhança entre os retratos femininos. O prompt base continua aplicável.

```text
Use case: photorealistic-natural. Retrato editorial vertical 4:5 de uma dentista fictícia brasileira de 45 anos, pele parda escura, rosto redondo, nariz largo, olhos castanhos escuros e cabelo preto cacheado preso num coque alto. Sem mechas claras. Criar identidade facial original e claramente distinta dos demais retratos. Jaleco branco sem bordados sobre blusa azul clara. Sorriso leve natural, cabeça centralizada, busto, mãos fora do quadro, olhos no terço superior e respiro acima do cabelo. Fundo off-white com nuance azul muito suave, luz de softbox difusa a 45 graus pela esquerda, textura real de pele, retoque mínimo. Fotografia conceitual de equipe odontológica para Orvia, sem texto, nome, logo, crachá ou estetoscópio. Uma única pessoa.
```

## Uso na implementação

Os arquivos são originais PNG, com dimensões entregues pela ferramenta. Ainda não foram convertidos para WebP/AVIF nem redimensionados para as metas de performance da spec. Os nomes `.webp` do planejamento devem ser usados somente após conversão real; até lá, usar os caminhos `.png` desta tabela. O hero contém canal alfa e deve ficar sobre o fundo definido em CSS.

O logo é um conceito raster: conferir e finalizar em vetor antes de usá-lo como marca definitiva. A composição gerada contém uma leve variação tonal no símbolo, que pode ser simplificada para a cor sólida da spec no vetor.

As fotos foram inspecionadas visualmente quanto a composição e coerência geral. São imagens conceituais geradas, sem representar a equipe, os pacientes ou o endereço real de uma clínica. Fotografias de procedimentos não constituem documentação técnica.

Não gerados nesta entrega: A02 (hero alternativo), A17 (recortes opcionais de avatares), B02–B07 (prancha e mockups de aplicações) e U01 (mockup de interface). Esses itens foram definidos como alternativas e materiais opcionais; o conjunto principal necessário ao site está entregue.
