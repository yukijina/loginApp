//Project for log in and Register form

//store object in a variable
var person = [
  {
    name: 'sarah',
    password: 'password25'
  },
  {
    name: 'brian',
    password: 'password42'
  },
  {
    name: 'jessica',
    password: 'password55'
  }
];


//Login
//if the object above matched to input.value, it runs
function myFunction() {
  //store input.value(text inseide of input) in a valiable
  var username = document.getElementById("nameinput").value; // when you store .value, it has to be inside the function,not outside, otherwise it doesn't work
  var userpassword = document.getElementById("pwinput").value;

  for (var i = 0; i < person.length; i++) {
    if (username == person[i].name && userpassword == person[i].password) {  //need to match both name and password
      alert(username + " is logged in!");
      return
    } else {
    };
  };
  alert("no match"); // put this outside of loop otherwise even though correct information was input, this alert pop up.
}

//Register - create new user
function registerClick() {
  //store input.value(text inseide of input) in a valiable
  var registerUser = document.getElementById("userinput").value;
  var registerPassword = document.getElementById("passwordinput").value;
  //store new object in a valiable (we push new user&passrowd at the end)
  //this add new object to the first array created at the beginning
  var newUser = {
    name : registerUser,
    password: registerPassword
  }

  //if username/password is already taken, it won't work
  for (var i = 0; i < person.length; i++) {
    if(registerUser == person[i].name) {
      alert("that username is already in use, please choose another");
      return
    } else if (registerPassword.length < 8) {  //if password is less than 8 letters, error msg pop up
      alert("that password is too short, include 8 or more characters")
      return
    }
  }

 person.push(newUser) // this push newUser(object:name and password to array)
 console.log(person)

}
