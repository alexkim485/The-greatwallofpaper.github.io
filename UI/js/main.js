var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
function showPassword() {
    var x = document.getElementById("password");
    x.type = "text";
}
function hidePassword() {
    var x = document.getElementById("password");
    x.type = 'password';
}

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + ".All rights reserved.</p>";
document.getElementById("nav").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
//"<li><a href='entries.html'>entries</a></li>" +
"<li><a href='about.html'>About</a></li>" +
//"<li><a href='edit.html'>Edit</a></li>" +
//"<li><a href='../user/usser-profile.html'>profile</a></li>" +
//>>>>>>> e315ab5e34d5413946d86e8c87c9807b34081c57
"</ul>"; */
