document.addEventListener("click", editObject);




function editObject(e) {
    if (e.target.className == "header") {
        console.log("test")
        changePage(e.target.innerHTML);
    }
}