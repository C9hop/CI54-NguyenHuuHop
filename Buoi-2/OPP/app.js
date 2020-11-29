class User{
    name;
    age;
    gender;
    description;
    image;
    constructor(name, age, gender, description, image){
        this.name = name
        this.age = age
        this.gender = gender
        this.description = description
        this.image = image
    }
    like(){

    }
    dislike(){

    }
    update(name, age, gender, description, image){
        this.name = name
        this.age = age
        this.gender = gender
        this.description = description
        this.image = image
    }
    toHTML(){
        return `
            <div class="user-container">
                <div class="previous">
                <
                </div>
                <img src="${this.image}"  />
                <div class="info">
                    ${this.name}
                    ${this.age}
                    ${this.description}
                </div>
                <div class="next">
                >
                </div>
            </div>
        `
    }
}
class UserCollection{
    listUser;
    current;
    constructor(){
        this.listUser = []
        this.current = 0
    }
    addUser(user){
        this.listUser.push(user)
    }
    removeUser(index){
        this.listUser.splice(index,1)
    }
    show(){
        document.querySelector('#app').innerHTML = this.listUser[this.current].toHTML()
        this.listenUserClick()
    }
    previous(){
        if (this.current > 0){
            this.current--
            this.show()
        }
    }
    next(){
        if (this.current < this.listUser.length-1){
            this.current++
            this.show()
        }
    }
    listenUserClick(){
        document.querySelector('.previous').addEventListener('click',()=>{
            userCollection.previous()
        })
        document.querySelector('.next').addEventListener('click',()=>{
            userCollection.next()
        })
    }
}
const userCollection = new UserCollection()
const user1 = new User('Nguyen Van A', 18, 'male', 'thich cho, meo bla bla....', 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg')
const user2 = new User('Nguyen Van B', 28, 'female', 'thich cho, ghet meo bla bla....', 'https://i.ytimg.com/vi/3RBCvUP8Xnw/maxresdefault.jpg')

userCollection.addUser(user1)
userCollection.addUser(user2)
userCollection.show()

