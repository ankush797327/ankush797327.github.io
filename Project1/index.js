let users = []; // This array will store all registered users

// Initialize the root element (assuming you have a div with id 'root' in your HTML)
const root = document.getElementById("root");

const validateUser = () => {
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("txtPassword").value;
    const found = users.find((value) => value.email === email && value.pass === pass);

    if (found) {
        showHome();
    } else {
        document.getElementById("errortxt").innerHTML = "Access denied";
    }
}

const loginForm = () => {
    let userlistHTML = `<ul>`
    if(users.length === 0){
        userlistHTML += `<li> No registered user yet.</li>`;
    }else{
        users.forEach((user)=>{
            userlistHTML += `<li> ${user.name} ${user.pass} ${user.balance}</li>`
        });
    }

    userlistHTML+=`</ul>`;


    const str = `
    <div>
        <h3> Login Form </h3>
        <p id='errortxt'></p> 
        <p><input type='email' id='txtEmail' placeholder='Email'></p>
        <p><input type='password' id='txtPassword' placeholder='Password'></p>
        <p><button onclick='validateUser()'>Submit</button></p>
        <p><button onclick='RegisterForm()'> Create Account</button></p>
    </div>
    <div>
            <h3>Registered Users</h3>
            ${userlistHTML}
        </div>
    </div>
    `;
    root.innerHTML = str;
}

const saveUser = () => {
    // Create a NEW user object for each registration
    let newUser = {}; 
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let pass = document.getElementById("txtPassword").value;

    // Basic validation to prevent empty fields
    if (!name || !email || !pass) {
        alert("Please fill in all fields.");
        return;
    }

    // Check if user with this email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("An account with this email already exists. Please login or use a different email.");
        return;
    }

    newUser.name = name;
    newUser.email = email;
    newUser.pass = pass;
    newUser.balance = 1000;
    users.push(newUser); // Push the new, unique user object

    alert("Registration successful! Please login."); // User feedback
    loginForm(); // Redirect to login form after successful registration
}

const RegisterForm = () => {
    const str = `
    <div>
        <h3> Registration Form </h3>
        <p><input type='text' id='txtName' placeholder='Name'></p>
        <p><input type='email' id='txtEmail' placeholder='Email'></p>
        <p><input type='password' id='txtPassword' placeholder='Password'></p>
        <p><button onclick='saveUser()'> Submit</button></p> 
        <p><button onclick='loginForm()'> Already a member?... login account</button></p>
    </div>
    `;
    root.innerHTML = str;
}

const showHome = () => {
    const str = `
    <div>
        <h3> Welcome home </h3>
        <p><button onclick='loginForm()'> Logout</button></p>
    </div>
    `;
    root.innerHTML = str;
}

// Initial call to display the login form when the page loads
document.addEventListener('DOMContentLoaded', loginForm);