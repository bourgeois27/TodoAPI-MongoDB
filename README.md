# Laboratoire \#10

## But :
Se familiariser avec **MongoDB** et **Mongoose**.

## Travail :
Refaire l'application de pense bête du laboratoire \#7 mais cette fois-ci avec **persistance**.

## Consignes :
* L'application doit utiliser **Mongoose** afin d’offrir une
couche de persistance aux tâches. Autrement dit, sauvegarder dans **MongoDB** les utilisateurs et
leurs tâches associées.
* Sur le résultat final, la seule différence avec le laboratoire 7 sera que si on redémarre le serveur, les tâches doivent demeurer...

## Get up and running with the project:

First install the dependencies:

`npm install`

Then make sure you MongoDB deamon is running:

`sudo service mongod start`

Run the application:

`npm run dev`

You can then plug the UI from lab \#4 or simply test it using Postman.

The program will create a database named `todo` with a collection named `users` which you can see by doing :

```bash
mongo
show dbs
use todo
db.users.find()
```

Once you're done, you can delete the database by executing the following commands:

```bash
db.dropDatabase()
sudo service mongod stop
```
