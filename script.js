let nameSubmit = document.getElementById('user-name')
// console.log(nameSubmit);
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById('user-name').style.display = "none"
});