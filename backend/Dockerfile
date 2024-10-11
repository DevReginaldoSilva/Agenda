# Imagem base do Node.js
FROM node:18

# Diretório de trabalho no container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expor a porta que o backend usa
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["npm", "start"]
