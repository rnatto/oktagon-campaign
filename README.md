# Planejamento para disponibilizar a aplicação em produção

## Sugestão de melhorias

Começando no header da aplicação, precisamos alterar o título e logo para que a aplicação atenda um mercado de campanha genérico.
Para atender uma alta demanda de criação de tickets, precisamos adicionar paginação na listagem das campanhas. 

Já possuímos os filtros que já tornam a listagem eficaz nas buscas, mas precisamos adicionar a ordenação dos elementos com base nas datas.

Podemos verificar com o cliente da necessidade de filtrar as campanhas por períodos de data para facilitar buscas futuras. Mas o comportamento atual me parece atender a demanda.
Com estas pequenas alterações já teremos uma listagem de campanhas mais consistente e dinâmica. 

## Integridade

Devemos adicionar testes automatizados nos filtros para garantir a integridade das informações exibidas.
Os testes também devem ser implementados na criação de novas campanhas e novas ações, Assim garantimos uma boa cobertura de testes nas funcionalidades da aplicação, tornando-a mais consistente e confiável.


## Design

Para atender o design enviado, temos algumas pequenas alterações:

- Geral
    - Corrigir paleta de cores

- side menu
    - fixar tamanho (width);
    - Arredondar bordas da foto
    - Diminuir a sombra
    - Selecionar opção do menu com base na url

- header
    - remover sombra
    - adicionar ícone na esquerda
    - centralizar título

- lista de campanhas
    - barra de pesquisa
        - alinhamento e tamanho do campo e do botão
    - lista 
        - posição dos ícones
        - alterar cor do fundo na listagem

- Adicionar campanha
    - ajustar tamanho do título
    - componente de fotos
        - aceitar a adição de mais fotos (hoje aceita uma somente)
        - adicionar fotos pré cadastradas 
        - adicionar título das fotos

    - layout dos inputs
    - alterar date picker

- Editar campanha
    - Adicionar campos de comentário e analisar com o cliente qual a funcionalidade a ser implementada
    - Verificar com o cliente o que são as "Tasks" abertas 

- Adicionar ação
    - Layout dos inputs
    - Date picker
    ores

- side menu
    - fixar tamanho (width);
    - Arredondar bordas da foto
    - Diminuir a sombra
    - Selecionar opção do menu com base na url

- header
    - remover sombra
    - adicionar ícone na esquerda
    - centralizar título

- lista de campanhas
    - barra de pesquisa
        - alinhamento e tamanho do campo e do botão
    - lista 
        - posição dos ícones
        - alterar cor do fundo na listagem

- Adicionar campanha
    - ajustar tamanho do título
    - componente de fotos
        - aceitar a adição de mais fotos (hoje aceita uma somente)
        - adicionar fotos pré cadastradas 
        - adicionar título das fotos

    - layout dos inputs
    - alterar date picker

- Editar campanha
    - Adicionar campos de comentário e analisar com o cliente qual a funcionalidade a ser implementada
    - Verificar com o cliente o que são as "Tasks" abertas 

- Adicionar ação
    - Layout dos inputs
    - Date picker

## Implantação e disponibilidade

Para garantir que a aplicação seja de fácil implantação, devemos utilizar de um container, que será responsável por emcapsular a build da aplicação e expor em uma porta para acesso.
Em seguida, podemos utilizar do github actions para iniciar uma pipeline configurada no jenkins que será responsável por criar a imagem e disponibilizar o container dentro do servidor, mantendo assim uma entrega contínua para cada push na branch Main.

O fluxo acima será utilizado para atualizar a branch Stage, e em seguida podemos enviar para produção pelo próprio painel do jenkins, com uma segunda pipeline.

