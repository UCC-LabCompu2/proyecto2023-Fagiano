function sing_in(){
    /**
     * entrada de datos del paciente en el campo de sing in y almacenamiendo de name, last name, user y edad;
     * @method sing_in()
     */
    let regex = /^[A-Za-z\s]+$/;
    let name, last_name, password, password_conf, dni, gender, age, email, user;
    name=document.getElementById("name").value;
    last_name=document.getElementById("last_name").value;
    dni=document.getElementById("dni").value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    user=document.getElementById("user").value;
    password=document.getElementById("password").value;
    password_conf=document.getElementById("retype_password").value;
    gender = document.querySelector('input[name="gender"]:checked');
    if(!regex.test(name)){
        alert("El nombre ingresado no es valido.")
        document.getElementById("name").value="";
    } else if(!regex.test(last_name)){
        alert("El apellido ingresado no es valido.")
        document.getElementById("last_name").value="";
    }else if(isNaN(dni)){
        alert("El dni ingresado no es valido.")
        document.getElementById("dni").value="";
    }else if(isNaN(age)||age<1||age>100) {
        alert("La edad ingresada no es valida.")
        document.getElementById("age").value="";
    }else if (password !== password_conf) {
        alert("Las contraseñas no coinciden.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("El correo electrónico ingresado no es válido.");
    } else if (name === "" || last_name === "" || dni === "" || gender===null|| age === "" || email === "" || user === "" || password === "" || password_conf === "") {
        alert("Por favor, complete todos los campos")
    }else {
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", last_name);
        localStorage.setItem("age", age);
        localStorage.setItem("user", user);
        window.open("page2.html", "_self");
    }

}


function log_in(){
    /**
     * entrada de datos del paciente en el campo de logg in y
     * almacenamiendo valores de prueba de name, last name, user y edad;
     * @method logg_in()
     */
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
    /**
     * carga la informacion del paciente al campo user_info;
     * @method set_patient()
     */
    let name, last_name, age, user;
    name = localStorage.getItem("name");
    last_name = localStorage.getItem("lastname");
    age = localStorage.getItem("age");
    user = localStorage.getItem("user");

    document.getElementById("user_info").textContent = "Usuario: " + user;
    document.getElementById("name_info").textContent = "Nombre: " + name;
    document.getElementById("last_name_info").textContent = "Apellido: " + last_name;
    document.getElementById("age_info").textContent = "Edad: " + age;

}

function draw_canvas() {
    /** dibuja en el canvas bussy_day los horarios mas concurridos;
     //      * @method draw_canvas()
     //      */
    const canvas = document.getElementById("busy_days");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const hours = ["8", "9", "10", "11", "12", "13", "14", "15"];
    let data = [];
    for (let i = 0; i < 8; i++) {
        data[i] = Math.random() * 10;
    }
    const chartWidth = canvas.width - 100;
    const chartHeight = canvas.height - 100;
    const barWidth = chartWidth / hours.length;
    const maxDataValue = Math.max(...data);
    const scale = chartHeight / maxDataValue;
    const barSpacing = 10;

    for (let i = 0; i < hours.length; i++) {
        const x = i * (barWidth + barSpacing) + 50;
        const barHeight = data[i] * scale;
        const y = canvas.height - 80;

        let animationHeight = 0;
        let animationInterval = setInterval(() => {
            context.clearRect(x, y - animationHeight, barWidth, animationHeight);
            context.fillStyle = "blue";
            context.fillRect(x, y - animationHeight, barWidth, animationHeight);

            animationHeight += barHeight / 20;

            if (animationHeight >= barHeight) {
                clearInterval(animationInterval);
                context.fillStyle = "blue";
                context.fillRect(x, y - barHeight, barWidth, barHeight);

                context.fillStyle = "black";
                context.font = "5em Arial";
                context.fillText(hours[i], x, canvas.height - 5);
            }
        }, 30);
    }
}

let selected_date=null;
function get_date(date){
    /**
     * marca solo una fecha y llama a la funcion draw_canvas();
     * @method get_date()
     * @param {string} date - flag para saber si ya se selecciono una fecha o no
     */

    if(selected_date!==null){
        selected_date.classList.remove("marked");
    }
    selected_date=date;
    selected_date.classList.add("marked");

    draw_canvas();

}


function save_date(){
    /**
     * alert para indicar si se selecciono un turno y retorno a pagina principal;
     * @method save_date()
     */
    if(selected_date!==null){
        alert('Turno guardado.');
        window.open("index.html", "_self");
    }else{
        alert('Debe seleccionar un turno.')
    }
}
