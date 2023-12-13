document.addEventListener('DOMContentLoaded', function () {
    let downloadButton = document.getElementById('downloadButton');
    if (downloadButton) {
      downloadButton.addEventListener('click', function () {
        fetch('/authors')
          .then(function(response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(function(authorsList) {
            let list = document.createElement('ul');
            authorsList.forEach(function(author) {
                let listItem = document.createElement('li');
              listItem.textContent = author;
              list.appendChild(listItem);
            });
            document.body.appendChild(list);
            downloadButton.disabled = true;
          })
          .catch(function(error) {
            console.error('Fetch error:', error);
          });
      });
    }
  });
  