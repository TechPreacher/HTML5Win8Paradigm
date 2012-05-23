var title = document.querySelector("#title");
var tabs =  document.querySelectorAll(".tab");
var pages = document.querySelectorAll(".page");

function init() {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onclick = showTab;
        pages[i].style.display = "none";
    }
    showFirstPage();
}

function showFirstPage() {
    pages[0].style.display = "";
    setTitle(tabs[0].title);
}

function showTab(e) {
    var tab = e.currentTarget;
    var oldPage;
    var newPage;
    
    for (var i = 0; i < tabs.length; i++) {
        if (pages[i].style.display != "none") {
            oldPage = pages[i];            
        }
        if (tabs[i] == tab) {
            newPage = pages[i];
            setTitle(tabs[i].title);
        }
    }
    swap(oldPage, newPage);
    
}

function setTitle(name) {
    title.textContent = name;
}

function swap(oldPage, newPage) {
    oldPage.style.display = "none";
    newPage.style.display = "";
}

init();
