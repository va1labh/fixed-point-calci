function convert() {
    let floatVal = parseFloat(document.getElementById("floatVal").value);
    let qVal = parseInt(document.getElementById("qVal").value);

    let fixedVal = Math.round(floatVal * Math.pow(2, qVal));

    document.getElementById("result").innerHTML =
        "Fixed-point value: " + fixedVal;
}
