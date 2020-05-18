# API em Node.js

Etapas para utilização da API.

1. Clone ou baixe o repositório para seu computador.

2. No diretório do projeto, utilizando o prompt de comandos, instale as dependências com o comando:

```
npm i
```

3. Ainda no diretório, na raiz do projeto, crie um arquivo **".env"** com o conteúdo:

```
SECRET="SUA CHAVE SECRETA UTILIZADA PARA A CRIPTOGRAFIA DO TOKEN JWT"
```

4. Crie o arquivo **"config/firebase.js"** utilizando informações de um projeto do Firebase, com o conteúdo:

```js
module.exports = {
    apiKey: "DADOS_DO_PROJETO_FIREBASE",
    authDomain: "DADOS_DO_PROJETO_FIREBASE",
    databaseURL: "DADOS_DO_PROJETO_FIREBASE",
    projectId: "DADOS_DO_PROJETO_FIREBASE",
    storageBucket: "DADOS_DO_PROJETO_FIREBASE",
    messagingSenderId: "DADOS_DO_PROJETO_FIREBASE",
    appId: "DADOS_DO_PROJETO_FIREBASE"
};
```

5. No prompt de comando, na raiz do projeto, execute o comando:

```
npm start
```

Após execução do comando acima, a API ficará disponível para uso local, normalmente no endereço: **http://localhost:5000**
