FROM    node
RUN     mkdir /app
WORKDIR /app
COPY    . .
ARG     var_name
ENV     backend_url=$var_name
RUN     npm install
CMD     ["npm", "start"]