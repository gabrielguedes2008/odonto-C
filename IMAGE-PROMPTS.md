# Orvia Odontologia — leitura visual e prompts de imagens

## 1. Escopo e uso

Este arquivo acompanha [DESIGN-SPEC.md](DESIGN-SPEC.md). Contém a leitura das três imagens de `ref`, o mapeamento de suas composições visuais e os prompts para criar os ativos no GPT. **Atualização de 15/10/2026:** os ativos principais A01, A03–A16 e B01 foram gerados. Consulte [IMAGES-GENERATED.md](IMAGES-GENERATED.md) para os arquivos existentes, dimensões e a revisão de A16. As saídas abaixo continuam descrevendo os alvos planejados; os originais entregues estão em PNG. Alternativas e aplicações opcionais ainda não foram geradas.

Os screenshots permitem identificar temas e composição; não permitem recuperar os arquivos originais nem detalhes fora do recorte. Na segunda referência, avatares são pequenos demais para identificar indivíduos. As descrições se limitam ao que está visível.

Para gerar: cole o prompt base da seção 3 e, em seguida, um prompt individual. Gere uma imagem por vez. As dimensões indicam o alvo de exportação/composição; se a ferramenta entregar outro tamanho, preservar a proporção no recorte e exportar depois. Em novas conversas, repetir o prompt base. Não é necessário gerar alternativas e mockups opcionais para implementar o site.

Quando anexar as três referências, declare: “Imagem 1, branding: referência de linguagem de marca; imagem 2, website-design: referência de impacto e material 3D; imagem 3, website-design2: referência de organização e ambiente. Nenhuma é alvo de edição ou cópia literal.” Para fotos individuais, usar a prancha somente como contexto, sem pedir para reconstruir o screenshot.

## 2. Inventário do que está visível

### `ref/branding.jpg`

| Elemento | Leitura | Destino |
| --- | --- | --- |
| Marca grande branca sobre azul | Símbolo F abstrato e wordmark FORGE de formas geométricas | B01, novo símbolo e nome Orvia |
| Marca horizontal sobre branco | Variante azul/preto | Variante de B01; não exige nova fotografia |
| Amostra Bauhaus e alfabeto | Referência tipográfica geométrica | Definição vetorial/tipográfica; não usar como imagem do site |
| Três amostras cromáticas | #007BFF, #FFFFFF, #333333 | Paleta própria na spec |
| Celular em diagonal | Aplicativo com símbolo em tela de início | B03 opcional |
| Notebook sobre cadeira de madeira | Tela com website e marca | B04 opcional |
| Papelaria sobre bandeja e tecido azul | Papéis, cartões, caneca e acessórios com identidade | B05 opcional |
| Relógio sobre fundo azul | Tela com marca e grafismo tecnológico | B06 opcional |
| Sacola azul sobre ripado | Marca branca aplicada em tecido | B07 opcional |
| Painéis arredondados sobre preto | Estrutura da prancha de apresentação | B02 opcional; não é layout do site |

### `ref/website-design.jpg`

| Elemento | Leitura | Destino |
| --- | --- | --- |
| Hero central | Coroa dentária perolada sobre componentes metálicos de implante em vista explodida; ocupa grande parte do hero | A01, com composição própria |
| Trajetória orbital e etiquetas | Linhas e pequenas anotações ao redor do objeto | Opcional em SVG/HTML; não gerar texto na arte |
| Foto de check-up | Paciente reclinado e duas profissionais com roupa vinho e máscaras | A03 |
| Foto de limpeza | Profissional de roupa escura, proteção facial e instrumentos em atendimento | A04 |
| Foto de restauração | Paciente em close, mãos enluvadas e iluminação/instrumentos de atendimento | A05 |
| Cartão azul “80%” e sorriso | Percentual e desenho simples de sorriso | Substituir por conteúdo próprio; sorriso, se usado, deve ser SVG |
| Cartão parcialmente visível no fim | Só uma pequena parte do bloco seguinte pode ser vista | Não há imagem completa suficiente para inventariar ou reconstruir |
| Marca, setas, ícones e números | Elementos da interface | HTML/SVG; não são fotos a gerar |

### `ref/website-design2.jpg`

