import "@scss/styles.scss";

window.addEventListener("load", function(event) {
	document.getElementById("skew-btn").addEventListener("click", function() {
		var inputValue = document.getElementById("inp").value;
		if (inputValue === '') {
			alert("Заполните поле!");
			return;
		}
		fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: inputValue,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => alert("Запрос выполнен успешно!"))
	.catch((e) => alert("Произошла ошибка!"));
	});
});