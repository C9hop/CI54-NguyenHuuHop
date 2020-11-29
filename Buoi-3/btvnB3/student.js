export class Student{
    img;
    ten;
    lop;
    tuoi;
    diaChi;
    constructor(img, ten, lop, tuoi, diaChi){
        this.img = img
        this.ten = ten
        this.lop = lop
        this.tuoi = tuoi
        this.diaChi = diaChi
    }
    // toHTML(){
    //     return `
    //     <table>
    //     <tr>
    //         <th>Họ và tên</th>
    //         <th>Lớp</th>
    //         <th>Tuổi</th>
    //         <th>Địa chỉ</th>
    //     </tr>
    //     <tr>
    //         <td>${this.ten}</td>
    //         <td>${this.lop}</td>
    //         <td>${this.tuoi}</td>
    //         <td>${this.diaChi}</td>
    //     </tr>
    // </table>
    //     `
    // }
}