FROM node:8.11.2
LABEL maintainaer="tnb"
LABEL description="Simple server image"

RUN echo "Hello world!"

COPY package.json /package_copy.json

EXPOSE 80/tcp

ENTRYPOINT ["npm"]
CMD ["start"]