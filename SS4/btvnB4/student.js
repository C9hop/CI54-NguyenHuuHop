export default class Student{
    ten;
    lop;
    tuoi;
    diachi;
    constructor(ten, lop, tuoi, diachi){
        this.ten = ten
        this.lop = lop
        this.tuoi = tuoi
        this.diachi = diachi
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