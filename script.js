const apiKey = "SvMyJvIib0cQRflQWgAD3Q==rUpQ59WMMLb64NJt";
const searchButton = document.getElementById("searchButton");
const wordInput = document.getElementById("wordInput");
const definitionDiv = document.getElementById("definition");

searchButton.addEventListener("click", function searchWord() {
  const word = wordInput.value.trim();
  if (!word) {
    return;
  }
  wordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchWord();
    }
  });
  fetch(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
    headers: { "X-API-Key": apiKey },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const definition = data.definition;
      if (definition) {
        definitionDiv.innerHTML = definition;
      } else {
        definitionDiv.innerHTML = "<p>Word not found.</p>";
      }
    })
    .catch((error) => console.error(error));
});
