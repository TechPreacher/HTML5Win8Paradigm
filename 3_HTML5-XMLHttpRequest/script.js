var photos = (function(){
    
    function loadJSON(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.onload = function() {
            callback( JSON.parse(xhr.responseText) );
        }
        xhr.send( JSON.stringify(data) );
    }
    
    function loadPhotos(callback) {
        loadJSON("photos.json", null, callback);
    }
    
    return { loadPhotos : loadPhotos};
    
})();

(function() {

    var title = document.querySelector("#title");
    var tabContainer =  document.querySelector(".tabs");
    var pageContainer = document.querySelector(".pages");
    
    function init() {
        photos.loadPhotos(initPhotos);
    }
    
    function initPhotos(photos) {
        for (var i = 0; i < photos.length; i++) {
            addTab(photos[i]);
            addPage(photos[i]);
        }
        showFirstPage();
    }
    
    function showFirstPage() {
        document.querySelector(".page").style.display = "";
        setTitle(document.querySelector(".tab").title);
    }
    
    function addTab(photo) {
        var tab = document.createElement("img");
        tab.className = "tab";
        tab.src = photo.src;
        tab.title = photo.title;
        tab.onclick = showTab;
        tabContainer.appendChild(tab);
    }
    
    function addPage(photo) {
        var page = document.createElement("img");
        page.className = "page";
        page.src = photo.src;
        page.title = photo.title;
        page.style.display = "none";
        pageContainer.appendChild(page);
    }
    
    function showTab(e) {
        var pages = document.querySelectorAll(".page");
        var tabs  = document.querySelectorAll(".tab");
        
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

})();
