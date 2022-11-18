# Library Management System

<strong>All Functional Requirements are implemented.</strong>

Frontend Source Code is in 'Frontend' Folder<br>
Run 
```
ng serve
```
<br>

Backend Source Code is in 'Backend' Folder<br>
Run
 ```
npm start
 ```
<br>

Used 'Supervisor npm package' for automatically restarting server. <br>

Database is deployed on MongoDB Atlas<br>
## Credentials for testing
Admin Credentials:

```
email: admin@gmail.com
password: Admin@123
```

Librarian Credentials:

```
email: librarian@gmail.com
password: librarian@123
```

Member Credentials:

```
email: adarsh.lol2425@gmail.com
password: Member@123
```

## My Additions
Librarian can signup just like member. But Admin must verify the account for it to get Librarian privileges. <br>
Librarian will get an email, when his/her account is verified.<br>

Steps<br>

1. Login as 'Admin'<br>
2. On the 'Manage Users' section in dashboard, click 'Approve as Librarian' button for the corresponding user.<br>

![Admin page](https://github.com/adarsh-2425/Library-Management-System/blob/f4809f6d54d47bfcb4b3741703689bd4e7ed6f05/Frontend/src/assets/images/admin.PNG)

## Member will get an email when their book is issued

![Email page](https://github.com/adarsh-2425/Library-Management-System/blob/d2d204c6c5cef035983f55845d0193e3b70ab0c9/Frontend/src/assets/images/issued.PNG)

## Implementaions of each day
Day 1:
Implemented flow for users to register and login

Day 2:
Implemented flow for storage and retrieval of books

Day 3:
Created corresponding angular components

Day 4:
Librarian can register using the common register form. But account will get privileges only after Admin verify the credentials. Librarian will be notified via Email when Admin verifies the account.

Day 5:
Implemented email scheduling using node-scheduler.
Learned how to convert date to yesterday date.

Day 6:
Designed Home Page with inspiration from 'Library Of America' Website.

Day 7:
Created Dashboard components

Day 8:
Added animation to the components

# References

## Can't bind to 'ngModel' since it isn't a known property of 'input'

https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input

## Not all code paths return a value in TypeScript

https://bobbyhadz.com/blog/typescript-not-all-code-paths-return-a-value

## Check that Field Exists with MongoDB
https://stackoverflow.com/questions/19868016/check-that-field-exists-with-mongodb

## Mongoose count() Function
https://www.geeksforgeeks.org/mongoose-count-function/

## How to use scrollStrategy in MatDialog?

use``` 
<mat-dialog-content>
``` 

## Image falling out of bootstrap card
use 'img-fluid' class
```
<img class="img-fluid" src="https://source.unsplash.com/XXpbdU_31Sg" alt="">
```