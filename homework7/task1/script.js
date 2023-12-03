document.addEventListener('DOMContentLoaded', function () {
    let newWindow = window.open('', '', 'width=300,height=300,top=200,left=200');
    if (newWindow) {
        setTimeout(function () { newWindow.resizeTo(500, 500); }, 2000);
        setTimeout(function () { newWindow.moveTo(200, 200); }, 4000);
        setTimeout(function () { newWindow.close(); }, 6000);
    } else {
        console.error('The new window could not be opened. It may have been blocked by a pop-up blocker.');
    }
});
