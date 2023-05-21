FROM node:slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "dev","--" ,"--host" ,"0.0.0.0" ,"&" ,"tail","-f" ,"/dev/null"]