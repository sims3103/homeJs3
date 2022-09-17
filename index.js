'use strict';

/*
Создать функцию-конструктор User
у пользователей должны быть свойства:
firstName
lastName
email
age
isLoggedIn



Создать прототип для обїектов пользователей
в прототипе реализовать следующий методы:
getFullName - метод, который вернет строчку, содержащую имя и фамилию пользователя
logout - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
login - метод, который имитирует логин пользователя, меняя переменную isLoggedIn
*/

function User(firstName, lastName,  email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
  }

  const userProto = {
    getfullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },
    logout: function() {
      this.isLoggedIn = false;
      return this.isLoggedIn;
    },
    login: function() {
      return this.isLoggedIn = true;
    },
  };

  
  User.prototype = userProto;

  const user1 = new User ('Charlie', 'Chaplin', 'charliechaplin@gmail.com', 88, true);

  console.log(user1);
