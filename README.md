# API em Node.js

Etapas para utilização da API.

1. Clone ou baixe o repositório para seu computador.

2. No diretório do projeto, utilizando o prompt de comandos, instale as dependências com o comando:

```
npm i
```

3. Caso queira, atualize a chave secreta no arquivo **".env"**:

```
SECRET="SUA CHAVE SECRETA UTILIZADA PARA A CRIPTOGRAFIA DO TOKEN JWT"
```

4. Caso necessário, atualize as informações do arquivo **"config/firebase.js"** utilizando informações de um projeto do Firebase, com o conteúdo:

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

## Endpoints

Coleção no Postman: **https://www.getpostman.com/collections/046f996cac9dab498531**

---
### Autenticação

#### **POST /auth**

Payload:

```json
{
    "email": "vitorvarela3@gmail.com",
    "password": "123456"
}
```

Response:

```json
{
    "token": "valor_do_token"
}
```

---
### Usuários

#### **POST /users**

Payload:

```json
{
    "name": "nome do usuario",
    "email": "email@usuario",
    "password": "senha_do_usuario"
}
```

Response:

```json
{
    "id": "id_do_usuario",
    "name": "nome do usuario",
    "email": "email@usuario"
}
```

### **GET /users/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Response:

```json
{
    "id": "id_do_usuario",
    "name": "nome do usuario",
    "email": "email@usuario"
}
```

### **PUT /users/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Payload:

```json
{
    "name": "nome do usuario",
    "email": "email@usuario",
    "password": "senha_do_usuario"
}
```

Response:

```
"Usuario atualizado com sucesso"
```

### **DELETE /users/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Response:

```
"Usuario deletado com sucesso"
```

---
### Produtos

#### **POST /products**

Payload:

```json
{
    "name": "nome do produto",
    "description": "descrição do produto",
}
```

Response:

```json
{
    "id": "id_do_produto",
    "name": "nome do produto",
    "description": "descrição do produto",
}
```

### **GET /products**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Response:

```json
[
    {
        "id": "id_do_produto",
        "name": "nome do produto",
        "description": "descrição do produto",
    },
    ...
    {
        "id": "id_do_produto",
        "name": "nome do produto",
        "description": "descrição do produto",
    }
]
```

### **GET /products/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Response:

```json
{
    "id": "id_do_produto",
    "name": "nome do produto",
    "description": "descrição do produto",
}
```

### **PUT /products/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Payload:

```json
{
    "name": "nome do produto",
    "description": "descrição do produto",
}
```

Response:

```
"Produto atualizado com sucesso"
```

### **DELETE /products/:id**

Header:

```md
Authorization: Bearer **valor_do_token**
```

Response:

```
"Produto deletado com sucesso"
```

