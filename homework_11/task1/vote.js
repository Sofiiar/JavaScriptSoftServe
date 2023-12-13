document.addEventListener('DOMContentLoaded', function () {
    var voteButton = document.getElementById('voteButton');
    if (voteButton) {
        voteButton.addEventListener('click', function () {
            fetch("http://localhost:3000/vote")
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(text => {
                    voteButton.textContent = text;
                    voteButton.disabled = true;
                })
                .catch(error => console.error('There has been a problem with your fetch operation:', error));
        });
    }
});

