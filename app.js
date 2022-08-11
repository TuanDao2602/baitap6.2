// Bài 1: Viết chương trình cộng hai số (Sử dụng Return)
// Ý tưởng cho bài này như sau: trước tiên cần viết một hàm công hai số
// và nó có có hai tham số truyền vào, lúc này hai tham số đó chúng ta
// sẽ sử dụng hàm prompt() để lấy. Lưu ý khi lấy dữ liệu từ người dùng
// thì bạn nên sử dụng hàm parseInt() or ép kiểu Number để chuyển
// sang kiểu number nhé, nếu không nó sẽ hiểu là cộng hai chuỗi nên
// dẫn đến kết quả sai.
// let a = Number(prompt('nhập vào số a'));
// let b = Number(prompt('nhập vào số b'));
// function tong(x,y){
//     sum=x+y;
//     return sum
// }console.log(tong(a,b));

// bài 2 Tính tổng các số lẻ trong mảng. (Sử dụng Return)

// let Array = [1,2,3,4,5,6];
// function tongSoLe(){
//     let sum =0;
//     for(i=0;i<=Array.length-1;i++){
//         if(Array[i]%2===1){
//             sum= sum+ Array[i];
//         }
//     }return sum
// }console.log(tongSoLe());


//bài 3 Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của
// tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham
// số.
// let a = Number(prompt('mời nhập vào số a'));
// let b = Number(prompt('mời nhập vào số b'));
// function soSanh(x,y){
//     let sum=0;
//     if(x>y){
//         alert(`số thứ hai bạn nhập là : ${y} bé hơn số thứ nhất là ${x}`)
//     }else if(a===b || a<b){
//         sum=x+y
//     }return sum
// }console.log(soSanh(a,b));

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã
// có dạng như sau:

// function addNumbers(){
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
//     }
//  alert(result = 0);
//  alert(result = addNumbers());


//  Bài 5: Chuyển đổi giữa feet và meters
// Xây dựng hai phương thức sau:
// Chuyển đổi từ feet sang meters:
// function footToMeter(foot)
// Chuyển đổi từ meters sang feet:
// function meterToFoot(meter)
// Công thức chuyển đổi như sau:

// meter = 0.305 * foot
// foot = 3.279 * meter
// Sử dụng các giá trị trong bảng sau để kiểm tra tính chính xác của các hàm:
// let a = Number(prompt('nhập vào số foot'))
// let b = Number(prompt('nhập vào số meter của bạn')) ;
// function kiemTra(){
// function footToMeter(foot){
//     let meter=1;
//      meter =  0.305*foot
//      return meter;
// }console.log(`số met quy đổi ra là ${footToMeter(a)}`);

// function meterToFoot(meter){
//     let foot=1;
//     foot=  3.279 * meter
//     return foot;
// }console.log(`số foot quy đổi ra là ${meterToFoot(b)}`);
// };
// kiemTra()


//bài 6 Bài 6: Tạo hàm để kiểm tra số nguyên tố

// Xây dựng phương thức:
// function isPrime(number)

// 1. Để kiểm tra xem một số nguyên bất kỳ có phải là số nguyên tố hay
// không.
// 2. Sau khi làm được mục 1, Sử dụng phương thức này để tìm tất cả các số
// nguyên tố nhỏ hơn 100 và in nó ra
// Ví dụ, các số sau đây là số nguyên tố:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
// 89, 97
//6.1
function soNguyenTo(number){
    let a = 0;
    if (number > 0 && Number.isInteger(number)) {
        // alert(`${number}là số nguyên dương`);
        if (number === 1) {
            alert(`${number} không phải số nguyên tố`);
        } else {
            for (i = 2; i < number; i++) {
                if (number % i === 0) {
                    a = a + 1;
                }
            }
        }
    }
    return a;
}
let n = Number(prompt('nhập vào 1 số nguyên bất kì'));
let b = soNguyenTo(n);

             if (b > 0) {
                alert('không phải số nguyên tố')
            } else {
                alert(` là số nguyên tố`)
            } 



//6.2
// let userInput=prompt('nhập vào 1 số');
// let g = [];

// for(i=2;i<userInput;i++){
//     let c = soNguyenTo(i);
//     if(c===0){
//         g.push(i)
//     }
// }
// console.log(g);