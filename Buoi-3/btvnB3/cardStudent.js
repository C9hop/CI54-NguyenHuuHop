const style =`
<style>
.card{
    font-family: sans-serif;
    border: 1px solid #dbdbdb;
}
.ten{
    font-size: 1.5rem;
    font-weight: 600;
}
.card-body{
    border-top: 1px solid #dbdbdb;
    padding: 20px;
}

</style>
`
class CardStudent extends HTMLElement{
    constructor(){
        super()
        // khai baos shadow_dom
        this._shadowDom = this.attachShadow({mode:'open'})
        this.imgSrc = this.getAttribute('imgsrc')
        this.ten = this.getAttribute('ten')
        this.lop = this.getAttribute('lop')
        this.tuoi = this.getAttribute('tuoi')
        this.diaChi = this.getAttribute('diachi')
        this._shadowDom.innerHTML = `
        ${style}
            <div class="card">
                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Nobita001.png/153px-Nobita001.png"></img>
                <div class="card-body">
                    <div class="ten">${this.ten}</div>
                    <div class="lop">Class: ${this.lop}</div>
                    <div class="tuoi">Age: ${this.tuoi}</div>
                    <div class="diachi">Address: ${this.diaChi}</div>
                </div>
            </div>
        `
    }
}
window.customElements.define('card-container', CardStudent)