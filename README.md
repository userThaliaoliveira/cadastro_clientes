# Sistema de Gerenciamento de Clientes (Angular)

Este é um projeto Angular que demonstra um sistema simples de gerenciamento de clientes. Ele inclui funcionalidades como adicionar, listar, editar e excluir clientes. Além disso, possui um sistema de autenticação de usuário para acessar as funcionalidades.

## Requisitos

Certifique-se de que você possui o seguinte software instalado em seu sistema:

- [Node.js](https://nodejs.org/) (com o npm - Node Package Manager)
- [Angular CLI](https://cli.angular.io/)

## Configuração do Projeto

1. Clone o repositório para o seu sistema local:
git clone <URL do repositório>

2. Navegue até o diretório do projeto:
cd nome-do-seu-projeto

3. Instale as dependências do projeto:
npm install

## Executando o Aplicativo

Após a configuração do projeto, você pode iniciar o aplicativo da seguinte maneira:
ng serve


Isso iniciará o servidor de desenvolvimento e você poderá acessar o aplicativo no seu navegador em `http://localhost:4200/`.

## Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- Login de usuário: Para acessar as funcionalidades, você deve fazer login com um usuário e senha válidos.

- Gerenciamento de Clientes: Você pode adicionar, listar, editar e excluir clientes.

## Tecnologias Utilizadas

- Angular: O framework JavaScript utilizado para desenvolver a interface do usuário.

- ngx-toastr: Uma biblioteca para exibir mensagens de notificação ao usuário.

## Estrutura do Projeto

- `src/app/components`: Este diretório contém os componentes do aplicativo, incluindo componentes para o formulário de login, a lista de clientes e o formulário de cliente.

- `src/app/model`: Contém a definição das classes de modelo, como `Customer` e `User`.

- `src/app/services`: Aqui estão os serviços utilizados pelo aplicativo, incluindo o serviço de autenticação e o serviço de gerenciamento de clientes.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para melhorar, adicionar novos recursos ou corrigir problemas existentes no projeto.

## Licença

Este projeto é distribuído sob a [licença MIT](LICENSE).
