const calcularDescuento = () => {
    const monto = parseFloat(document.getElementById("monto").value);


    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }

    let descuento = 0;
    let porcentajeDescuento = 0;

    if (monto >= 1000) {
        descuento = monto * 0.15;
        porcentajeDescuento = 15;
    } else if (monto >= 500) {
        descuento = monto * 0.10;
        porcentajeDescuento = 10;
    } else {
        descuento = monto * 0.05;
        porcentajeDescuento = 5;
    }


    const totalPagar = monto - descuento;


    document.getElementById("resultado").classList.remove("hidden");
    document.getElementById("descuento").textContent = porcentajeDescuento + "% ($" + descuento.toFixed(2) + ")";
    document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);
}

const limpiarDatos = () => {

    document.getElementById("resultado").classList.add("hidden");

    document.getElementById("monto").value = "";
}