# Keilvatel Design System Extraction

Analise do site publico Keilvatel, um template WordPress + Elementor + Jeg Elementor Kit para agencia de SEO e marketing digital.

Capturado em: 2026-07-17  
Modo de entrega: docs + tokens, sem copia local de imagens.

## Fontes

- Site: https://templatekit.jegtheme.com/keilvatel/
- Global kit CSS: https://templatekit.jegtheme.com/keilvatel/wp-content/uploads/sites/311/elementor/css/post-3.css?ver=1700562754
- Home CSS: https://templatekit.jegtheme.com/keilvatel/wp-content/uploads/sites/311/elementor/css/post-82.css?ver=1700562755
- Header CSS: https://templatekit.jegtheme.com/keilvatel/wp-content/uploads/sites/311/elementor/css/post-7.css?ver=1700562755
- Footer CSS: https://templatekit.jegtheme.com/keilvatel/wp-content/uploads/sites/311/elementor/css/post-675.css?ver=1700562755

## Leitura de design

O site usa uma linguagem comercial, acessivel e otimista para uma agencia de SEO. O sistema visual combina roxo/lavanda para base tecnologica, amarelo-dourado para acao e contraste, retratos recortados de pessoas de negocio e widgets de metricas para comunicar crescimento.

## Principios visuais

- Layout amplo com container de 1190px.
- Secoes alternando branco, lavanda clara e blocos roxos com ondas SVG.
- Titulos em Work Sans com peso 600 e corpo em Roboto.
- Palavras-chave destacadas por retangulo roxo com texto branco.
- Cards com raio 20px, iconografia grande e hover leve.
- CTAs amarelos com texto roxo escuro, raio 10px e deslocamento no hover.
- Ilustracoes e imagens de pessoas funcionam como prova visual de servico humano, nao como produto de software.

## Arquivos neste pacote

- `tokens.json`: tokens de cor, tipografia, espaco, raio, motion e layout.
- `site-structure.md`: estrutura da home, ordem das secoes e papel de cada bloco.
- `components.md`: especificacao dos componentes e padroes recorrentes.
- `assets.md`: manifesto de URLs publicas de imagens, logos, CSS e scripts relevantes.
- `implementation-notes.md`: orientacoes para reconstruir o visual em React/Tailwind ou Elementor.

## Diagnostico rapido

Pontos fortes:

- Identidade cromatica consistente.
- CTAs muito claros.
- Boa variedade de secoes para landing page.
- O uso de cards, metricas e pie charts reforca o tema de performance.

Pontos fracos:

- Muito texto placeholder.
- Algumas categorias sao inconsistentes, como "Our Pricing" acima do bloco de blog.
- Varios nomes e numeros parecem mockados.
- O contraste das secoes roxas funciona, mas depende fortemente de branco/lavanda.
- O sistema de ondas SVG e gradientes e marcante, porem pode ficar repetitivo se usado em excesso.
