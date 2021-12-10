'use strict';

let user = prompt('Nom ?');

if (user == 'Admin') {
      let passWord = prompt('Mot de passe ?'); {
            if (passWord == "TheMaster") {
                  alert('Welcome!');
            } else if (passWord === ''|| passWord === null){ 
                  alert('Canceled');
            } else {
                  alert('Wrong password');
            }
      }
} else if (user === ''|| user === null){
      alert('Canceled');
} else {
      alert("I don't know you")
}
