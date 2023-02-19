var search = document.querySelector(".btn-outline-success");
var search_word = document.getElementById("search_word");
var display_section = document.querySelector(".display-section");
/* This is an array of keycodes that are excluded from the search. */
let excludedKeys = [16, 17, 18, 225, 9, 27, 107, 109, 37, 38, 39, 40, 20];

search_word.onkeyup = function () {
    var input = search_word.value;
    input = input.toLowerCase();

    /* Checking if the input is empty. If it is, it will clear the display section and return. */
    if (input === "") {
        display_section.innerHTML = "";
        return;
    }
    /* Checking if the key pressed is in the excludedKeys array. If it is, it will return. */
    else if (excludedKeys.includes(event.keyCode)) {
        return;
    }
    /* This is checking if the key pressed is the backspace key. If it is, it will remove the last
    child of the display section. */
    else if (event.keyCode == 8) {
        display_section.removeChild(display_section.lastChild);
    }
    /* This is the code that is responsible for displaying the images. It is looping through the input
    and creating an image element for each character. It is then setting the source of the image to
    the corresponding image. */
    else {
        for (var i = 0; i < input.length; i++) {
            var img = document.createElement("img");
            if (input[i] === " ") {
                img.setAttribute("src", "public/images/space.png");
                img.setAttribute("alt", "space");
            } else if (input[i] === ".") {
                img.setAttribute("src", "public/images/period.png");
                img.setAttribute("alt", "period");
            } else if (input[i] === ",") {
                img.setAttribute("src", "public/images/comma.png");
                img.setAttribute("alt", "comma");
            }
            else if (input[i] === "?") {
                img.setAttribute("src", "public/images/question.png");
                img.setAttribute("alt", "questionmark");
            }
            else {
                img.setAttribute("src", "public/images/" + input[i] + ".png");
                img.setAttribute("alt", input[i]);
            }
        }
        display_section.appendChild(img);
    }
}
