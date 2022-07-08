// concept  ..for Guest list allowance for party

var _guestList = ["Rohan", "Shubham", "Sushma", "Anuradha", "Deepshikha", "Shivam"];
var guestname = prompt("what is your name");

if (_guestList.includes(guestname)) {
    alert(`welcome ${guestname} 🥰`);
} else {
    alert(`sorry ${guestname} 😞 you are not allowed to party`);
}