| Elemento | Leitura | Destino |
| --- | --- | --- |
| Hero à direita | Dente branco 3D em volume translúcido, linhas luminosas, folhas verdes e névoa clara | A02, alternativa; A01 combina parte dessa linguagem |
| Pequenos avatares sob o texto | Grupo de três rostos em círculos | A17, derivado dos retratos; uso opcional sem alegação de pacientes |
| Foto do serviço expandido | Paciente em close e mãos com luvas durante exame/tratamento | A05 cobre a função; não duplicar a geração |
| Cartão vertical de consulta | Cadeira odontológica em consultório claro com janela, equipamentos e planta | A09 |
| Galeria 1 | Recepção com balcão claro, luz quente e vegetação | A10 |
| Galeria 2 | Consultório claro com cadeira e equipamentos | A11; pode reutilizar A09 se o recorte funcionar |
| Galeria 3 | Espera com sofá azul acinzentado, decoração neutra e planta | A12 |
| Retrato 1 | Homem de cabelo escuro, jaleco branco e braços cruzados | A13 |
| Retrato 2 | Mulher de cabelo claro preso e jaleco branco | A14 |
| Retrato 3 | Homem de cabelo escuro, roupa clínica azul/cinza | A15 |
| Retrato 4 | Mulher de cabelo escuro preso e jaleco branco | A16 |
| Benefícios, calendário, setas e redes sociais | Ícones lineares e componentes de UI | SVG/HTML; não gerar como fotografia |

A06–A08 complementam os seis tratamentos da nova spec: são imagens novas necessárias ao design combinado, não fotos observadas nas referências. B01–B07 são exploração de marca e apresentação. U01 é um estudo de interface opcional.

## 3. Prompt base de direção visual

Copiar o bloco inteiro antes de cada prompt individual ou mantê-lo como instrução na mesma conversa:

```text
Você é diretor de arte e fotógrafo de uma nova identidade de odontologia chamada Orvia Odontologia. Crie uma imagem original para esse projeto a partir do briefing individual que virá abaixo.

Direção: tecnologia precisa com cuidado humano, sofisticada sem ostentação. Cores de direção: azul #1466E8, azul profundo #104DB5, azul muito claro #E4EFFF, branco #FFFFFF e grafite #172333; interiores com madeira clara #E9DFD1. As cores hexadecimais orientam a arte, sem exigir superfícies fotográficas chapadas.

Fotografias: linguagem editorial natural, pele com textura e diversidade plausível de adultos brasileiros, luz difusa de janela, balanço neutro levemente quente, contraste suave. Clínica clara, organizada, com materiais reais e detalhes discretos de azul. Evitar aparência de banco de imagens excessivamente posada. Manter coerência de arquitetura entre fotos de ambientes e de pessoas recorrentes entre suas variações.

Renders 3D: cerâmica branco-pérola com detalhes sutis, metal acetinado, acrílico translúcido e reflexos controlados. Visual de campanha conceitual, sem parecer uma explicação clínica validada.

Se referências forem anexadas, usar somente temas, clima, materiais e linguagem geral. Criar composição, identidade e pessoas próprias. Não reproduzir símbolos, rostos, nomes ou layouts das referências. Não inserir FORGE, Dentiva ou LUMIDENT.

Uma composição por imagem. Sem texto, letras, números, botões, legendas, marcas, marcas d'água ou moldura, exceto quando o briefing individual autorizar expressamente o nome Orvia. Não inserir depoimentos nem resultados de antes e depois. Evitar sorrisos artificialmente perfeitos, pele plástica, mãos deformadas, dedos extras, instrumentos fundidos e dentes duplicados.

Respeitar o espaço negativo, o enquadramento, o fundo e o formato definidos no briefing individual. Não adicionar ornamentos não solicitados. Gerar apenas o ativo solicitado, não a página inteira, exceto no estudo U01.
```

## 4. Imagens para o site

### A01 — Hero principal: implante e arco translúcido

Arquivo planejado: `public/images/hero-implante.png`. Alvo: 1200 × 1400 px, proporção 6:7. Fundo transparente real. Uso: hero da spec, sobre gradiente CSS. Alt sugerido: vazio, se usado apenas como decoração.

