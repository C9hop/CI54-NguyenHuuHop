            class Student{
                ten;
                lop;
                tuoi;
                diaChi;
                constructor(ten, lop, tuoi, diaChi){
                    this.ten = ten
                    this.lop = lop
                    this.tuoi = tuoi
                    this.diaChi = diaChi
                }
                toHTML(){
                    return `
                    <table>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Lớp</th>
                        <th>Tuổi</th>
                        <th>Địa chỉ</th>
                    </tr>
                    <tr>
                        <td>${this.ten}</td>
                        <td>${this.lop}</td>
                        <td>${this.tuoi}</td>
                        <td>${this.diaChi}</td>
                    </tr>
                </table>
                    `
                }
            }
            class StudentCollection{
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

            const stdCollection = new StudentCollection
            const std1 = new Student(
                'Nguyen Van ABC',
                '60TH5',
                20,
                'Thai Binh'
            )
            const std2 = new Student(
                'Nguyen Van B',
                '60TH1',
                18,
                'Thanh Hoa'
            )
            const std3 = new Student(
                'Tran Thi C',
                '60TH4',
                21,
                'Ha Noi'
            )
            const std4 = new Student(
                'Nguyen Huu C',
                '60TH4',
                18,
                'Nam Dinh'
            )    
            const std5 = new Student(
                'Nguyen Thi D',
                '63TH5',
                15,
                'Ha Noi'
            )    
            const std6 = new Student(
                'Tran Van E',
                '60TH5',
                18,
                'Thai Binh'
            )    
            const std7 = new Student(
                'Nguyen Huu ABC',
                '60TH4',
                21,
                'Ha Noi'
            )    
            const std8 = new Student(
                'Tran Thi K',
                '60TH1',
                21,
                'Nam Dinh'
            )
            stdCollection.addStd(std1)
            stdCollection.addStd(std2)
            stdCollection.addStd(std3)
            stdCollection.addStd(std4)
            stdCollection.addStd(std5)
            stdCollection.addStd(std6)
            stdCollection.addStd(std7)
            stdCollection.addStd(std8)
            stdCollection.show()
            console.log('Danh sach hoc sinh:')
            console.log(stdCollection)
            console.log('---------------------------------------------------')
            console.log('Học sinh 15 tuổi:')
            console.log(stdCollection.findOfAge())
            console.log('---------------------------------------------------')
            console.log('Hoc sinh 18 tuoi o Ha Noi:')
            console.log(stdCollection.findOfAgeaAdd())
            console.log('---------------------------------------------------')
            console.log('Hoc sinh ten la A :')
            console.log(stdCollection.findOfName('ABC'))
            // em chưa show và bắt event lên HTML nên hiển thị bên Console ạ!!!!




