# zian.ke
[![Build Status](https://travis-ci.org/zianke/zian.ke.svg?branch=master)](https://travis-ci.org/zianke/zian.ke)

Personal Website developed with jQuery, Spring Boot & MongoDB

* Nginx config
```
server {
    server_name zian.ke;

    location / {
        proxy_pass http://localhost:8080;
    }

    location /s3/ {
        proxy_pass http://d1fbpg77zin6qp.cloudfront.net/;
    }

    location ~* ^/[^/]+\.(pdf|png|gif|jpe?g)$ {
        rewrite ^/(.+)$ /s3/$1;
    }

    location ~ ^/projects/(.+)$ {
        rewrite ^/projects/(.+)$ /projects?title=$1 last;
    }

    location ~ ^/blog/(.+)$ {
        rewrite ^/blog/(.+)$ /blog?title=$1 last;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/zian.ke/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/zian.ke/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = zian.ke) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name zian.ke;
    return 404; # managed by Certbot
}
```
