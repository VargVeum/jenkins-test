```sh
docker run -it -v $PWD/jenkins-test:/e2e -w /e2e cypress/included
docker run -it -v .:/e2e -w /e2e cypress/included
```