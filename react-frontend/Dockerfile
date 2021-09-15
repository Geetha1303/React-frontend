FROM    node
RUN     mkdir /app
WORKDIR /app
COPY    . .
ENV     backend_url="springboot.gvdevops.online"
RUN     npm install
CMD     ["npm", "start"]