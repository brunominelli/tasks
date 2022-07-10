FROM node:16 AS backend
WORKDIR /app
EXPOSE 3001
COPY . .
RUN npm install
CMD ["npm", "start"]
