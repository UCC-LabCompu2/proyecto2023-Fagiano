//**
//*
//**


function sing_in(){
    let name, last_name, password, password_conf, dni, gender, age, email, user;
    name=document.getElementById("name").value;
    last_name=document.getElementById("last_name").value;
    dni=document.getElementById("dni").value;
    gender=document.getElementById("gender").value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    user=document.getElementById("user").value;
    password=document.getElementById("psw").value;
    password_conf=document.getElementById("psw2").value;

    localStorage.setItem("name", name);
    localStorage.setItem("lastname", last_name);
    localStorage.setItem("age", age);
    localStorage.setItem("user", user);
    document.getElementById("sing_in_button").addEventListener("click", function() {
        window.location.href = "page2.html";
    });
}

function log_in(){
    let password, email, user;
    email=document.getElementById("email").value;
    password=document.getElementById("psw").value;
    user=document.getElementById("user").value;

    localStorage.setItem("name", "test name");
    localStorage.setItem("lastname", "test last name");
    localStorage.setItem("age", "test age");
    localStorage.setItem("user", user);
}

function set_patient(){
    let name, last_name, age, user;
    name=localStorage.getItem("name");
    last_name=localStorage.getItem("lastname");
    age=localStorage.getItem("age");
    user=localStorage.getItem("user");

    document.getElementById("user").value=user;
    document.getElementById("name").value=name;
    document.getElementById("last_name").value=last_name;
    document.getElementById("age").value=age;

}

// function get_date(){
//     let date;
//     date=document.getElementById()
// }
