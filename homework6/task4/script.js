function setModalContentMethod1() {
    const listItems = document.querySelectorAll('#list li');
    const orderedContent = [
        listItems[0].textContent,
        listItems[listItems.length - 1].textContent,
        listItems[1].textContent,
        listItems[3].textContent,
        listItems[2].textContent
    ].join(', ');

    document.querySelector('#listModal .modal-body').textContent = orderedContent;
}

function setModalContentMethod2() {
    const listItems = document.querySelectorAll('#list li');
    const order = [0, listItems.length - 1, 1, 3, 2]; 
    const orderedContent = order.map(i => listItems[i].textContent).join(' * ');

    document.querySelector('#listModal .modal-body').textContent = orderedContent;
} 

document.querySelectorAll('.modal-button').forEach(button => {
    button.addEventListener('click', function() {
      const method = this.getAttribute('data-option');
      if (method === '1') {
        setModalContentMethod1();
      } else if (method === '2') {
        setModalContentMethod2();
      }
    });
  });