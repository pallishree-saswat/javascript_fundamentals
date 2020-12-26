/* 
What is an API ?

1- Application Programming Interface
2-Contract provided by one piece of software to another
3-Structured request and response
4-We just worked with an api that takes request and responds with jokes


*/
/* 
What is Rest API
1-Representational state transfer
2-Architecture style for designing networked application
3-Relies on stateless , client-server protocol, almost always HTTP
4-Treats server objects as resources that can be created or destroyed
5-Can be used by virtually any programming language... js , php, rubi, python , java
6-All APIs have their own rules and structure


*/

//API is the messenger and  then REST lets us use the HTTP requests to format the message

/* 
HTTP Requests

1- GET : Recieve data from a specified resource
2-POST: Submit data to be processed to a specified resources
3-PUT : Update a specified resource
4-DELETE : Delete a specified resource

5-HEAD : Same as get but does not return a body..returns heades
6-OPTIONS : Returns the supported http methods
7-PATCH : Update partial resources

*/

/* 
API Endpoint

GET           https://someurl.com/api/users          - Get all users
GET           https://someurl.com/api/users/1        - Get a single user which has id 1
POST          https://someurl.com/api/users          - add  user
PUT           https://someurl.com/api/users/1        - update user
DELETE        https://someurl.com/api/users/1        - Delete user

* In post , put and delete request we hve to send data with http request 
*/