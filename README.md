# EventTrackerProject

##Overview
- This is my week 12 event tracker project. This is the first project in which I built, mapped and tested a single table database using Spring Data JPA tools and RESTful services.
- Typically, in the past we were using DAO Implementation methods to write the business logic for our program. This is the first week in which implemented a JPA repository, used the methods provided by the database to make basic queries, and even customized a few queries.

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
  |List<Novel>   | Get api/novels            | gets all novels     |
  |Novel         | Get api/novels/{id}       | gets a novel by id  |  
  |Novel         | Post api/novels           | creates a new novels|
  |Novel         | Put api/novels            | updates a novel     |
  |Void          | DELETE api/novels         | deletes a novel     |  
  |List<Novel>   | Get api/search/novels     | searches for novels |
  |              |                           | by keyword          |  
  |List<Novel>   | Get api/novels/{subgenre} | searches for novels |
  |              |                           | by subgenre         |
