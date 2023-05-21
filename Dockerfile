FROM node:slim
WORKDIR /app
COPY package.json /app
RUN npm install -g npm
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev","--" ,"--host" ,"0.0.0.0" ,"&" ,"tail","-f" ,"/dev/null"]