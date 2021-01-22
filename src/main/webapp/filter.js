document.addEventListener("DOMContentLoaded", function() { 
    document.querySelector("input[id='imageTagFilter']").setAttribute("onkeyup", "filterImageTag(this)");
});

function filterImageTag(self){

    var imageTags = self.parentNode.querySelector("select[name='imageTag']");
        
    for(var option=imageTags.firstChild; option!==null; option=option.nextSibling){
        if (option.text.include(self.value)) {
            option.style.display = "";
        }
        else {
            if (imageTags.value === option.value) {
                imageTags.value = "";
            }
            option.style.display = "none";
        }
    }
    // Choose any if empty
    for(var option=imageTags.firstChild; option!==null; option=option.nextSibling){
        if (option.text.include(self.value)) {
            if (imageTags.value === "") {
                imageTags.value = option.value;
                break;
            }
        }
    }
}