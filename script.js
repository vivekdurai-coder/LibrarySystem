var Book_Names = [
  "The Complete Reference By Thomas",
  "Pro CSS Techniques By Jeff",
  "JS Programming by Brian Jenkins",
  "Java Programming by Murach"
];

var key = 0;

var Book_Rented = {
  BookName: [],
  User_Name: [],
  Membership_Number: []
};

function Rent_Book(num) {
  key = num;
  document.getElementById("BookName_Display").innerHTML =
    "BOOK NAME : " + Book_Names[key];
  document.getElementById("Return_Book").style = "visibility: hidden;";
  document.getElementById("Rent_Book").style = "visibility: visible;";
}

function Return_Book() {
  document.getElementById("Rent_Book").style = "visibility: hidden;";
  document.getElementById("Return_Book").style = "visibility: visible;";
}

function CheckDate() {
  let DurationOfRental = document.getElementById("Duration").value;

  var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
  var followingDay = new Date(current.getTime() + 86400000 * DurationOfRental); // + 1 day in ms

  document.getElementById("Return_Date").innerHTML =
    "Return This Book by " + followingDay.toLocaleDateString();
}

function BookRent() {
  let User = document.getElementById("UserName").value;
  let MembershipNumber = document.getElementById("MNumber").value;
  let DurationOfRental = document.getElementById("Duration").value;

  Book_Rented.User_Name.push(User);
  Book_Rented.Membership_Number.push(MembershipNumber);
  Book_Rented.BookName.push(Book_Names[key]);
  document.getElementById(key).disabled = true;
  document.getElementById("Rent_Book").style = "visibility: hidden;";
  alert(Book_Names[key] + " Rented to " + User + " Successfully");
}

function BookReturn() {
  let User = document.getElementById("R_UserName").value;
  let Membership_Number = document.getElementById("R_MNumber").value;
  var flag = 0;

  for (let i = 0; i < Book_Rented.User_Name.length; i++) {
    if (
      User == Book_Rented.User_Name[i] &&
      Membership_Number == Book_Rented.Membership_Number[i]
    ) {
      flag = 1;

      alert(
        " Successfull Returned " +
          Book_Rented.BookName[i] +
          " from " +
          Book_Rented.User_Name[i]
      );

      Book_Names.forEach(function(book, index) {
        if (Book_Rented.BookName[i] == book) {
          document.getElementById(index).disabled = false;
        }
      });
    }
  }

  if (flag == 0) {
    alert("Please Enter The Correct User Name & Membership Number");
  }
}
