
const loginForm = ()=>{
    const str = `
    <div>
    <h3> Login Form </h3>


    <p> <button onclick='RegisterForm()'> Create Account</button></p>
    </div>
    `

    root.innerHTML = str;
}



const RegisterForm = ()=>{
    const str = `
    <div>
    <h3> Registration Form Form </h3>

    <p><button onclick='showHome()'> Submit</button></p>
    <p> <button onclick='loginForm()'> Already a member?... login account</button></p>
    </div>
    `

    root.innerHTML = str;
}

const showHome = ()=>{

    const str = 
    `
    <div>
    <h3> Welcome home </h3>

    <p><button onclick='loginForm()'> Logout</button></p>
    </div>
    `

    root.innerHTML = str

}