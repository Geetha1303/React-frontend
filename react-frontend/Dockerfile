FROM    node
RUN     mkdir /app
WORKDIR /app
COPY    . .
ENV     backend_url="http://34.200.242.6:8080/api/v1/employees"
RUN     npm install
CMD     ["npm", "start"]