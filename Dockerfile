# Imagem de Origem
FROM node:15.11.0-alpine3.10
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . .

# Inicializa a aplicação
ENTRYPOINT ["npm", "start"]