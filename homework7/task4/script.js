function deleteSelectedItem() {
    let list = document.getElementById("nameList");
    list.remove(list.selectedIndex);  //list.selectedIndex - return the selectedIndex property
}