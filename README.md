# Fyle
##Creating  a REST service that can fetch bank details, using the data given in the API’s query parameters.<br/>
Hosting URL :- https://ravikiranfyle.herokuapp.com/.<br/>
GitHub Link :- https://github.com/pilliravikiran/ravikiranfyle.<br/>
END-POINT -1 <br/>
Curl Script :- curl -X GET "https://ravikiranfyle.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=3&offset=0" <br/>
![](IMAGE 1.png)
END-POINT -2 <br/>
Curl Script :- curl -X GET "https://ravikiranfyle.herokuapp.com/api/branches?q=BANGALORE&limit=4&offset=0" <br/>


INSTALLATION PROCESS :-<br/>
1) Install PostgreSql <br/>
      sudo apt-get install postgresql postgresql-contrib<br/>
2) Login in to PostgreSql <br/>
      sudo -u postgres psql<br/>
3)Create your DataBase<br/>
      createdb db_name<br/>
4) Dump the data indian_banks.sql to your database<br/>
     psql db_name < indian_banks.sql<br/>

Go to the repository and open terminal<br/>
5) npm install<br/>
6) npm start<br/>
Make sure to change .env file according to your database<br/>
DB_USER=your_user_name<br/>
  DB_PASSWORD=your_password<br/>
  DB_HOST=localhost<br/>
  DB_PORT=5432<br/>
  DB_DATABASE=your_database_name<br/>
  
7) END POINT -1 <br/>
    Autocomplete API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.<br/>
        http://localhost:8000/api/branches/autocomplete?q=RTGS&limit=3&offset=0<br/>
8) END POINT -2<br/>
  Search API to return possible matches across all columns and all rows , ordered by IFSC code (ascending order) with limit and offset. Commit<br/>
            http://localhost:8000/api/branches/?q=BANGALORE&limit=4&offset=0<br/>

    


