const incomeLess_60 = 0.05;
const income60_120 = 0.1;
const income120_210 = 0.15;
const income210_384 = 0.2;
const income384_624 = 0.25;
const income624_960 = 0.3;
const incomeMore960 = 0.35;

function getValue(id) {
    return document.getElementById(id).value;
}

function calcTax(sumTotal) {
    if(sumTotal > 0 && sumTotal <=60e+6){
        return sumTotal * incomeLess_60;
    }else if(sumTotal > 60e+6 && sumTotal <= 120e+6){
        return 60e+6*incomeLess_60 + (sumTotal - 60e+6)*income60_120;
    }else if(sumTotal > 120e+6 && sumTotal <=210e+6){
        return 60e+6*incomeLess_60 + 60e+6*income60_120 +(sumTotal - 120e+6)*income120_210;
    }else if(sumTotal > 210e+6 && sumTotal <= 384e+6){
        return 60e+6*incomeLess_60 + 60e+6*income60_120 + 90e+6*income120_210 + (sumTotal - 210e+6)*income210_384;
    }else if(sumTotal > 384e+6 && sumTotal <= 624e+6 ){
        return 60e+6*incomeLess_60 + 60e+6*income60_120 + 90e+6*income120_210 + 174e+6* income210_384 +(sumTotal - 384e+6)*income384_624;
    }else if(sumTotal > 624e+6 && sumTotal <= 960e+6){
        return 60e+6*incomeLess_60 + 60e+6*income60_120 + 90e+6*income120_210 + 174e+6* income210_384 + 240e+6* income384_624 + (sumTotal - 624e+6)*income624_960;
    }else if(sumTotal >= 960e+6){
        return 60e+6*incomeLess_60 + 60e+6*income60_120 + 90e+6*income120_210 + 174e+6* income210_384 + 240e+6* income384_624 + 336e+6*income624_960 +(sumTotal - 960e+6)*incomeMore960;
    }else{
        alert("Tổng thu nhập trên năm không hợp lệ! Hãy điền lại.")
    }
}

function calcPersonalIncomeTax() {
    var income = " ";
    income = getValue("inputName");
    var total = getValue("totalIncome");
    var totalPeople = getValue("people");
    //console.log(total, totalPeople);
    var inputfunction = Number(total) - 4e+6 - Number(totalPeople)*16e+5; 

    var sumTax = new Intl.NumberFormat('vn-VN').format(calcTax(inputfunction));
    
    document.getElementById("txtResult").innerHTML = "Họ và tên : "+ income + "<br>Tiền thuế thu nhập cá nhân: "+sumTax+"VNĐ";


}
document.getElementById("btnCalc").onclick = calcPersonalIncomeTax;