```text
Use case: stylized-concept.
Crie um render 3D original para a Orvia: um molar de cerâmica branco-pérola, uma pequena conexão metálica acetinada e parte de uma base de implante, alinhados verticalmente com uma separação sutil entre coroa e conexão. A base deve ser secundária; a coroa é protagonista. Câmera frontal em três quartos, perspectiva de produto, objeto completo sem corte.
Atrás do conjunto, um único arco aberto de acrílico translúcido com reflexo azul muito suave, evocando proteção e a geometria de um O aberto. Nada de cápsula fechada, folhas, órbitas numerosas ou faíscas. Iluminação grande e difusa acima à esquerda, detalhes materiais delicados, sem cromado espelhado excessivo.
Composição vertical 6:7, objeto centralizado com margem de segurança de 10% e leve respiro extra à esquerda. Fundo realmente transparente com canal alfa, sem padrão quadriculado desenhado e sem retângulo colorido. Sem tipografia, etiquetas, logo, números, elementos de interface ou cena clínica. Imagem conceitual de campanha.
```

### A02 — Alternativa de hero: dente protegido

Arquivo: `public/images/hero-dente-alternativo.png`. Alvo: 1200 × 1400 px. Transparente. **Alternativa a A01; escolher apenas um hero.**

```text
Use case: stylized-concept.
Render 3D de um único molar branco-pérola de proporções equilibradas, com raízes estilizadas discretas, envolvido parcialmente por dois arcos abertos e assimétricos de vidro translúcido. Um arco reflete azul #1466E8 de forma suave. Interpretar a ideia de proteção e cuidado de modo original, sem cápsula, folhas ou fios luminosos em espiral.
Enquadramento vertical 6:7, vista frontal em três quartos, coroa na metade superior, objeto inteiro e margens de 10%. Luz de estúdio difusa, cerâmica acetinada, vidro com bordas legíveis sobre fundo claro. Fundo com alfa real. Sem implante, pedestal, texto, marca, interface ou sombra retangular. Manter o mesmo nível de realismo do hero A01.
```

### A03 — Prevenção e check-up

Arquivo: `public/images/tratamento-prevencao.webp`. Alvo: 1600 × 1200 px, 4:3. Fundo fotográfico.

```text
Use case: photorealistic-natural.
Fotografia editorial de um check-up odontológico tranquilo em adulto de cerca de 40 anos, reclinado numa cadeira azul acinzentada. Uma dentista com roupa clínica azul e máscara avalia o paciente com espelho odontológico; uma auxiliar pode aparecer de forma secundária ao fundo. Mãos enluvadas com gestos discretos e plausíveis. Enquadramento médio em três quartos, câmera à altura da cabeceira, sem exposição invasiva da boca.
Consultório branco com madeira clara e poucos equipamentos organizados. Luz natural suave. Composição horizontal 4:3, ação no centro, margens para recorte, expressão corporal confortável e pele natural. Sem texto, logo ou instrumentos apontados para a câmera. Não copiar as pessoas nem os uniformes vinho da referência.
```

### A04 — Limpeza e saúde gengival

Arquivo: `public/images/tratamento-limpeza.webp`. Alvo: 1600 × 1200 px.

```text
Use case: photorealistic-natural.
Fotografia horizontal 4:3 de atendimento de higiene odontológica em adulto, visto de lado em plano médio fechado. Profissional com uniforme azul profundo, máscara e proteção ocular; paciente reclinado e relaxado. Mostrar poucas ferramentas separadas e reconhecíveis, com mãos enluvadas anatomicamente naturais. A boca não deve dominar o quadro.
Consultório da Orvia com superfícies brancas, detalhes azul acinzentado e luz de janela. Foco na interação cuidadosa e no olhar atento do profissional; fundo discretamente desfocado, sem aspecto dramático ou cirúrgico. Sem sangue, respingos, texto, marca ou brilho artificial nos dentes.
```

### A05 — Restauração / atendimento em close

Arquivo: `public/images/tratamento-restauracao.webp`. Alvo: 1600 × 1200 px. Atende às duas referências de atendimento em close sem gerar duas fotos equivalentes.

