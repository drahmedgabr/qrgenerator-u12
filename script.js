const qrInput = document.getElementById("qrInput");
const canvasDiv = document.getElementById("canvasDiv");
const qrText = document.getElementById("qrText");

function generateCode() {
    
    if (qrInput.value == "") {
        alert("Please enter your text");
    } else {
        var qr = new QRious({
            element: canvasDiv,
            value: qrInput.value,
            foreground: "purple",
            size: 200,
          });

        canvasDiv.style.display = "inline-block";
        qrText.innerText = qrInput.value;
        qrInput.value = "";
    }

}