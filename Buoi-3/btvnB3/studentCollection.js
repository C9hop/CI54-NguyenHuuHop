
            export class StudentCollection{
                listStd;
                constructor(){
                    this.listStd = []
                }
                addStd(student){
                    this.listStd.push(student)
                }
                findOfName(name){
                    return this.listStd.filter(function(n) {
                        return n.ten.toLowerCase().includes(name.toLowerCase())
                    });
                }
                findOfAge(age){
                    return this.listStd.filter(function(a){
                        return a.tuoi === 15;
                    })
                }
                findOfAgeaAdd(){
                    return this.listStd.filter(function(x){
                        return (x.tuoi === 18 && x.diaChi == 'Ha Noi')
                })
            }
                show(){
                        document.querySelector('#list').innerHTML = this.listStd[0].toHTML()

                }
            }