```text
Use case: photorealistic-natural.
Fotografia de atendimento restaurador em uma paciente adulta, enquadramento lateral próximo porém respeitoso, mostrando rosto parcial, óculos de proteção e mãos com luvas. Profissional fora de foco à lateral. Usar um espelho e um instrumento odontológico simples, sem dispositivo luminoso dramático e sem detalhes invasivos. Paciente confortável, anatomia natural e materiais plausíveis.
Formato horizontal 4:3, assunto central com espaço de segurança de 12%, luz branca difusa e fundo de consultório em azul claro. Textura real de pele, nenhuma promessa de resultado visual. Sem sangue, antes e depois, letras, marca ou equipamento atravessando o rosto.
```

### A06 — Implantes: conversa de planejamento

Arquivo: `public/images/tratamento-implantes.webp`. Alvo: 1600 × 1200 px. Composição adicional para o novo site.

```text
Use case: photorealistic-natural.
Fotografia editorial horizontal 4:3 de uma conversa de planejamento odontológico. Dentista e paciente adulto de aproximadamente 55 anos sentados à mesma altura em uma mesa clara. O profissional segura um pequeno modelo didático de arcada e explica com gesto calmo; o paciente escuta com atenção. O modelo é secundário e não precisa revelar microdetalhes.
Clínica branca, marcenaria clara e toque de azul, janela lateral com luz difusa. Enquadramento médio, foco nas pessoas e na relação de confiança, sem pose publicitária exagerada. Sem radiografias inventadas em destaque, monitor legível, textos, logos, cirurgia, antes e depois ou promessa de resultado.
```

### A07 — Ortodontia: planejamento do sorriso

Arquivo: `public/images/tratamento-ortodontia.webp`. Alvo: 1600 × 1200 px. Composição adicional.

```text
Use case: photorealistic-natural.
Fotografia horizontal 4:3 de consulta ortodôntica com uma paciente adulta jovem e uma dentista. A profissional apresenta um pequeno estojo aberto com alinhador transparente sobre a mesa; a paciente observa, sem colocá-lo na boca. Plano médio, foco nos rostos e gesto explicativo, objeto secundário com proporções naturais.
Consultório claro e acolhedor da mesma série Orvia, cadeiras azul acinzentadas, madeira clara, luz difusa de janela. Expressões naturais, sem sorrisos excessivos. Não mostrar marcas comerciais, texto em embalagens, boca em macro, mãos deformadas nem alinhador fundido aos dedos.
```

### A08 — Estética do sorriso: retrato natural

Arquivo: `public/images/tratamento-estetica.webp`. Alvo: 1600 × 1200 px. Composição adicional.

```text
Use case: photorealistic-natural.
Retrato editorial horizontal 4:3 de uma pessoa adulta brasileira de cerca de 35 anos, sorriso discreto e espontâneo com dentes de aparência natural, pequenas assimetrias e tonalidade realista. Enquadramento de busto, ombros relaxados, olhar ligeiramente fora da câmera, roupa neutra em azul claro.
Fundo de clínica muito suavemente desfocado, branco com detalhes de madeira clara. Luz ampla lateral, textura de pele preservada e contraste baixo. Sem clareamento extremo, simetria artificial, antes e depois, slogan, marca ou aparência de resultado clínico documentado. Fotografia ilustrativa de bem-estar.
```

### A09 — Consultório vertical para convite à avaliação

Arquivo: `public/images/avaliacao-consultorio.webp`. Alvo: 1200 × 1600 px, 3:4.

```text
Use case: photorealistic-natural.
Fotografia de interiores vertical 3:4 de um consultório odontológico contemporâneo compacto e confortável. Cadeira azul acinzentada no terço inferior central, luminária odontológica e bancada branca organizadas, janela alta com cortina leve à esquerda, marcenaria de carvalho claro e uma planta discreta no canto oposto.
Luz natural clara, materiais acetinados, linhas verticais corrigidas e lente moderadamente ampla sem distorção. Manter o terço superior simples, com parede clara e pouco contraste para permitir recorte e eventual camada HTML. Sem pessoas, texto, logo ou equipamentos duplicados. Este ambiente estabelece o padrão arquitetônico para A10–A12.
```

