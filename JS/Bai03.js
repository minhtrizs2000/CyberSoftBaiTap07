
/**
 * BAI 03: Quy đổi tiền
 * 
 * khối 1: input
 * usd, unit
 * 
 * khối 2: 
 * _b1: khai báo các biến input
 * _b2: gán giá trị cho biến
 * _b3: quy đổi usd sang vnd:
 *          vnd = usd * unit;
 * 
 * khối 3:
 * vnd
 */

 var usdELE = document.getElementById("inputUSD");
 var btnSubmit = document.getElementById("btnSubmit");
 var resultELE = document.getElementById("txtResult");

 const unit = 23500;

 btnSubmit.onclick = function(){
     var usd = usdELE.value;
     var vnd = usd * unit;
     
     resultELE.innerHTML = usd + ' USD = ' + vnd + ' VND';
 }
