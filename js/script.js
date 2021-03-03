window.addEventListener("load", () => {

  const div = document.getElementById("result");
  let html = "";

  questions.forEach((question) => {
    html += "<div class='item'>";
    html += `<h1>${question.question}</h1>`;
    html += `<div class="answer">${question.answer}</div>`;
    html += "</div>";
  });

  div.innerHTML = html;

  hljs.highlightAll();
});