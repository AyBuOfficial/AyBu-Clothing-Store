let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const cartText = document.getElementById("cart");
    if (cartText) {
        cartText.innerText = "🛒 Cart (" + cart.length + ")";
    }
}

function addToCart(name, price, size = "L", quantity = 1) {
    cart.push({
        name: name,
        price: price,
        size: size,
        quantity: Number(quantity)
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    alert("✅ Product Added To Cart");
}

updateCartCount();

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        const value = search.value.toLowerCase();
        const products = document.querySelectorAll(".product");

        products.forEach(product => {
            if (product.innerText.toLowerCase().includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

const darkModeBtn = document.getElementById("darkMode");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
}

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("❤️ Added To Wishlist");
    });
});