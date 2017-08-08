# How to install a blockexplorer at the marketplace

The Dockerfile in this directory will setup an insight-ui and insight-api blockexplorer for the bitcoin testnet. This includes also internally a bitcored Version 0.12.
The install.sh will create a docker image, a docker container which publishes0 port 3001 and port 18333 to the host. Also a Volume is bound to /var/lib/dockerinsighttestnet. Any customization should be taken inside install.sh at this moment.

1. Copy the Dockerfile to the target
2. build the image: 
    ```
    docker build -t insight-testnet .
    ```
3. Create the container: 
    ```
    docker create --name InsightTestnet --volume /var/lib/dockerinsighttestnet:/root/mynode/data --publish 0.0.0.0:3001:3001 --publish 0.0.0.0:18333:18333  insight-testnet
    ```
4. Be aware, that the Blockchainfile and the database will take about 20GB of disk space
5. Start the container: 
    ````
    docker start InsightTestnet
    ````
6. Browse to [http://localhost:3001/insight](http://localhost:3001/insight)



Customization or livenet: 
- Make it a livenet explorer:
    - Dockerfile: 
       - remove -t parameter after bitcore-node create
       - EXPOSE 3001 8333
    - run:
        ```
        docker build -t insight-livenet .

        docker create --name InsightLivenet --volume /var/lib/dockerinsightlivenet:/root/mynode/data --publish 0.0.0.0:3001:3001 --publish 0.0.0.0:8333:8333  insight-livenet
        ```