### A10 — Recepção

Arquivo: `public/images/clinica-recepcao.webp`. Alvo: 1800 × 1200 px, 3:2.

```text
Use case: photorealistic-natural.
Fotografia arquitetônica horizontal 3:2 da recepção da mesma clínica apresentada na imagem A09, que será anexada como referência de arquitetura. Balcão de frente curva em madeira clara e superfície mineral branca, parede em off-white sem letreiro, iluminação indireta discreta, uma planta e pequeno detalhe azul acinzentado.
Composição ampla e serena, balcão no terço esquerdo e passagem visual à direita, luz natural misturada com luz quente suave. Perspectiva corrigida, materiais plausíveis, escala humana, ambiente sem pessoas. Sem marca, texto, cartazes, excesso de decoração ou recepção de hotel luxuoso. Preservar a identidade de interiores de A09.
```

### A11 — Consultório horizontal

Arquivo: `public/images/clinica-consultorio.webp`. Alvo: 1600 × 1200 px, 4:3. Pode reutilizar A09 se houver margem suficiente para recorte sem distorcer.

```text
Use case: photorealistic-natural.
Mostre o mesmo consultório da imagem A09, anexada como referência de ambiente, de um segundo ângulo horizontal 4:3, visto da entrada. Preservar a mesma cadeira azul acinzentada, bancada branca, marcenaria clara, janela e posição coerente dos equipamentos. A cadeira aparece inteira em três quartos, com circulação livre ao redor.
Fotografia de arquitetura, luz natural difusa, câmera nivelada, materiais reais e equipamento organizado. Sem pessoas, texto, logo, instrumentos suspensos sem suporte ou novas portas impossíveis. Não redesenhar o ambiente como uma clínica diferente.
```

### A12 — Sala de espera

Arquivo: `public/images/clinica-espera.webp`. Alvo: 1600 × 1200 px, 4:3.

```text
Use case: photorealistic-natural.
Fotografia horizontal 4:3 da sala de espera da mesma clínica de A09 e A10, anexadas como referências de materiais. Sofá compacto azul acinzentado à direita, mesa lateral pequena de madeira clara, parede off-white e planta próxima à janela. Ambiente organizado e acolhedor, com circulação desobstruída e escala de clínica de bairro contemporânea.
Luz natural lateral, textura de tecido visível, perspectiva nivelada, composição sem excesso de objetos. Sem pessoas, texto, marca, televisão com conteúdo, revistas legíveis ou acabamento de hotel. Manter madeira e tons iguais aos ambientes aprovados.
```

### A13 — Retrato conceitual de profissional 1

Arquivo: `public/images/equipe-01.webp`. Alvo: 1200 × 1500 px, 4:5.

```text
Use case: photorealistic-natural.
Retrato editorial vertical 4:5 de um dentista fictício brasileiro, homem de aproximadamente 38 anos, pele morena clara, cabelo curto castanho-escuro e barba curta discreta. Jaleco branco sem bordados sobre roupa azul clara, mãos fora do quadro, expressão tranquila e sorriso leve. Enquadramento do peito para cima, olhos no terço superior, respiro acima da cabeça e corpo centralizado.
Fundo off-white com nuance azul muito suave, luz grande e difusa a 45 graus pela esquerda, textura natural de pele. Não imitar o rosto da referência. Sem texto, nome, crachá, logo ou acessórios com marca. Retrato conceitual, não registro de profissional real.
```

### A14 — Retrato conceitual de profissional 2

Arquivo: `public/images/equipe-02.webp`. Alvo: 1200 × 1500 px, 4:5.

```text
Use case: photorealistic-natural.
Retrato editorial vertical 4:5 de uma dentista fictícia brasileira, mulher de aproximadamente 34 anos, pele clara com textura natural, cabelo castanho-claro preso de modo simples. Jaleco branco sem bordados sobre roupa azul clara, mãos fora do quadro, postura relaxada e sorriso discreto.
Usar A13 aprovada como referência apenas de iluminação, enquadramento e fundo; criar outra pessoa. Peito para cima, olhos na mesma altura relativa, fundo off-white levemente azulado, luz suave pela esquerda. Sem texto, nome, crachá, logo, retoque plástico ou semelhança intencional com a referência original.
```

