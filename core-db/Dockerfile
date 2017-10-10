FROM library/postgres

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB MarketplaceCore

ADD pg_hba.conf /
RUN chmod 777 /pg_hba.conf

ADD init_data.sql /docker-entrypoint-initdb.d/
ADD set-config.sh /docker-entrypoint-initdb.d/

VOLUME /etc/postgresql/data
VOLUME /var/log/postgresql
VOLUME /var/lib/postgresql/data

EXPOSE 5432
