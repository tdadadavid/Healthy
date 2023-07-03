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

# download dependencies [not devDependencies]
RUN pnpm install --only=production

# clear cache
RUN pnpm store prune

# set the environment to production for optimization.
ENV NODE_ENV production

# copy remaining files
COPY . .

# ports
EXPOSE 4000/tcp

CMD [ "pnpm", "run", "dev" ]