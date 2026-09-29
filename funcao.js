let dataUser = {
    name: "Bryan",
    email: "bryan@email.com",
    password: "123",
}

function user(e){
    e.preventDefault();
    let storage = JSON.stringify(dataUser);
    console.log(storage);
    return localStorage.setItem("dataUser", storage);
}

addEventListener("submit", user);