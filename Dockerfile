FROM node:slim
WORKDIR /app
COPY package.json /app
RUN npm install -g npm
RUN npm install -g pnpm
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev","--" ,"--host" ,"0.0.0.0" ,"&" ,"tail","-f" ,"/dev/null"]