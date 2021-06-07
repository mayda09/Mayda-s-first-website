var getUserName = prompt("Hello! Who Are You");

console.log(getUserName);
document.getElementById("username").innerText = getUserName;

// tooltip js
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })