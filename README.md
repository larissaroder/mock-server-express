# Mock Server

How to run application (Terminal)

> 1 - Install nodejs version 10.x.x
> 2 - Run command
```sh
$ npm start
```
How to run using docker

> 1 - Install *docker* and *docker-compose*
> 2 - Run command 
```sh
$ docker-compose up -d project folder
```
# How to include .json

> 1 - create a json file into mock-api folder
> 2 - configure path and file name into respective txt file

There is four file **config-get.txt**, **config-post.txt**, **config-put.txt** and **config-delete.txt**, you must put configuration according Method.
### Example
if your file is **Method - GET** you configure inside **config-get.txt** in a new line:
    - path__name.json
**Example config-get.txt**
```sh
/user__user.json
/post__post.json
```