### A15 — Retrato conceitual de profissional 3

Arquivo: `public/images/equipe-03.webp`. Alvo: 1200 × 1500 px, 4:5.

```text
Use case: photorealistic-natural.
Retrato editorial vertical 4:5 de um dentista fictício brasileiro, homem de aproximadamente 32 anos, pele negra e cabelo crespo curto, expressão acolhedora com sorriso leve. Uniforme clínico azul profundo liso, sem jaleco, sem bordados. Mãos fora do quadro e postura natural.
Combinar iluminação, escala e fundo da A13 anexada: busto, olhos no terço superior, parede off-white com nuance azul e luz difusa pela esquerda. Preservar textura natural de pele. Criar rosto original. Sem texto, crachá, logo, estetoscópio ou aparência de pessoa famosa.
```

### A16 — Retrato conceitual de profissional 4

Arquivo: `public/images/equipe-04.webp`. Alvo: 1200 × 1500 px, 4:5.

```text
Use case: photorealistic-natural.
Retrato editorial vertical 4:5 de uma dentista fictícia brasileira, mulher de aproximadamente 42 anos, pele parda e cabelo castanho-escuro preso. Jaleco branco sem bordados sobre blusa azul clara, expressão confiante e gentil, sorriso natural discreto, mãos fora do quadro.
Usar A13 aprovada como referência de sessão fotográfica, sem copiar identidade facial: enquadramento de busto, mesmo fundo off-white azulado, olhos na mesma altura e luz grande e suave pela esquerda. Pele real, retoque mínimo. Sem nomes, marcas, crachás ou aparência de pessoa real identificável da referência.
```

### A17 — Avatares opcionais

Saídas planejadas: `avatar-01.webp`, `avatar-02.webp`, `avatar-03.webp`, 160 × 160 px. Derivar de A13, A14 e A15, preservando rosto. Não requer geração nova; recorte circular feito em CSS. Não usar como depoentes, pacientes ou evidência de volume de atendimentos.

Se o recorte precisar ser preparado no GPT, anexar um retrato por vez:

```text
Prepare uma versão quadrada deste retrato para avatar. Preserve integralmente identidade, rosto, expressão, roupa, luz e fundo. Faça apenas o enquadramento, centralizando o rosto com margem acima da cabeça. Não crie outra pessoa, não acrescente texto ou moldura e não desenhe círculo; o recorte circular será feito no site.
```

## 5. Prompts da identidade e aplicações opcionais

Estes ativos documentam a leitura completa de `branding.jpg`. Apenas o logo finalizado é necessário à interface; os mockups são para apresentação da identidade.

### B01 — Exploração de marca original

Saída planejada: `brand/orvia-logo-conceito.png`. Alvo: 1600 × 1000 px. Depois finalizar em SVG.

```text
Use case: logo-brand.
Crie uma proposta única de marca para “orvia”, com a assinatura “ODONTOLOGIA”. Símbolo original composto por dois arcos geométricos abertos, levemente deslocados, que sugiram um O e um caminho no espaço negativo. Evocar continuidade e cuidado, sem usar dente literal, cruz médica, letra F ou símbolo parecido com FORGE. Linhas simples e massas equilibradas, legibilidade em tamanho pequeno.
À direita, wordmark “orvia” em minúsculas, geométrico e contemporâneo, com curvas suaves e desenho próprio. Assinatura pequena abaixo. Cores azul #1466E8 e grafite #172333 sobre branco. Uma única proposta horizontal centralizada, sem mockup, textura, sombra ou relevo. Texto exato: “orvia” e “ODONTOLOGIA”, nenhuma outra palavra. Aparência plana e adequada à posterior construção vetorial.
```

Após aprovação, criar versões azul/grafite sobre branco, branca sobre azul e monocromática por edição vetorial do mesmo desenho. Não regenerar o símbolo independentemente em cada aplicação.

### B02 — Prancha de identidade

Saída: `brand/orvia-brandboard.webp`. Alvo: 1600 × 2000 px, 4:5. Anexar logo aprovado e aplicações aprovadas quando disponíveis.

