# Orvia Odontologia — especificação de design

## 1. Objetivo e status

Criar uma landing page de odontologia em português do Brasil, com aparência contemporânea, tecnológica e acolhedora. A ação principal é solicitar um agendamento; a secundária é conhecer tratamentos e equipe.

**Nome criado para o projeto: Orvia Odontologia.** Assinatura proposta: “Cuidado que acompanha seu sorriso.” O nome é uma proposta criativa, sem pesquisa de disponibilidade comercial ou de domínio.

Este documento especifica o futuro site; não representa um site já implementado. As medidas, cores derivadas e comportamentos abaixo são decisões de projeto. Não foram extraídos de CSS das referências. O inventário visual e os prompts estão em [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md).

## 2. Leitura das referências e combinação

| Arquivo | Elementos observados | O que aproveitar | Como transformar |
| --- | --- | --- | --- |
| `ref/branding.jpg` | Marca FORGE; símbolo abstrato modular; tipografia geométrica; indicação “Bauhaus”; cores declaradas #007BFF, #FFFFFF e #333333; painéis arredondados; aplicações em celular, notebook, papelaria, relógio e sacola | Azul de alta presença, geometria, contraste e consistência entre aplicações | Criar nome, símbolo e desenho de marca próprios; alterar azul, proporções e acabamento; não redesenhar o símbolo F |
| `ref/website-design.jpg` | Marca Dentiva; hero azul acinzentado; implante 3D monumental com coroa separada; título grande distribuído ao redor; marca em tamanho gigante no fundo; indicadores; seção escura com três fotos de procedimentos; bloco de plano familiar com cartão de 80% e sorriso | Impacto do objeto 3D, escala tipográfica, alternância claro/escuro, fotos em cartões | Título contínuo à esquerda, objeto à direita, sem marca gigante no fundo; métricas removidas até existirem dados; cartão de desconto substituído por convite para avaliação |
| `ref/website-design2.jpg` | Marca LUMIDENT; hero com dente 3D, halo translúcido, folhas e fios luminosos; serviços em acordeão; cartão vertical de consultório; benefícios com ícones; três fotos de ambientes; quatro retratos; pequenos avatares e rodapé azul | Hierarquia prática, serviços expansíveis, apresentação da clínica e equipe, tons claros | Composição assimétrica, poucos efeitos 3D, sem folhas; seção de serviços escura herdada da primeira referência; galeria com pesos diferentes e equipe com retratos maiores |

A borda azul externa e a chamada em russo acima do segundo site fazem parte da apresentação da referência e não entram no site. O recorte inferior do primeiro site e do rodapé do segundo limita a leitura: não pressupor seções que não estão visíveis.

**Síntese:** identidade geométrica inspirada no branding + hero 3D da primeira página + organização de conteúdo da segunda. Evitar reproduzir o conjunto de uma delas apenas substituindo cores ou nome.

## 3. Identidade visual original

### Marca

- Wordmark: “orvia”, em minúsculas, com “ODONTOLOGIA” como assinatura auxiliar.
- Símbolo: dois arcos abertos deslocados, formando um O incompleto com espaço negativo em forma de caminho. Construção simples, legível a 24 px. Sem copiar o F modular de FORGE e sem usar o símbolo de outra clínica.
- Versão horizontal: símbolo à esquerda e nome à direita; altura de 36 px no desktop e 30 px no mobile; largura resultante aproximada de 150–175 px, conforme desenho final.
- Área de proteção: metade da altura do símbolo em todos os lados. Usar versões positiva, negativa e monocromática.
- A tipografia Bauhaus da referência inspira apenas a geometria do logo. Não usá-la nos parágrafos da interface.
- Produzir o logo definitivo em SVG. Os prompts de marca servem para explorar a direção; o desenho aprovado deve ser finalizado como vetor e ter seu texto conferido.

### Cores

| Token | Cor proposta | Aplicação |
| --- | --- | --- |
| `brand-600` | `#1466E8` | Botões, marca, ícones de destaque |
| `brand-700` | `#104DB5` | Hover e links sobre fundo claro |
| `brand-100` | `#E4EFFF` | Fundos suaves e tags |
| `brand-050` | `#F3F7FF` | Base clara do hero |
| `ink-950` | `#172333` | Títulos e texto principal |
| `ink-800` | `#202D40` | Seção escura de serviços |
| `ink-700` | `#34465F` | Cartões sobre seção escura |
| `text-muted` | `#526176` | Texto secundário em fundo claro |
| `line` | `#DCE4EF` | Bordas e divisores |
| `surface` | `#FFFFFF` | Superfícies principais |
| `page` | `#F8FAFD` | Fundo geral |
| `warm` | `#E9DFD1` | Madeira e detalhes de interiores |

