let cart = [];

// Add Product
function addToCart(name, price) {

    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    showCart();
}

// Show Cart
function showCart() {

    let cartBox = document.getElementById("cart");

    cartBox.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        cartBox.innerHTML += `
        <div style="margin-bottom:15px;border-bottom:1px solid #ddd;padding-bottom:10px;">
            <b>${item.name}</b><br>
            ₹${item.price} × ${item.qty}<br><br>

            <button onclick="plus(${index})">+</button>

            <button onclick="minus(${index})">-</button>

            <button onclick="removeItem(${index})">Remove</button>

        </div>
        `;
    });

    cartBox.innerHTML += `<h3>Total : ₹${total}</h3>`;
}
// +
function plus(index) {
    cart[index].qty++;
    showCart();
}

// -
function minus(index) {
    cart[index].qty--;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    showCart();
}

// Remove
function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}

// WhatsApp Order
function sendWhatsAppOrder() {

    if (cart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    let text = "*SRG Smart Store Order*%0A%0A";
    let total = 0;

    cart.forEach(item => {
        text += `${item.name} x ${item.qty} = ₹${item.price * item.qty}%0A`;
        total += item.price * item.qty;
    });

    text += `%0A*Total : ₹${total}*`;
    text += `%0AName : `;
    text += `%0AAddress : `;
    text += `%0AMobile : `;

window.open(
"https://wa.me/919753016116?text=" + encodeURIComponent(text),
"_blank"
);
}
// Search Products
const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product");

        products.forEach(function(product) {

            if (product.innerText.toLowerCase().includes(value)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}