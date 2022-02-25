const coupons = [
    "Cupón 1",
    "Cupón 2",
    "Cupón 3",
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioCondescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioCondescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    if (discountValue == 0) {
        const error = document.getElementById("errorResult");
        error.innerText = "Para calcular el precio con descuento con un cupón debes oprimir el otro botón";
    } else {
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 25;
            break;
        default:
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}