import{Student} from './student.js'
import{StudentCollection} from './studentCollection.js'
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




