# Cartão digital — Igor Lacrose

Página estática pronta para GitHub Pages ou qualquer hospedagem. Não precisa instalar dependências nem executar uma compilação.

## Publicar em /card no site atual

1. Extraia o ZIP.
2. No repositório que publica o site, abra ou crie a pasta `card`.
3. Coloque dentro dela `index.html`, `style.css`, `app.js`, `Igor-Lacrose.vcf` e a pasta `assets` completa.
4. Confirme as alterações e aguarde a publicação da sua hospedagem.

Se a pasta antiga tiver um service worker, mantenha também o novo `sw.js` deste pacote no lugar do antigo. Ele remove somente os caches usados pela versão anterior deste cartão e cancela seu próprio registro.

## Publicar como um site separado no GitHub Pages

1. Envie os arquivos e a pasta `assets` à raiz do repositório.
2. No GitHub, vá a **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, sua branch e a pasta **/(root)**. Salve.
4. Use o endereço exibido pelo GitHub após a publicação. Não é necessário incluir um domínio personalizado.

## Conteúdo e funcionamento

- A arte aprovada é preservada no topo. Os títulos, serviços e controles abaixo são elementos reais da página.
- WhatsApp, ligação, Instagram, site e botões dos serviços têm destinos configurados.
- Salvar contato baixa o arquivo de contato compatível com celulares.
- Compartilhar usa o menu nativo quando disponível; nos demais casos copia ou exibe o link da página publicada.
- O QR Code funciona sem serviços externos e abre o WhatsApp de Igor.
- Todos os arquivos visuais estão no pacote. Não há fontes ou bibliotecas externas.
- A composição se adapta às telas pequenas; a área de contato passa a uma coluna em celulares estreitos para manter a leitura.

Para alterar os textos, edite `index.html`. Aparência em `style.css`; comportamento em `app.js`; contato em `Igor-Lacrose.vcf`. Ao trocar o número de WhatsApp, atualize também a imagem do QR Code.
