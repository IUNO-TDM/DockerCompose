FROM library/postgres

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB oauthdb

ADD init_data.sql /docker-entrypoint-initdb.d/
#ADD data_dump.sql /docker-entrypoint-initdb.d/

EXPOSE 5432
