const hoaDon_ND = 4.5;
const dichVu_ND = 20.5;
const kenh_ND = 7.5;

const hoaDon_DN = 15;
const dichVu_DN_Less10 = 75;
const dichvu_DN_Unit = 5;
const kenh_DN = 50;
function checkDN() {
    var tmp = document.getElementById("selectUser").value ;
    if(tmp == 1){
        document.getElementById("connectToDN").style.display = 'block';
    }else{
        document.getElementById("connectToDN").style.display = 'none';
    }
}
function getValue(id){
    return document.getElementById(id).value ;
}

function priceServiceDN(id) {
    var tmp = getValue(id);
    if(tmp <= 10){
        return dichVu_DN_Less10;
    }else{
        return dichVu_DN_Less10 + (tmp - 10)*5;
    }
}

function mainTTC() {


    //Lấy giá trị
    var costumerCode = getValue("code");
    var channel_Number = getValue("channelNumber");
    var number_Connect = getValue("numberConnect");
   // console.log(costumerCode, channel_Number, number_Connect);
   
  
   var typeUser = "";
   if(getValue("selectUser") == 1){
    typeUser = "1";
   }else{
    typeUser = "2";
   }

    var total = 0;
   switch (typeUser) {
    case "1":
        total = Number(hoaDon_DN) + priceServiceDN("numberConnect") + channel_Number*kenh_DN;
        break;
    case "2":
        total = Number(hoaDon_ND) + Number(dichVu_ND) + channel_Number*kenh_ND;
        break;
   }
   if(typeUser == 1){
    total += ".00";
   }

   document.getElementById("txtResult").innerHTML = "Mã khách hàng : "+costumerCode+"<br>Tiền cáp : $ "+ total;

    
}
document.getElementById("btnCalc").onclick = mainTTC;
