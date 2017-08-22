# TDM-Docker

Execute the following steps for an easy simple deployment of the technology data marketplace. We've setup a docker-compose script to deploy and configure all components within few steps.

Following software is needed:
- Docker: https://www.docker.com/
- Docker Compose: https://docs.docker.com/compose/ V1.13.0 or later
- Git: https://git-scm.com/

```
git clone https://github.com/IUNO-TDM/TDM-Docker.git
cd TDM-Docker
git submodule init
git submodule update
docker network create iuno-network
docker-compose up
```

---

# Custom Configs

Each module has config files under {module_name}/config (example: auth/config/docker_config.js)
Those files define host settings, oauth-credentials and more.
You can either adjust config parameters directly in those files or you can add your own configuration file in the same directory.
After adding your custom_config.js you'll have to update the ENV-Variable (TDM_{module_name}_CONFIG with in the Dockerfile of the targeted module.

OAUTH logins with external portals like google, facebook or twitter will require you to setup a developer account for those portals and retrieve your own API-ID and API-SECRET.
To use those oAuth providers with the JuiceMarketplaceWebsite you'll have to add your API Keys within the config file of the JuiceMarketplaceWebsite(jmw) module.


- /jmw/config/docker_config.js
```
self.OAUTH_PROVIDER = {
    facebookAuth: {
        'clientID': '', // your App ID
        'clientSecret': '', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'name', 'photos']
    },

    twitterAuth: {
        'consumerKey': '',
        'consumerSecret': '',
        'callbackURL': 'http://127.0.0.1:3004/auth/twitter/callback'
    },

    googleAuth: {
        'clientID': '{CLIENT_ID}.apps.googleusercontent.com',
        'clientSecret': '{CLIENT_SECRET}',
        'callbackURL': 'http://127.0.0.1:3004/auth/google/callback'
    }
};
```
