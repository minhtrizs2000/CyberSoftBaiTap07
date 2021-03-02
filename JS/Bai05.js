
/**
 * BAI 04: Tính tổng 2 ký số
 * 
 * khối 1: input
 * n, soHangDV, soHangChuc
 * 
 * khối 2: 
 * _b1: khai báo các biến input
 * _b2: gán giá trị cho biến
 * _b3: lấy số hàng chục
 *          soHangChuc = n / 10;
 * _b4: lấy số hàng đơn vị
 *          soHangDV = n % 10;
 * 
 * khối 3:
 * tong
 */

 var numELE = document.getElementById("inputNum");
 var btnSubmit = document.getElementById("btnSubmit");
 var txtResultELE = document.getElementById("txtResult");

 btnSubmit.onclick = function(){
     var num = numELE.value;

     var unit = num % 10;
     var ten = Math.floor(num/10);

     var sum = unit + ten;

     txtResultELE.innerHTML = "Tổng 2 ký số trên là: " + sum;
 }