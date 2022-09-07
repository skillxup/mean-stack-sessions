function store() {
    alert("yes");
    var userName = document.getElementById("userName").value;
    var userAge = document.getElementById("userAge").value;

    const user = {
        userName: userName, 
        userAge: userAge
    }

    window.sessionStorage.setItem("user", JSON.stringify(user));
}

function retriveRecords() {
    var records = window.sessionStorage.getItem("user");
    var para = document.createElement("p");
    var info = document.createTextNode(records);

    para.appendChild(info);

    var elem = document.getElementById("retrieve");
    elem.appendChild(para);
}

function removeItem() {
    sessionStorage.removeItem("user");
    console.log("remove items");
}

function clearStorage() {
    sessionStorage.clear();
    console.log("clear records");
}

window.onload = function() {
    document.getElementById("userForm").onsubmit = store;
    document.getElementById("clearData").onclick = clearStorage;
    document.getElementById("removeData").onclick = removeItem;
    document.getElementById("retrieveData").onclick = retriveRecords;
}