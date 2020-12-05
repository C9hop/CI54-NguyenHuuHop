import '../utils.js'
const style =`
    .register-container{
        width: 100vw;
        height: 100vh;
        background: url('https://file.hstatic.net/1000388534/file/screen_shot_2020-10-14_at_02.16.45_726b836ef811493ba293cd4bdaf9449d.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: flex-end   
    }
    #register-form{
        width: 30%;
        background: #fff;
        height: 100vh;

    }
    h1{
        text-align: center;
        color: #333
    }
`
class RegisterScreen extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="register-container">
                <form id="register-form">
                    <h1>CI Project</h1>
                    <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
                    <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
                    <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
                    <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                    <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
                    <button>Sign up</button>
                </form>
            </div>
        `
        const registerForm = this._shadowRoot.getElementById('register-form')
            registerForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                const firstName =  this._shadowRoot.getElementById('first-name').Value
                const lastName =  this._shadowRoot.getElementById('last-name').Value
                const email =  this._shadowRoot.getElementById('email').Value
                const password =this._shadowRoot.getElementById('password').Value
                addDocument()
                function addDocument(){
                    const data = {
                        name: `${firstName +" "+lastName}`,
                        email: `${email}`,
                        password: `${password}`
                    }
                    firebase.firestore().collection('users').add(data)
                }
                // firstName = ''
            })
    }
}
window.customElements.define('register-screen',RegisterScreen)