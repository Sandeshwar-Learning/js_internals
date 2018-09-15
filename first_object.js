/*
 * Filename: e:\Workspace\javascript\internals\first_object.js
 * Path: e:\Workspace\javascript\internals
 * Created Date: Saturday, September 15th 2018, 2:12:06 pm
 * Author: devsa
 * 
 * Copyright (c) 2018 Your Company
 */

 var cust = {
     id: 1,
     name: "Mia Mi",
     print: function() {
         console.log(this.id, this.name);
     }
 }

 cust.print();
 