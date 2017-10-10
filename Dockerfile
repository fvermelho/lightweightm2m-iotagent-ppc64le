FROM ppc64le/centos:7

WORKDIR /
RUN yum update -y && yum install -y wget git
RUN wget https://nodejs.org/download/release/latest-argon/node-v4.8.4-linux-ppc64le.tar.gz
RUN tar -zxf node-v4.8.4-linux-ppc64le.tar.gz
RUN export PATH="$PATH:/node-v4.8.4-linux-ppc64le/bin"
ENV PATH="$PATH:/node-v4.8.4-linux-ppc64le/bin"
COPY . /opt/iota-lwm2m
WORKDIR /opt/iota-lwm2m
RUN npm install

ENTRYPOINT bin/lwm2mAgent.js config-blank.js
