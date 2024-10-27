document.addEventListener("DOMContentLoaded", function () {
    generateQRCode();
});

function generateQRCode() {
    var networkName = document.getElementById('networkName').value;
    var password = document.getElementById('password').value;
    var qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';

    new QRCode(qrCodeContainer, {
        text: `WIFI:T:WPA;S:${networkName};P:${password};;`,
        width: 128,
        height: 128
    });
}
