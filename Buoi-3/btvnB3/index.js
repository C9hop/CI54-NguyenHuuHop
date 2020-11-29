import {Student} from './student.js'
import {StudentCollection} from './studentCollection.js'
            const stdCollection = new StudentCollection
            const std1 = new Student(
                './img/nobita.jpg',
                'Nobita',
                '60TH5',
                20,
                'Tokyo'
            )
            const std2 = new Student(
                './img/doraemon.jpg',
                'Doraemon',
                '60TH1',
                18,
                'Tokyo'
            )
            const std3 = new Student(
                './img/xuka.jpg',
                'Xuka',
                '60TH4',
                21,
                'Tokyo'
            )
            const std4 = new Student(
                `./img/chi.jpg`,
                'Chaien',
                '60TH4',
                18,
                'Tokyo'
            )    
            stdCollection.addStd(std1)
            stdCollection.addStd(std2)
            stdCollection.addStd(std3)
            stdCollection.addStd(std4)
            // stdCollection.show()
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
            stdCollection.showList()



