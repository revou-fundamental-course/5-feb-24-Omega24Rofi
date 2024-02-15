var originalValue
function konversi(){
    var suhu1 = document.getElementById("suhuAwal").value;
    document.getElementById("hasil").value = suhu1*(9/5)+32
    document.getElementById("hasilCara").value = suhu1 + "(9/5) + 32 = "+ suhu1*(9/5)+32+"°F"

    if (originalValue === undefined) {
        originalValue = suhu1;
    }
}

function isInteger(value) {
    return /^\d+$/.test(value);
}

document.getElementById("suhuAwal").addEventListener("input", function() {
    var suhu1 = this.value;
    var konversiBtn = document.querySelector('.konversiBtn');

    if (isInteger(suhu1)) {
        konversiBtn.disabled = false;
    } else {
        konversiBtn.disabled = true;
    }
});

function reset(){
    document.getElementById("suhuAwal").value = null;
    document.getElementById("hasil").value = null;
    document.getElementById("hasilCara").value = null;
}

function reverse(){
    document.getElementById("suhuAwal").value = originalValue;
}