Distribuição visual aproximada: 65% branco e quase branco, 20% azuis claros, 10% tons escuros e 5% azul intenso. Isso é uma orientação compositiva, não uma regra de contagem de pixels. Reservar azul vivo para ações e pontos de identidade. Validar contraste em implementação: texto comum ≥ 4,5:1; texto grande e componentes gráficos relevantes ≥ 3:1. Não usar branco sobre azul muito claro.

### Tipografia

Usar **Manrope** na interface, com `system-ui, sans-serif` como fallback. O logo possui desenho próprio. Pesos de interface: 400, 500, 600 e 700.

| Estilo | Desktop ≥ 1200 px | Mobile < 768 px |
| --- | --- | --- |
| H1 | 68 px / 1,04; peso 600; tracking -0,045em | 40 px / 1,08; tracking -0,035em |
| H2 | 42 px / 1,12; peso 600 | 30 px / 1,15 |
| H3 | 24 px / 1,2; peso 600 | 22 px / 1,25 |
| Corpo | 16 px / 1,6 | 16 px / 1,6 |
| Legenda | 14 px / 1,45 | 14 px / 1,45 |
| Navegação e botão | 14 px / 1,2; peso 600 | 15 px / 1,2 |

H1 com largura máxima de 610 px e 3–4 linhas naturais. Não separar o título em fragmentos ao redor do objeto como na primeira referência. Entre 768 e 1199 px, usar H1 de 52 px.

## 4. Sistema de layout

- Tela de referência de implementação: 1440 px de largura. Conferir também em 1280, 1024, 768, 390 e 360 px.
- Container: `width: min(1200px, calc(100% - 64px))`; de 768 a 1199 px, margens de 24 px; abaixo de 768 px, 20 px.
- Grid: 12 colunas no desktop, gap de 24 px; 8 no tablet; 4 no mobile, gap de 16 px.
- Escala de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64, 80, 104 px.
- Seções: padding vertical de 104 px no desktop, 72 px no tablet e 56 px no mobile. Conteúdo determina altura; não impor alturas fixas a blocos com texto.
- Raios: botões 14 px; cartões 24 px; painéis grandes 32 px. Hero com raio de 36 px, reduzido para 24 px no mobile.
- Sombra padrão: `0 16px 48px rgba(23,35,51,.08)`. Evitar sombras fortes em todos os componentes.
- Bordas de 1 px. Não usar moldura preta ou fundo preto da prancha de branding como fundo geral da página.

## 5. Estrutura da página

### 5.1 Cabeçalho

Altura base de 88 px, 72 px no mobile. Logo à esquerda; links “Tratamentos”, “A clínica”, “Equipe” e “Dúvidas”; CTA “Agendar avaliação” à direita. Sem login ou seletor de idioma, pois não há requisito para esses recursos.

Cabeçalho sticky com fundo branco quase opaco e borda inferior discreta ao rolar. No mobile, botão de menu de 44 × 44 px abre navegação com os mesmos links. Estados de foco, Escape para fechar e retorno do foco ao acionador.

### 5.2 Hero — tecnologia com proximidade

Painel dentro do container, mínimo visual aproximado de 620 px no desktop, padding de 56 px. Fundo em gradiente suave `#F3F7FF → #E4EFFF`, sem texto rasterizado.

Grid 6/6. À esquerda: tag “Odontologia para todas as fases”, H1 “Seu sorriso merece um novo cuidado.”, parágrafo “Tecnologia, escuta e atenção em cada etapa do seu tratamento.” e duas ações: “Agendar avaliação” e “Conhecer tratamentos”. Parágrafo limitado a 440 px.

À direita: render original de dente com base de implante parcialmente visível e arco translúcido. Aproximadamente 460 × 500 px visuais, sem sobrepor o título. Um pequeno cartão HTML, “Vamos planejar seu cuidado?”, pode ocupar o canto inferior do bloco, sem alegar disponibilidade ou avaliação gratuita.

No mobile: texto, botões e imagem nessa ordem; padding de 24 px; arte com área de cerca de 320 × 340 px e altura adaptável. Sem sobreposições ou cortes da coroa. Não usar largura fixa que provoque rolagem horizontal.

### 5.3 Faixa de confiança

Três atributos em grid, sem estatísticas inventadas: “Planejamento individual”, “Atenção em cada etapa” e “Ambiente acolhedor”. Ícones lineares de 24 px, texto de 16 px e divisores leves. Desktop com padding vertical de 32 px; mobile empilhado com gap de 20 px.

### 5.4 Tratamentos — painel escuro + acordeão

Painel `ink-800`, raio de 32 px, padding de 48 px. Título “Cuidado completo, no seu ritmo.” e introdução curta em branco com texto secundário claro.

