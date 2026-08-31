# Segurança — PCM Máquinas

## Arquitetura
Este site é estático e não armazena credenciais, senhas, cartões ou dados de clientes no GitHub Pages.

## Boas práticas aplicadas
- Publicação somente por HTTPS no domínio de produção.
- Nenhuma chave de API, senha ou segredo deve ser incluído no HTML, CSS, JavaScript ou histórico Git.
- Links que abrem novas abas devem usar isolamento de contexto (`noopener`/`noreferrer`).
- Dependências e recursos externos devem usar HTTPS.
- O site não deve receber dados sensíveis diretamente; atendimento comercial é direcionado aos canais oficiais.

## Relato de vulnerabilidade
Use o canal de contato oficial publicado no site. Não inclua senhas, documentos, dados bancários ou outros dados sensíveis no primeiro contato.

## Limitação da hospedagem
GitHub Pages não oferece controle completo de cabeçalhos HTTP personalizados por repositório. Controles que exigem headers avançados (por exemplo HSTS personalizado e uma CSP completa via response header) devem ser adicionados por uma camada de proxy/CDN compatível, caso isso se torne necessário.