```text
Use case: ads-marketing.
Monte uma prancha vertical 4:5 para apresentar Orvia Odontologia, usando o logo aprovado anexado como elemento invariável. Fundo off-white, composição editorial original com um grande painel azul no alto, versão da marca sobre branco, amostras de azul #1466E8, branco e grafite #172333, detalhe da geometria de arcos e duas aplicações já aprovadas.
Painéis com raio moderado, bastante respiro e grid assimétrico próprio. Não copiar a sequência, a moldura preta ou as proporções da prancha FORGE. Texto permitido apenas “orvia” e “ODONTOLOGIA”; as amostras podem ficar sem legendas. Não inventar um novo logo. Se faltarem aplicações anexadas, usar apenas painéis de cor e marca, sem criar itens extras.
```

### B03 — Aplicação em celular

Saída: `brand/orvia-celular.webp`. Alvo: 1600 × 1200 px.

```text
Use case: product-mockup.
Fotografia de produto de um smartphone genérico moderno, em três quartos, sobre superfície azul #1466E8 com sombra suave. Na tela, um ícone quadrado azul com o símbolo branco da Orvia, fornecido no logo aprovado anexado. O ícone é a aplicação protagonista; os demais elementos da tela são discretos, genéricos e sem marcas ou texto legível.
Composição horizontal 4:3 original, luz de estúdio difusa e acabamento realista. Preservar exatamente o símbolo anexado, sem redesenhá-lo. Não copiar a inclinação e recorte do celular da referência. Mockup conceitual de identidade, sem alegar que há um aplicativo funcional disponível.
```

### B04 — Aplicação em notebook

Saída: `brand/orvia-notebook.webp`. Alvo: 1600 × 1200 px. Anexar screenshot próprio do site ou U01 aprovado e logo.

```text
Use case: product-mockup.
Notebook genérico aberto sobre mesa de madeira clara num ambiente luminoso e acolhedor, fotografado em três quartos na horizontal 4:3. Aplicar na tela a imagem do site Orvia anexada, preservando conteúdo, cores, marca e proporções com perspectiva correta. Luz de janela e reflexos leves que não ocultem a interface.
Criar cenário original, sem cadeira como suporte e sem reproduzir a foto da FORGE. Sem marca do fabricante, mãos, textos adicionais ou nova interface inventada. Se não houver screenshot anexado, este prompt deve aguardar esse material.
```

### B05 — Papelaria

Saída: `brand/orvia-papelaria.webp`. Alvo: 1600 × 1200 px.

```text
Use case: product-mockup.
Still life horizontal 4:3 em vista superior levemente inclinada com papelaria da Orvia: pasta branca, cartão de visita azul, cartão de agendamento sem dados e caneca branca. Apoiar os itens sobre mesa clara, com pequeno tecido azul lateral. Arranjo assimétrico e espaçado, luz natural suave, papel fosco e impressão nítida.
Aplicar o logo aprovado anexado de modo consistente, com azul #1466E8, branco e grafite. Texto permitido somente “orvia” e “ODONTOLOGIA”; não inventar telefone, nome de dentista, endereço ou informações de paciente. Sem copiar a bandeja, quantidade de acessórios ou composição da referência. Preservar a marca anexada.
```

### B06 — Relógio, aplicação conceitual

Saída: `brand/orvia-relogio.webp`. Alvo: 1200 × 1200 px.

```text
Use case: product-mockup.
Fotografia de produto quadrada de um relógio inteligente genérico com pulseira grafite, apoiado em superfície azul muito clara. Tela azul profundo com o símbolo branco da Orvia do arquivo anexado, sem outros elementos. Perspectiva em três quartos, luz suave e materiais realistas.
Preservar o símbolo aprovado, não redesenhar. Sem marca do fabricante, números, notificações ou grafismo de rede tecnológica. Composição original diferente da referência. Trata-se apenas de estudo de aplicação visual, sem representar aplicativo ou integração existente.
```

### B07 — Sacola de tecido

Saída: `brand/orvia-sacola.webp`. Alvo: 1600 × 1200 px.

