//**
//*
//**


function sing_in(){
    let name, last_name, password, password_conf, dni, gender, age, email, user;
    name=document.getElementById("name").value;
    last_name=document.getElementById("last_name").value;
    dni=document.getElementById("dni").value;
    gender=document.querySelector('input[name="gender"]:checked').value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    user=document.getElementById("user").value;
    password=document.getElementById("password").value;
    password_conf=document.getElementById("retype_password").value;

    if (name === "" || last_name === "" || dni === "" || gender === "" || age === "" || email === "" || user === "" || password === "" || password_conf === "") {
        alert("Por favor, complete todos los campos.");
    } else if (password !== password_conf) {
        alert("Las contraseñas no coinciden.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("El correo electrónico ingresado no es válido.");
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", last_name);
        localStorage.setItem("age", age);
        localStorage.setItem("user", user);
        window.open("page2.html", "_self");
    }
}

function log_in(){
    let password, email, user;
    email=document.getElementById("email_login").value;
    password=document.getElementById("password_login").value;
    user=document.getElementById("user_login").value;

    if (email === "" || user === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("El correo electrónico ingresado no es válido.");
    } else {
        localStorage.setItem("name", "test name");
        localStorage.setItem("lastname", "test last name");
        localStorage.setItem("age", "test age");
        localStorage.setItem("user", user);
        window.open("page2.html", "_self");
    }
}

function set_patient() {
    let name, last_name, age, user;
    name = localStorage.getItem("name");
    last_name = localStorage.getItem("lastname");
    age = localStorage.getItem("age");
    user = localStorage.getItem("user");

    document.getElementById("user_info").textContent = "Ususario: " + user;
    document.getElementById("name_info").textContent = "Nombre: " + name;
    document.getElementById("last_name_info").textContent = "Apellido: " + last_name;
    document.getElementById("age_info").textContent = "Edad: " + age;

}

function draw_canvas() {

    let canvas = document.getElementById("busy_days");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width, canvas.height);

    let horasAsistidas = [];
    for (let i = 0; i < 8; i++) {
        horasAsistidas[i] = Math.random() * 10;
    }

    let barWidth = 50;
    let chartHeight = canvas.height - 30;
    let barSpacing = 10;
    let maxDataValue = Math.max(...horasAsistidas);

    for (let i = 0; i < horasAsistidas.length; i++) {
        let barHeight = (horasAsistidas[i] / maxDataValue) * chartHeight;
        let x = i * (barWidth + barSpacing);
        let y = canvas.height - barHeight;

        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, barWidth, barHeight);
    }
}

let selected_date=null;
function get_date(date){

    if(selected_date!==null){
        selected_date.classList.remove("marked");
    }
    selected_date=date;
    selected_date.classList.add("marked");

    draw_canvas();
}

function save_date(){
    if(selected_date!==null){
        alert('Turno guardado.');
    }else{
        alert('Debe seleccionar un turno.')
    }
}

