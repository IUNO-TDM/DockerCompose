# SIMPLE MARKETPLACE DEPLOYMENT

Execute the following steps for an easy simple deployment of the technology data marketplace. We've setup a docker-compose script to deploy and configure all components within few steps.

Following software is needed:
- Docker: https://www.docker.com/
- Docker Compose: https://docs.docker.com/compose/ V1.13.0 or later
- Git: https://git-scm.com/

```
git clone git@github.com:IUNO-TDM/TDM-Docker.git
cd TDM-Docker
git submodule init
git submodule update --remote --merge
docker-compose up
```


