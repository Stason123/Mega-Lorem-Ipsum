# Mega-Lorem-Ipsum
VanillaJS + .net core + MySql in Docker + Jest Unit test
 
1. In Docker run the MySql database server 
2. DatabaseTablesShemeBackup.txt have a script to create a table in the MySql database server
 
3. Backend I using .net core 3.1

4. To run frontend run 'npm install' and run by 'node app.js'
    - can run localhost:1338 in browser

5. Frontend build on Vanilla Javascript
    - Can create, delete, change users data
    - Modals will ask to confirm any manipulation with user data
    - Add a button that will generate 200 new users and save to the database
    - Using responsive design
 
6. For Unit tests I using Jest -- not all was easy with tests :( 
    I made small testing with two methods from the frontend project
    And one unit test with javascript class not from frontend but I create for unit test project
    Was a problem to use methods from frontend because my javascript files are with type = text/javascript but not modules