Grid 7/5 com gap de 32 px. À esquerda, acordeão com seis itens: “Prevenção e check-up”, “Limpeza e saúde gengival”, “Restaurações”, “Implantes”, “Ortodontia” e “Estética do sorriso”. Primeiro item aberto inicialmente. Só um aberto por vez. Cabeçalhos com no mínimo 56 px de altura e ícone de expansão; `button`, `aria-expanded` e região identificada. Não inserir preço ou prazo sem dados reais.

O item aberto contém texto e link “Conversar sobre este tratamento”. À direita, uma fotografia correspondente ao item, proporção 4:3. Reutilizar as fotos A03–A08 do inventário. A troca não deve deslocar a altura do painel de forma abrupta; em mobile, colocar a foto dentro do conteúdo aberto. Implementar sem depender apenas de hover.

Esta seção combina o contraste da primeira referência e o mecanismo de serviços da segunda; não repetir a fileira de três cartões da primeira página.

### 5.5 Primeira avaliação

Bloco claro em grid 7/5: texto “Um plano pensado para você.” à esquerda, lista curta do processo — conversa inicial, avaliação e orientação de próximos passos — e CTA. À direita, cartão com fotografia vertical de consultório (A09), raio de 24 px, com legenda HTML em área branca: “Conheça nosso espaço”.

Usar linguagem de convite, sem copiar o cartão de “80%”, afirmar gratuidade ou prometer resultado clínico. Se houver oferta real posteriormente, escrever condições aprovadas pela clínica.

### 5.6 Diferenciais

Quatro cartões: “Escuta atenta”, “Planejamento claro”, “Conforto no atendimento” e “Cuidado contínuo”. Cada um com ícone linear de 28 px, título e duas linhas de texto. Grid de 4 colunas, depois 2, depois 1. Padding de 24 px, fundo branco, borda `line`, sem contornos ovais da segunda referência.

### 5.7 A clínica

Título “Um espaço para você se sentir bem.”, texto de até 320 caracteres e galeria de três imagens: recepção (A10), consultório (A11) e espera (A12). Todas devem representar o mesmo projeto de interiores.

Desktop: recepção ocupa 6 colunas, demais imagens 3 cada; altura de 320 px, `object-fit: cover`. Mobile: primeira em largura total e duas abaixo em duas colunas; altura de 220 px para a primeira e 160 px para as menores. Imagens não devem conter textos de fachada ou logos gerados.

### 5.8 Equipe

Título “Pessoas que cuidam de pessoas.” Quatro cartões, proporção de foto 4:5, raio de 24 px e bloco de texto abaixo. Grid 4/2/1 conforme a largura. Usar A13–A16 apenas como material conceitual até receber fotos reais. Nome, especialidade e registro profissional são conteúdo real a fornecer; no protótipo, indicar “Nome do profissional” e “Especialidade”. Não inventar credenciais.

Não incluir avatares com números de pacientes como prova social. Caso um conceito de avatares seja necessário em estudo visual, usar o mesmo conjunto de retratos e indicar seu caráter ilustrativo.

### 5.9 Perguntas frequentes

Acordeão claro com quatro perguntas: “Como agendar uma avaliação?”, “Como funciona a primeira visita?”, “Quais tratamentos a clínica oferece?” e “Como obter informações sobre pagamento?”. Respostas limitadas às informações confirmadas; na ausência, orientar contato com a equipe. Não assumir convênios, horários ou modalidades de atendimento.

### 5.10 CTA e rodapé

Painel azul `brand-600`, padding de 48 px, título “Vamos conversar sobre seu sorriso?” e botão branco “Agendar avaliação”, com texto azul escuro. Sem imagem adicional necessária.

Rodapé em `ink-950`: marca negativa, navegação, contato, endereço e horários reais quando disponíveis. Usar marcadores explícitos no protótipo: `[telefone]`, `[endereço]`, `[horários]`. Privacidade e dados profissionais devem ser preenchidos antes da publicação. Não copiar os contatos russos ou ingleses das referências.

## 6. Componentes e comportamento

| Componente | Especificação |
| --- | --- |
| Botão principal | Altura mínima 48 px; padding horizontal 24 px; azul #1466E8; texto branco; hover #104DB5 |
| Botão secundário | Mesma altura; fundo transparente ou branco; borda #DCE4EF; texto #172333 |
| Foco | Outline de 3 px, afastamento de 3 px; cor ajustada ao fundo para permanecer visível |
| Links | Estados de foco e hover visíveis; links no corpo com sublinhado |
| Tags | Fonte 13–14 px, padding 8 × 12 px, fundo branco; sem depender só de cor para significado |
| Cartão | Raio 24 px; padding 24 px quando houver texto; sem transformar bloco sem ação em botão |
| Movimento | Transições de 160–220 ms; entrada opcional de 12 px; respeitar `prefers-reduced-motion` |

