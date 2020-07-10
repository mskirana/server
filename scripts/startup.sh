# install requirements
npm install

# setup environment
if [[ -z "${NODE_ENV}" ]]; then
  NODE_ENV="development"
else
  NODE_ENV="${NODE_ENV}"
fi

# start server
if [[ $NODE_ENV == "production" ]]; then
    npm run start:prod
else
    npm run start
fi