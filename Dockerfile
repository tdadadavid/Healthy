FROM node:alpine3.18

# working directory
ARG DIR=/usr/src/app

WORKDIR ${DIR}

COPY package.json ${DIR}
COPY pnpm-lock.yaml ${DIR}

# update npm package manager
RUN npm install -g npm@latest

# download pnpm package manager
RUN npm install -g pnpm@latest

# download dependencies
RUN pnpm install

# copy remaining files
COPY . .

# ports
EXPOSE 4000/tcp

CMD [ "pnpm", "run", "dev" ]