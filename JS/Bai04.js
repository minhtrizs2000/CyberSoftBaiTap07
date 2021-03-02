
/**
 * BAI 04: Tính diện tích, chu vi hình chữ nhật
 * 
 * khối 1: input
 * cDai, cRong
 * 
 * khối 2: 
 * _b1: khai báo các biến input
 * _b2: gán giá trị cho biến
 * _b3: diện tích:
 *          dienTich = cDai * cRong;
 * _b4: chu vi:
 *          chuVi = (cDai + cRong) * 2;
 * 
 * khối 3:
 * chuVi
 * dienTich
 */

 var widthELE = document.getElementById("inputWidth");
 var lengthELE = document.getElementById("inputLength");
 var btnSubmit = document.getElementById("btnSubmit");
 var txtResultELE = document.getElementById("txtResult");


 btnSubmit.onclick = function(){
     var width = widthELE.value;
     var length = lengthELE.value;

     var area = width * length;
     var p = (width + length) * 2;

     txtResultELE.innerHTML = "Chu vi: " + p + "<br>Diện tích: " + area;
 }