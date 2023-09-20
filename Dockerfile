FROM node:20-alpine
RUN mkdir app
COPY app.js package.json app/
WORKDIR /app
RUN npm install
EXPOSE 3030
CMD ["npm","start"]