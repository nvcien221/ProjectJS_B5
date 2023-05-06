function mainQLSV() {
    var KV = document.getElementById("selectKV").value ;
    KV = parseFloat(KV);
    var checkKV ;
    if(KV == 2 || KV == 1 || KV == 0.5){
        checkKV = KV;
    }else{
        checkKV = 0;
    }
    var DT = document.getElementById("selectDT").value ;
    DT = parseFloat(DT);
    var checkDT ;
    if(DT == 2.5 || DT == 1.5 || DT == 1){
        checkDT = DT;
    }else{
        checkDT = 0;
    }
    
    var diemChuan = document.getElementById("inputTotal").value ;
    diemChuan = parseFloat(diemChuan);
    console.log(diemChuan);
    var mon_1 = document.getElementById("testScore1").value ;
    var mon_2 = document.getElementById("testScore2").value ;
    var mon_3 = document.getElementById("testScore3").value ;
    var sum = parseFloat(mon_1) + parseFloat(mon_2) + parseFloat(mon_3) + checkKV +checkDT;
    console.log(sum);
    if(mon_1 == 0 || mon_2 == 0 || mon_3 == 0){
        document.getElementById("txtResult").innerHTML = "Rất tiếc! Bạn đã không chúng tuyển."
    }else if(mon_1 > 10 || mon_2 > 10 || mon_3 > 10 || mon_1 < 0 || mon_2 < 0 || mon_3 < 0){
        document.getElementById("txtResult").innerHTML = "Số điểm không hợp lệ! Hãy nhập lại."
    }else if(sum >= diemChuan){
         document.getElementById("txtResult").innerHTML = "Chúc mừng! Bạn đã chúng tuyển với điểm số : " + sum;
    }else{
         document.getElementById("txtResult").innerHTML = "Bạn đã rớt! Tổng điểm bạn đạt là :" + sum;
    }
}
document.getElementById("btnCalc").onclick = mainQLSV;