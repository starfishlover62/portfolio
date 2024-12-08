// Changes the title of the page when the user is not focused on it.
originalTitle = document.title

focused = function () {
    document.title = originalTitle;
};

unfocused = function () {
    document.title = "Come Back!";
};

window.addEventListener("blur", unfocused);
window.addEventListener("focus", focused);