Agendamento: o destino deve ser configurável para o canal real da clínica. Em protótipo sem contato informado, abrir um diálogo informativo indicando que o canal ainda precisa ser configurado. Não simular agendamento concluído. Antes de produção, substituir pelo fluxo acordado e verificar todas as ações.

Não adicionar chat, formulário de saúde, área do paciente ou backend a partir desta spec sem um requisito adicional.

## 7. Imagens e implementação

- Ativos essenciais: A01 e A03–A16 do documento de prompts; A02 é uma alternativa ao hero, não uma segunda imagem obrigatória. Avatares A17 são opcionais e derivam dos retratos.
- Fotos A03–A16: material de conceito para o protótipo. Substituir fotos de equipe e clínica por imagens reais antes de apresentá-las como registros da Orvia.
- Render 3D pode permanecer como ilustração. Não usá-lo como explicação clínica ou representação garantida de um produto específico.
- Separar arte, texto, logo, cartões e botões. Nunca implementar a página como uma imagem única.
- Usar AVIF/WebP quando disponível; preservar PNG/WebP com alfa no hero. SVG para logo, ícones, padrões, sorriso abstrato e setas.
- Metas de entrega: hero até 350 KB após otimização; fotos de cartões até 150 KB cada; imagem principal da galeria até 250 KB. São metas, sujeitas à qualidade visual.
- Exportar `srcset` de 480, 800 e 1200 px nas fotos; definir dimensões para evitar saltos. Hero carregado prioritariamente; demais imagens com lazy loading.
- Alt descritivo para fotos que informam; `alt=""` e ocultação adequada para arte decorativa. Não descrever pessoas geradas como profissionais reais.

## 8. Critérios de aceite

- Marca Orvia com símbolo próprio; nenhuma marca FORGE, Dentiva ou LUMIDENT na entrega.
- Paleta e medidas propostas aplicadas de forma consistente; composição não reproduz integralmente nenhuma referência.
- Hero com título legível, arte independente e CTA visível nas larguras de teste.
- Menu, acordeões e diálogo operáveis por teclado, com foco visível e nomes acessíveis.
- Sem overflow horizontal a 360 px e com zoom de 200%; texto não cortado por alturas fixas.
- Imagens coerentes entre si, sem defeitos evidentes de anatomia, instrumentos ou arquitetura.
- Ausência de estatísticas, depoimentos, preços, descontos e credenciais fictícias apresentados como fatos.
- Contatos e ações configurados com dados reais antes de produção.

## 9. Prompt base para implementar o site

Copiar este prompt junto com esta spec e o inventário de imagens:

```text
Crie uma landing page responsiva em português do Brasil para Orvia Odontologia, seguindo o arquivo DESIGN-SPEC.md e usando IMAGE-PROMPTS.md para identificar os ativos visuais.

A direção é odontologia contemporânea, tecnológica e acolhedora. Inspire-se na geometria e contraste do branding.jpg, no destaque 3D e contraste de website-design.jpg e na organização de serviços, ambientes e equipe de website-design2.jpg. Crie uma composição original, com logo original e azul #1466E8. Não replique nomes, símbolos, números, textos ou layouts integrais das referências.

Use Manrope, container máximo de 1200 px, ritmo amplo, raios entre 14 e 36 px e contraste claro/escuro. Organize a página em cabeçalho, hero assimétrico com implante 3D à direita, faixa de confiança sem números, tratamentos em acordeão sobre painel escuro, convite à avaliação, diferenciais, galeria da clínica, equipe, dúvidas, CTA e rodapé. Preserve a ordem, as medidas adaptáveis e os comportamentos detalhados na spec.

Texto principal: “Seu sorriso merece um novo cuidado.” CTA: “Agendar avaliação”. Botões e textos devem ser HTML, nunca embutidos nas fotos. Use SVG para logo e ícones; use os arquivos raster para fotografias e render 3D. Não use o mockup completo do site como implementação.

Implemente navegação por âncoras, menu mobile acessível, acordeões por teclado, estados de foco e suporte a movimento reduzido. Não invente contatos, registros, estatísticas ou condições comerciais. Imagens e profissionais gerados são conceituais. Onde faltarem dados, use os marcadores previstos e o comportamento de protótipo descrito na spec.

Valide a apresentação em 1440, 1024, 768, 390 e 360 px, sem overflow, mantendo os textos legíveis e todos os controles utilizáveis. Entregue o código e indique dados reais ainda pendentes.
```
