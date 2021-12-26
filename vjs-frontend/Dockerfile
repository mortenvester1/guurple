FROM node:alpine AS dev
ARG VJS_FRONTEND_PORT 3000
ARG VJS_API_PORT 8080

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_API_URL http://localhost:${VJS_API_PORT}/api

# install bash
RUN apk update &&\
    apk upgrade &&\
    apk add bash

# Copy app source code
COPY . .
# install
RUN npm install --silent

#Expose port and start application
EXPOSE $VJS_FRONTEND_PORT
CMD ["npm", "run", "start"]

FROM dev AS build
RUN npm run build

FROM build AS production
ENV NODE_ENV production
ENTRYPOINT [ "npm", "run", "start" ]
