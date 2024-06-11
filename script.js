const user = document.getElementById("user");
const password = document.getElementById("password");
const link = document.getElementById("link");

user.addEventListener("change", function mudarUser() {
    const uValue = user.value;
    const pValue = password.value;
    
    if (uValue.length != 0 || pValue.length != 0) {
        link.href = "entrou.html";
    } else {
        link.href = "index.html";
    }
});

password.addEventListener("change", function mudarPassword() {
    const uValue = user.value;
    const pValue = password.value;

    if (uValue.length != 0 || pValue.length != 0) {
        link.href = "entrou.html";
    } else {
        link.href = "index.html";
    }
});

if(user.value.length == 0 || password.value.length == 0){
    link.href = "index.html";
}