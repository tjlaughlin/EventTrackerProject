# EventTrackerProject

##Overview
- This is my week 12 event tracker project. This is the first project in which I built, mapped and tested a single table database using Spring Data JPA tools and RESTful services.
- Typically, in the past we were using DAO Implementation methods to write the business logic for our program. This is the first week in which implemented a JPA repository, used the methods provided by the database to make basic queries, and even customized a few queries.

##Overview part 2
- In week 13 we began learning the javascript language. The project for this week was a build upon from week 12 (i.e. overview above). After completeing our backend mapping and testing last week we were tasked with using javascript to dynamically add to an HTML file to give a user the ability to use basic CRUD commands on our event tracker database.  

##Lessons used
- Object Relational mapping
- SQL database
- MAMP
- Spring Data JPA
- Repositories
- Query methods
- Object oriented programming
- Controllers
- gradle
- Handling requests
- Postman

##Lessons used part 2
- JavaScript
- DOM/DOM manipulation
- XMLHttpRequaest Object
- Asynchronous JavaScript and XML (AJAX)
- using send() to dispatch a XMLHttpRequest
- readyState property
- Status property
- converting response text data to JSON
- Sent POST/GET/DELTE/PUT request methods


##How to run - Instructions
- This application is not going to be deployed until after implementing javascript logic as well as structuring the front end user experience.
- Most of the backend is finished and tested using postman to make sure the paths/methods and services are working properly.
- Expected routes will include:
  - Show novel by ID
  - show all novels
  - show novels by sub genre
  - show novels by keyword search
  - All of the basic CRUD functions will be applicable to this application

  |ReturnType    |Route                      |Functionality        |
  |--------------|---------------------------|---------------------|
  |List <Novel>   | Get api/novels            | gets all novels     |
  |Novel         | Get api/novels/{id}       | gets a novel by id  |  
  |Novel         | Post api/novels           | creates a new novels|
  |Novel         | Put api/novels            | updates a novel     |
  |Void          | DELETE api/novels         | deletes a novel     |  
  |List <Novel>   | Get api/search/novels     | searches for novels by keyword |
  |List <Novel>   | Get api/novels/{subgenre} | searches for novels by subgenre   |

##How To run - Instructions for the front end
  - There is only one HTML page that the user can access (index.html). On the index page, upon loading, the user can now see the entire database of novels in a table. with each of the novels corresponding data fields and id number
  - The user has the option to run basic CRUD commands on the database. 
  - There is a field for the user to either add a novel, delete a novel, update a novel or search for a novel using a keyword.
  - There is also info on the average number of chapters per novel taking in the total number of chapters from all of the novels and dividing it by the total number of novels in the database
  