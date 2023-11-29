//TASK3================================

let paragraphs = document.querySelectorAll('#text p');

paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = 'Selector text ' + index + ': ' + paragraph.textContent;
  });