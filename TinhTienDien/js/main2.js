const price0_49 = 500;
const price50_99 = 650;
const price100_199 = 850;
const price200_349 = 1100;
const remaining_prive = 1300;

function calcTotalPrice(e_billNumber) {
    if(e_billNumber > 0 && e_billNumber <= 50){
        return e_billNumber*price0_49;
    }else if(e_billNumber > 50 && e_billNumber <= 100){
        return 50*price0_49 + (e_billNumber - 50)*price50_99;
    }else if(e_billNumber > 100 && e_billNumber <= 200){
        return 50*price0_49 + 50*price50_99 + (e_billNumber - 100)*price100_199;
    }else if(e_billNumber >= 200 && e_billNumber < 350){
        return 50*price0_49 + 50*price50_99 + 100*price100_199 + (e_billNumber - 200)*price200_349;
    }else if(e_billNumber >= 350){
        return 50*price0_49 + 50*price50_99 + 100*price100_199  + 150*price200_349 + (e_billNumber - 350)*remaining_prive;
    }else{
        alert("Số điện không hợp lệ ! Vui lòng nhập lại.")
    }
}

function mainTTD() {
    var customerName = " ";
    customerName = document.getElementById("inputName").value ;
    console.log(customerName)
    var billNumber = document.getElementById("inputNumber").value ;
    var total = calcTotalPrice(billNumber);
    console.log(total);

    document.getElementById("txtResult").innerHTML = "Họ tên khách hàng: " + customerName + "<br>Tiền điện: " + total.toLocaleString();
}
document.getElementById("btnCalc").onclick = mainTTD;