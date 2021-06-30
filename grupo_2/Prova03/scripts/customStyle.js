function changeCustomStyle(event) {
    var selectedStyle = event.target.value;
    var backgroundElement = document.getElementById("modal-content");
    backgroundElement.classList.add("darkModeApplied");
    
    var textElements = document.getElementsByClassName("dark-mode-selector");
    
    
    if (selectedStyle == 2) {
        backgroundElement.classList.add("darkModeApplied");

        for (var index in textElements) {
            if (textElements[index].nodeName === "DIV" || textElements[index].nodeName === "H5") {
               var element = textElements[index];
               element.classList.add("dark-mode-applied-text");
            }
        }
    } else {
        backgroundElement.classList.remove("darkModeApplied");
        
        for (var index in textElements) {
            if (textElements[index].nodeName === "DIV" || textElements[index].nodeName === "H5") {
               var element = textElements[index];
               element.classList.remove("dark-mode-applied-text");
            }
        }
    }
}