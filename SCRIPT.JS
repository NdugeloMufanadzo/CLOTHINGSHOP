// get the cart from the browser, or start with an empty cart
var cart = JSON.parse(localStorage.getItem("cart")) || [];

// save the cart in the browser
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// make the Add to Cart buttons work
var buttons = document.querySelectorAll(".add-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var name = this.dataset.name;
        var price = Number(this.dataset.price);

        cart.push({ name: name, price: price });
        saveCart();
        alert(name + " was added to your cart");
    });
}

// show the cart on the cart page
var cartList = document.getElementById("cart-list");
var cartTotal = document.getElementById("cart-total");

function showCart() {
    // if this page has no cart, do nothing
    if (cartList == null) {
        return;
    }

    cartList.innerHTML = "";
    var total = 0;

    if (cart.length == 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
    }

    for (var i = 0; i < cart.length; i++) {
        var item = document.createElement("li");
        item.innerHTML = cart[i].name + " - R" + cart[i].price + " <button onclick='removeItem(" + i + ")'>Remove</button>";
        cartList.appendChild(item);
        total = total + cart[i].price;
    }

    cartTotal.innerText = "Total: R" + total;
}

// remove one item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    showCart();
}

showCart();