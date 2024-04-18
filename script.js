document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("guestButton").addEventListener("click", function() {
        var dropdown = document.getElementById("guestDropdown");
        dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    });
});

function increment(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    var input = document.getElementById(id);
    var value = parseInt(input.value) - 1;
    input.value = value < 1 ? 0 : value;
}
