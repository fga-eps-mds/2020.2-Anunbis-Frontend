# Imagem de Origem
FROM node:15.11.0-alpine3.10
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /home/node/app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /home/node/app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /home/node/app/package.json
RUN npm install
# add app
COPY . .

# Inicializa a aplicação
ENTRYPOINT ["npm", "start"]