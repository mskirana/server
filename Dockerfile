FROM node:12-alpine

WORKDIR /app

# Required for scripts/wait-for-it.sh
RUN apk add --update netcat-openbsd && rm -rf /var/cache/apk/*

COPY . .

# Make the scripts executable
RUN chmod -R +x /app/scripts/*

RUN npm install --only=production

EXPOSE 8080

CMD ["/app/scripts/wait-for-it.sh", "mongo:27017", "--", "app/scripts/startup.sh"]