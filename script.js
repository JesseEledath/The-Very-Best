let nameSubmit = document.getElementById('user-name')
// console.log(nameSubmit);
nameSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById('user-name').style.display = "none"
  document.getElementById('user-pokemon-name').style.display = "block"
  // https://stackoverflow.com/questions/11226489/show-hide-forms-using-buttons-and-javascript
});