```text
Use case: product-mockup.
Fotografia horizontal 4:3 de sacola reutilizável em tecido azul #1466E8, com a marca Orvia branca do arquivo aprovado anexado. Sacola apoiada sobre banco liso de madeira clara, alças naturais, trama do tecido visível e dobra suave que respeite a impressão. Luz lateral de fim de manhã, sombra discreta.
Criar arranjo original, sem ripado diagonal e sem copiar o recorte da referência. Texto permitido apenas o logo anexado “orvia” e “ODONTOLOGIA”. Sem outros objetos, marcas ou lettering inventado. Manter símbolo e wordmark consistentes com o arquivo aprovado.
```

## 6. Prompt opcional de estudo visual do site completo

### U01 — Mockup de interface desktop

Saída: `concept/orvia-home-desktop.webp`. Alvo de composição: 1440 px de largura, página longa; o GPT pode precisar gerar em blocos. Este estudo serve para avaliar direção visual; o site final deve ser construído em HTML/CSS.

```text
Use case: ui-mockup.
Crie um estudo visual de alta fidelidade para uma landing page desktop da clínica Orvia Odontologia, em português, seguindo DESIGN-SPEC.md anexado. Use o logo aprovado e os ativos anexados; se ainda não houver, apresente ilustrações conceituais coerentes e o nome orvia escrito de forma simples.
Combinar geometria de marca e azul vivo, hero 3D contemporâneo e estrutura acolhedora de clínica. Layout original, fundo quase branco, container de 1200 px numa tela de 1440 px, fonte Manrope, títulos grandes e raios de 24–36 px. Header branco; hero azul claro com título contínuo à esquerda e implante perolado à direita; faixa com três atributos sem números; painel escuro com serviços em acordeão e foto lateral; bloco claro de avaliação; quatro diferenciais; galeria assimétrica da clínica; quatro retratos; perguntas frequentes; CTA azul e rodapé escuro.
Textos prioritários exatos: “orvia”, “Seu sorriso merece um novo cuidado.”, “Agendar avaliação”, “Conhecer tratamentos”, “Cuidado completo, no seu ritmo.” e “Pessoas que cuidam de pessoas.” Para outros blocos, usar texto curto em português sem inventar dados, descontos, credenciais ou depoimentos.
Sem moldura de dispositivo e sem copiar o layout completo de nenhuma referência. Não adicionar folhas, estatísticas gigantes, cartões de 80%, marcas alheias ou texto em russo. Se a página completa perder legibilidade, gerar primeiro header, hero e tratamentos e depois continuar as seções mantendo exatamente a mesma direção. O resultado é uma imagem de estudo, não código nem site funcional.
```

## 7. Sequência recomendada e controle de qualidade

1. Aprovar B01 como conceito de marca e finalizar seu vetor.
2. Gerar A01; usar A02 somente se quiser comparar uma alternativa.
3. Gerar A09 e usá-la como referência visual anexada em A10–A12. Reutilizar A09 para A11 se o recorte funcionar.
4. Gerar A03–A08 com a direção aprovada da clínica como contexto visual.
5. Gerar A13, aprovar iluminação e enquadramento; anexar esse retrato como referência de sessão para A14–A16.
6. Gerar U01 se desejar estudar o conjunto antes da implementação.
7. Gerar B03–B07 somente se precisar apresentar a identidade; B02 pode reunir as aplicações aprovadas.

Depois de cada imagem, conferir mãos, dentes, instrumentos, bordas, fundo transparente quando solicitado e espaço para recorte. Nas fotos de ambientes, conferir coerência de móveis, materiais e luz. Em aplicações de marca, conferir a escrita e o símbolo; para precisão final, aplicar o vetor aprovado sobre o mockup em editor.

Fotografias geradas são material conceitual. Não apresentá-las como fotos reais da clínica, dos profissionais ou de pacientes. Nenhum prompt pede estatísticas, resultados ou testemunhos fictícios.

Prompt curto de correção, anexando o resultado aprovado como alvo de edição:

```text
Edite somente [descrever uma correção concreta]. Preserve composição, identidade das pessoas, enquadramento, iluminação, materiais, cores e todos os demais elementos. Preserve a transparência existente, quando houver. Não adicione texto, objetos, marcas ou detalhes novos.
```
