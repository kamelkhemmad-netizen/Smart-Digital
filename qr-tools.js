function generateQR() {
const text = document.getElementById("qrText").value;
const qrDiv = document.getElementById("qrcode");
qrDiv.innerHTML = "";
new QRCode(qrDiv, text);
}
