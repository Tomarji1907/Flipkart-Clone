document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const homePage =
        document.getElementById("homePage");

    const productsSection =
        document.getElementById("productsSection");

    const productsGrid =
        document.getElementById("productsGrid");

    const productsTitle =
        document.getElementById("productsTitle");

    const productsSubtitle =
        document.getElementById("productsSubtitle");

    const searchInfo =
        document.getElementById("searchInfo");

    const noProducts =
        document.getElementById("noProducts");

    const productsEnd =
        document.getElementById("productsEnd");

    const searchInput =
        document.getElementById("searchInput");

    const mobileSearchInput =
        document.getElementById("mobileSearchInput");

    const clearSearch =
        document.getElementById("clearSearch");

    const sortProducts =
        document.getElementById("sortProducts");

    const bestDealsGrid =
        document.getElementById("bestDealsGrid");

    const cartCount =
        document.getElementById("cartCount");

    const mobileCartCount =
        document.getElementById("mobileCartCount");

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");


    /* =====================================================
       PRODUCTS
    ===================================================== */

    const products = [

        {
            id: 1,
            category: "mobiles",
            name: "Smartphone 5G 128GB",
            price: 12999,
            mrp: 17999,
            rating: 4.4,
            reviews: 2184,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 2,
            category: "electronics",
            name: "Wireless Bluetooth Headphones",
            price: 1499,
            mrp: 2999,
            rating: 4.3,
            reviews: 1642,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 3,
            category: "electronics",
            name: "Smart Watch Series",
            price: 1799,
            mrp: 3999,
            rating: 4.2,
            reviews: 987,
            delivery: "Delivery by tomorrow",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 4,
            category: "electronics",
            name: "Portable Bluetooth Speaker",
            price: 899,
            mrp: 1999,
            rating: 4.5,
            reviews: 2310,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 5,
            category: "fashion",
            name: "Men Casual Printed Shirt",
            price: 499,
            mrp: 1199,
            rating: 4.1,
            reviews: 832,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 6,
            category: "fashion",
            name: "Women Ethnic Dress",
            price: 799,
            mrp: 1899,
            rating: 4.4,
            reviews: 1456,
            delivery: "Delivery by tomorrow",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 7,
            category: "fashion",
            name: "Classic Running Shoes",
            price: 999,
            mrp: 2499,
            rating: 4.3,
            reviews: 3120,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 8,
            category: "fashion",
            name: "Premium Backpack",
            price: 699,
            mrp: 1599,
            rating: 4.5,
            reviews: 1987,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 9,
            category: "home",
            name: "Non Stick Cookware Set",
            price: 1299,
            mrp: 2499,
            rating: 4.4,
            reviews: 734,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1584990347955-2ec0431a6e8f?q=80&w=1170&auto=format&fit=crop"
        },

        {
            id: 10,
            category: "home",
            name: "Modern Table Lamp",
            price: 599,
            mrp: 1299,
            rating: 4.2,
            reviews: 563,
            delivery: "Delivery by tomorrow",
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 11,
            category: "home",
            name: "Decorative Wall Clock",
            price: 449,
            mrp: 999,
            rating: 4.3,
            reviews: 911,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 12,
            category: "home",
            name: "Soft Cotton Bedsheet",
            price: 699,
            mrp: 1499,
            rating: 4.4,
            reviews: 1267,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 13,
            category: "grocery",
            name: "Premium Basmati Rice 5kg",
            price: 499,
            mrp: 649,
            rating: 4.5,
            reviews: 3240,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 14,
            category: "grocery",
            name: "Fresh Fruits Basket",
            price: 299,
            mrp: 399,
            rating: 4.3,
            reviews: 842,
            delivery: "Delivery by tomorrow",
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 15,
            category: "grocery",
            name: "Organic Green Vegetables",
            price: 199,
            mrp: 299,
            rating: 4.4,
            reviews: 623,
            delivery: "Fast delivery",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 16,
            category: "grocery",
            name: "Daily Kitchen Essentials",
            price: 399,
            mrp: 549,
            rating: 4.2,
            reviews: 1024,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 17,
            category: "beauty",
            name: "Face Care Essentials Kit",
            price: 599,
            mrp: 999,
            rating: 4.3,
            reviews: 1240,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 18,
            category: "beauty",
            name: "Personal Care Combo",
            price: 449,
            mrp: 799,
            rating: 4.1,
            reviews: 764,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 19,
            category: "appliances",
            name: "Electric Mixer Grinder",
            price: 1899,
            mrp: 2999,
            rating: 4.4,
            reviews: 1523,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 20,
            category: "appliances",
            name: "Air Fryer 4.5L",
            price: 2499,
            mrp: 4999,
            rating: 4.5,
            reviews: 945,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 21,
            category: "toys",
            name: "Remote Control Racing Car",
            price: 799,
            mrp: 1499,
            rating: 4.4,
            reviews: 631,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1579271723124-a758848c2753?q=80&w=1925&auto=format&fit=crop"
        },

        {
            id: 22,
            category: "toys",
            name: "Kids Building Blocks Set",
            price: 499,
            mrp: 899,
            rating: 4.5,
            reviews: 884,
            delivery: "Delivery by tomorrow",
            image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 23,
            category: "sports",
            name: "Professional Cricket Ball",
            price: 1999,
            mrp: 2999,
            rating: 4.4,
            reviews: 7534,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 24,
            category: "sports",
            name: "Football Training Ball",
            price: 599,
            mrp: 999,
            rating: 4.3,
            reviews: 721,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 25,
            category: "furniture",
            name: "Comfortable Office Chair",
            price: 3499,
            mrp: 5999,
            rating: 4.2,
            reviews: 452,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 26,
            category: "furniture",
            name: "Modern Study Table",
            price: 2999,
            mrp: 4999,
            rating: 4.3,
            reviews: 381,
            delivery: "Delivery in 3 days",
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 27,
            category: "books",
            name: "Programming Fundamentals",
            price: 399,
            mrp: 699,
            rating: 4.6,
            reviews: 1290,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 28,
            category: "books",
            name: "Self Learning Guide",
            price: 299,
            mrp: 499,
            rating: 4.5,
            reviews: 867,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 29,
            category: "twowheeler",
            name: "Electric Bike",
            price: 79999,
            mrp: 99999,
            rating: 4.4,
            reviews: 1231,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 30,
            category: "travel",
            name: "Travel Cabin Suitcase",
            price: 1799,
            mrp: 3499,
            rating: 4.4,
            reviews: 71124,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=85"
        },

        {
            id: 31,
            category: "mobiles",
            name: "Apple i phone 17 pro (Cosmic Orange, 512 GB)",
            price: 120999,
            mrp: 140999,
            rating: 4.4,
            reviews: 92184,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1757710436034-f1d7372ec1be?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            id: 32,
            category: "mobiles",
            name: "S21 ultra 5G",
            price: 92999,
            mrp: 106999,
            rating: 4.4,
            reviews: 98114,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            id: 33,
            category: "travel",
            name: "Travel bag",
            price: 2999,
            mrp: 3999,
            rating: 4.4,
            reviews: 5184,
            delivery: "Free delivery",
            image: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            id: 34,
            category: "twowheeler",
            name: "Electric kick Scooter",
            price: 28999,
            mrp: 35999,
            rating: 4.5,
            reviews: 7184,
            delivery: "Free delivery",
            image: "https://plus.unsplash.com/premium_photo-1716440381772-face56f5a46b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

    ];


    /* =====================================================
       STATE
    ===================================================== */

    let currentProducts = [...products];

    let currentCategory = "all";

    let currentSlide = 0;

    let slideTimer = null;


    /* =====================================================
       LOAD CART
    ===================================================== */

    let cart = [];

    try {

        cart =
            JSON.parse(
                localStorage.getItem(
                    "shopkartCart"
                )
            ) || [];

    } catch {

        cart = [];

    }


    /* =====================================================
       CART DATA NORMALIZATION
       Makes old cart data compatible
    ===================================================== */

    cart = cart
        .map(item => {

            const product =
                products.find(
                    product =>
                        product.id ===
                        Number(item.id)
                );

            if (!product) {
                return null;
            }

            return {

                id: product.id,

                category: product.category,

                name: product.name,

                price: product.price,

                mrp: product.mrp,

                rating: product.rating,

                reviews: product.reviews,

                delivery: product.delivery,

                image: product.image,

                quantity:
                    Math.max(
                        1,
                        Number(
                            item.quantity || 1
                        )
                    )

            };

        })
        .filter(Boolean);


    /* =====================================================
       HELPERS
    ===================================================== */

    function formatPrice(price) {

        return new Intl.NumberFormat(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0
            }
        ).format(price);

    }


    function getDiscount(price, mrp) {

        return Math.round(
            ((mrp - price) / mrp) * 100
        );

    }


    function showToast(message) {

        if (!toast || !toastMessage) {
            return;
        }

        toastMessage.textContent =
            message;

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 1800);

    }


    /* =====================================================
       CART
    ===================================================== */

    function updateCart() {

        const count =
            cart.reduce(
                (total, item) =>
                    total +
                    Number(
                        item.quantity || 1
                    ),
                0
            );


        if (cartCount) {

            cartCount.textContent =
                count;

        }


        if (mobileCartCount) {

            mobileCartCount.textContent =
                count;

        }


        localStorage.setItem(
            "shopkartCart",
            JSON.stringify(cart)
        );


        localStorage.setItem(
            "shopkartCartCount",
            String(count)
        );

    }


    /* =====================================================
       ADD TO CART
    ===================================================== */

    function addToCart(id) {

        const product =
            products.find(
                item =>
                    item.id === id
            );


        if (!product) {
            return;
        }


        const existing =
            cart.find(
                item =>
                    item.id === id
            );


        if (existing) {

            existing.quantity =
                Number(
                    existing.quantity || 1
                ) + 1;

        } else {

            cart.push({

                id: product.id,

                category: product.category,

                name: product.name,

                price: product.price,

                mrp: product.mrp,

                rating: product.rating,

                reviews: product.reviews,

                delivery: product.delivery,

                image: product.image,

                quantity: 1

            });

        }


        /* SAVE CART */

        localStorage.setItem(
            "shopkartCart",
            JSON.stringify(cart)
        );


        /* UPDATE COUNT */

        updateCart();


        /* TOAST */

        showToast(
            `${product.name} added to cart`
        );

    }


    /* =====================================================
       IMAGE FALLBACK
    ===================================================== */

    function imageFallback(product) {

        const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="600"
            viewBox="0 0 600 600">

            <rect
                width="600"
                height="600"
                fill="#f5f6f8"/>

            <circle
                cx="300"
                cy="245"
                r="105"
                fill="#e1e5ea"/>

            <rect
                x="175"
                y="365"
                width="250"
                height="24"
                rx="12"
                fill="#d5dae0"/>

            <text
                x="300"
                y="440"
                text-anchor="middle"
                font-family="Arial"
                font-size="25"
                font-weight="700"
                fill="#555">

                ${product.name.slice(0, 22)}

            </text>

            <text
                x="300"
                y="480"
                text-anchor="middle"
                font-family="Arial"
                font-size="18"
                fill="#888">

                Product

            </text>

        </svg>
        `;

        return (
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(svg)
        );

    }


    function fixProductImages() {

        document
            .querySelectorAll(
                ".product-image"
            )
            .forEach(img => {

                img.addEventListener(
                    "error",
                    function () {

                        if (
                            this.dataset.fixed ===
                            "true"
                        ) {

                            return;

                        }


                        this.dataset.fixed =
                            "true";


                        const id =
                            Number(
                                this.dataset.fallback
                            );


                        const product =
                            products.find(
                                item =>
                                    item.id ===
                                    id
                            );


                        if (product) {

                            this.src =
                                imageFallback(
                                    product
                                );

                        }

                    },
                    { once: true }
                );

            });

    }


    /* =====================================================
       PRODUCT CARD
    ===================================================== */

    function createProductCard(product) {

        const discount =
            getDiscount(
                product.price,
                product.mrp
            );


        return `
        <article class="product-card">

            <div class="product-image-box">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    data-fallback="${product.id}">

            </div>


            <div class="product-name">
                ${product.name}
            </div>


            <div class="rating-row">

                <span class="rating">
                    ${product.rating} ★
                </span>

                <span class="review-count">
                    ${product.reviews.toLocaleString("en-IN")}
                    ratings
                </span>

            </div>


            <div class="price-row">

                <span class="final-price">
                    ${formatPrice(product.price)}
                </span>

                <span class="mrp">
                    ${formatPrice(product.mrp)}
                </span>

                <span class="discount">
                    ${discount}% off
                </span>

            </div>


            <div class="delivery">
                ${product.delivery}
            </div>


            <div class="product-buttons">

                <button
                    class="add-cart-btn"
                    data-product-id="${product.id}">

                    🛒 Add to Cart

                </button>


                <button
                    class="buy-now-btn"
                    data-product-id="${product.id}">

                    Buy Now

                </button>

            </div>


            <button
                class="view-detail-btn"
                data-product-id="${product.id}">

                View Details

            </button>

        </article>
        `;

    }


    /* =====================================================
       SHOW PRODUCTS
    ===================================================== */

    function showProducts(
        list,
        title = "All Products",
        subtitle = "Best deals for you",
        info = ""
    ) {

        currentProducts =
            [...list];


        homePage.style.display =
            "none";


        productsSection.classList.add(
            "active"
        );


        productsTitle.textContent =
            title;


        productsSubtitle.textContent =
            subtitle;


        searchInfo.textContent =
            info;


        productsGrid.innerHTML =
            "";


        noProducts.classList.remove(
            "show"
        );


        if (!list.length) {

            productsEnd.style.display =
                "none";


            noProducts.classList.add(
                "show"
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            return;

        }


        list.forEach(product => {

            productsGrid.insertAdjacentHTML(
                "beforeend",
                createProductCard(product)
            );

        });


        productsEnd.style.display =
            "block";


        fixProductImages();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       HOME
    ===================================================== */

    function goHome() {

        homePage.style.display =
            "";


        productsSection.classList.remove(
            "active"
        );


        searchInfo.textContent =
            "";


        currentCategory =
            "all";


        searchInput.value =
            "";


        mobileSearchInput.value =
            "";


        clearSearch.classList.remove(
            "show"
        );


        document
            .querySelectorAll(
                ".top-category, .mobile-category"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                    "all"
                );

            });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       CATEGORY
    ===================================================== */

    function showCategory(category) {

        currentCategory =
            category;


        document
            .querySelectorAll(
                ".top-category, .mobile-category"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                    category
                );

            });


        if (category === "all") {

            showProducts(
                products,
                "All Products",
                "Best deals for you",
                ""
            );

            return;

        }


        const filtered =
            products.filter(
                product =>
                    product.category ===
                    category
            );


        const categoryNames = {

            fashion: "Fashion",

            mobiles: "Mobiles",

            electronics: "Electronics",

            beauty: "Beauty",

            home: "Home",

            appliances: "Appliances",

            toys: "Toys & Bags",

            grocery: "Food & Household",

            sports: "Sports",

            furniture: "Furniture",

            books: "Books",

            twowheeler: "2 Wheelers",

            travel: "Travel"

        };


        showProducts(
            filtered,

            categoryNames[category] ||
                "Products",

            "Best products for you",

            `${filtered.length} products`
        );

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    function performSearch(value) {

        const query =
            value.trim().toLowerCase();


        if (!query) {

            goHome();

            return;

        }


        const results =
            products.filter(
                product =>

                    product.name
                        .toLowerCase()
                        .includes(query)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(query)
            );


        clearSearch.classList.add(
            "show"
        );


        showProducts(
            results,

            "Search Results",

            `Products matching "${value}"`,

            `${results.length} result(s) found`
        );

    }


    /* =====================================================
       SORT
    ===================================================== */

    function sortCurrentProducts() {

        let sorted =
            [...currentProducts];


        switch (
            sortProducts.value
        ) {

            case "low":

                sorted.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "high":

                sorted.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "rating":

                sorted.sort(
                    (a, b) =>
                        b.rating - a.rating
                );

                break;


            case "discount":

                sorted.sort(
                    (a, b) =>
                        getDiscount(
                            b.price,
                            b.mrp
                        )
                        -
                        getDiscount(
                            a.price,
                            a.mrp
                        )
                );

                break;

        }


        productsGrid.innerHTML =
            "";


        sorted.forEach(product => {

            productsGrid.insertAdjacentHTML(
                "beforeend",
                createProductCard(product)
            );

        });


        fixProductImages();

    }


    /* =====================================================
       BANNER SLIDER
    ===================================================== */

    const bannerSlider =
        document.getElementById(
            "bannerSlider"
        );


    const bannerDots =
        document.querySelectorAll(
            ".banner-dot"
        );


    const totalSlides =
        document.querySelectorAll(
            ".banner-slide"
        ).length;


    function updateSlider() {

        if (!bannerSlider) {
            return;
        }


        bannerSlider.style.transform =
            `translateX(-${currentSlide * 100}%)`;


        bannerDots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentSlide
                );

            }
        );

    }


    function nextSlide() {

        if (!totalSlides) {
            return;
        }


        currentSlide =
            (currentSlide + 1)
            % totalSlides;


        updateSlider();

    }


    function previousSlide() {

        if (!totalSlides) {
            return;
        }


        currentSlide =
            (currentSlide - 1 +
                totalSlides)
            % totalSlides;


        updateSlider();

    }


    function startSlider() {

        if (!totalSlides) {
            return;
        }


        clearInterval(
            slideTimer
        );


        slideTimer =
            setInterval(
                nextSlide,
                4500
            );

    }


    const nextBanner =
        document.getElementById(
            "nextBanner"
        );


    const prevBanner =
        document.getElementById(
            "prevBanner"
        );


    if (nextBanner) {

        nextBanner.addEventListener(
            "click",
            () => {

                nextSlide();

                startSlider();

            }
        );

    }


    if (prevBanner) {

        prevBanner.addEventListener(
            "click",
            () => {

                previousSlide();

                startSlider();

            }
        );

    }


    bannerDots.forEach(dot => {

        dot.addEventListener(
            "click",
            () => {

                currentSlide =
                    Number(
                        dot.dataset.slide
                    );


                updateSlider();

                startSlider();

            }
        );

    });


    startSlider();


    /* =====================================================
       BEST DEALS
    ===================================================== */

    const bestDeals =
        products
            .slice()
            .sort(
                (a, b) =>
                    getDiscount(
                        b.price,
                        b.mrp
                    )
                    -
                    getDiscount(
                        a.price,
                        a.mrp
                    )
            )
            .slice(0, 5);


    if (bestDealsGrid) {

        bestDeals.forEach(product => {

            const discount =
                getDiscount(
                    product.price,
                    product.mrp
                );


            bestDealsGrid.insertAdjacentHTML(
                "beforeend",

                `
                <div
                    class="deal-card"
                    data-product-id="${product.id}">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy">

                    <div class="deal-name">
                        ${product.name}
                    </div>

                    <div>

                        <span class="deal-price">
                            ${formatPrice(product.price)}
                        </span>

                        <span class="deal-mrp">
                            ${formatPrice(product.mrp)}
                        </span>

                        <span class="deal-discount">
                            ${discount}% off
                        </span>

                    </div>

                </div>
                `
            );

        });

    }


    /* =====================================================
       CATEGORY BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            "[data-category]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const category =
                        button.dataset.category;


                    showCategory(
                        category
                    );

                }
            );

        });


    /* =====================================================
       HOME BUTTONS
    ===================================================== */

    const homeBox =
        document.getElementById(
            "homeBox"
        );


    if (homeBox) {

        homeBox.addEventListener(
            "click",
            goHome
        );

    }


    const mobileFlipBtn =
        document.getElementById(
            "mobileFlipBtn"
        );


    if (mobileFlipBtn) {

        mobileFlipBtn.addEventListener(
            "click",
            goHome
        );

    }


    const mobileHomeBtn =
        document.getElementById(
            "mobileHomeBtn"
        );


    if (mobileHomeBtn) {

        mobileHomeBtn.addEventListener(
            "click",
            goHome
        );

    }


    /* =====================================================
       VIEW ALL
    ===================================================== */

    const viewAllBtn =
        document.getElementById(
            "viewAllBtn"
        );


    if (viewAllBtn) {

        viewAllBtn.addEventListener(
            "click",
            () => {

                showProducts(
                    products,
                    "All Products",
                    "Best deals for you",
                    ""
                );

            }
        );

    }


    const showAllBtn =
        document.getElementById(
            "showAllBtn"
        );


    if (showAllBtn) {

        showAllBtn.addEventListener(
            "click",
            () => {

                showProducts(
                    products,
                    "All Products",
                    "Best deals for you",
                    ""
                );

            }
        );

    }


    /* =====================================================
       SEARCH EVENTS
    ===================================================== */

    searchInput.addEventListener(
        "input",
        () => {

            clearSearch.classList.toggle(
                "show",
                searchInput.value.length >
                0
            );

        }
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch(
                    searchInput.value
                );

            }

        }
    );


    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value =
                "";


            clearSearch.classList.remove(
                "show"
            );


            goHome();

        }
    );


    const mobileSearchBtn =
        document.getElementById(
            "mobileSearchBtn"
        );


    if (mobileSearchBtn) {

        mobileSearchBtn.addEventListener(
            "click",
            () => {

                performSearch(
                    mobileSearchInput.value
                );

            }
        );

    }


    mobileSearchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch(
                    mobileSearchInput.value
                );

            }

        }
    );


    /* =====================================================
       SORT
    ===================================================== */

    sortProducts.addEventListener(
        "change",
        sortCurrentProducts
    );


    /* =====================================================
       PRODUCT BUTTONS
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            /* ================================
               ADD TO CART
            ================================= */

            const cartButton =
                event.target.closest(
                    ".add-cart-btn"
                );


            if (cartButton) {

                const productId =
                    Number(
                        cartButton.dataset
                            .productId
                    );


                const product =
                    products.find(
                        item =>
                            item.id ===
                            productId
                    );


                if (!product) {
                    return;
                }


                /* ADD PRODUCT */

                addToCart(
                    productId
                );


                /* BUTTON ANIMATION */

                cartButton.animate(
                    [
                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(.88)"
                        },

                        {
                            transform:
                                "scale(1.08)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }
                    ],
                    {
                        duration: 450,
                        easing: "ease-out"
                    }
                );


                /* BUTTON SUCCESS */

                const oldText =
                    cartButton.textContent;


                cartButton.textContent =
                    "✓ Added";


                cartButton.style.background =
                    "#388e3c";


                setTimeout(() => {

                    cartButton.textContent =
                        oldText ||
                        "🛒 Add to Cart";


                    cartButton.style.background =
                        "";

                }, 1200);


                return;

            }


            /* ================================
               BUY NOW
            ================================= */

            const buyButton =
                event.target.closest(
                    ".buy-now-btn"
                );


            if (buyButton) {

                const product =
                    products.find(
                        item =>
                            item.id ===
                            Number(
                                buyButton.dataset
                                    .productId
                            )
                    );


                if (product) {

                    addToCart(
                        product.id
                    );


                    showToast(
                        "Product added — opening cart"
                    );


                    setTimeout(
                        () => {

                            window.location.href =
                                "links/cart.html";

                        },
                        500
                    );

                }


                return;

            }


            /* ================================
               VIEW DETAILS
            ================================= */

            const detailButton =
                event.target.closest(
                    ".view-detail-btn"
                );


            if (detailButton) {

                const product =
                    products.find(
                        item =>
                            item.id ===
                            Number(
                                detailButton.dataset
                                    .productId
                            )
                    );


                if (product) {

                    showToast(
                        `${product.name} selected`
                    );

                }


                return;

            }


            /* ================================
               BEST DEAL CARD
            ================================= */

            const dealCard =
                event.target.closest(
                    ".deal-card"
                );


            if (dealCard) {

                const product =
                    products.find(
                        item =>
                            item.id ===
                            Number(
                                dealCard.dataset
                                    .productId
                            )
                    );


                if (product) {

                    showProducts(
                        [product],

                        "Deal of the Day",

                        "Limited time offer",

                        ""
                    );

                }

            }

        }
    );


    /* =====================================================
       LOCATION
    ===================================================== */

    function selectLocation() {

        if (!navigator.geolocation) {

            showToast(
                "Location is not supported by this browser"
            );

            return;

        }


        showToast(
            "Getting your location..."
        );


        navigator.geolocation.getCurrentPosition(

            position => {

                const lat =
                    position.coords.latitude;


                const lon =
                    position.coords.longitude;


                const text =
                    `Location detected (${lat.toFixed(2)}, ${lon.toFixed(2)})`;


                const currentPincode =
                    document.getElementById(
                        "currentPincode"
                    );


                const deliveryLocation =
                    document.getElementById(
                        "deliveryLocation"
                    );


                const mobilePincode =
                    document.getElementById(
                        "mobilePincode"
                    );


                if (currentPincode) {

                    currentPincode.textContent =
                        text;

                }


                if (deliveryLocation) {

                    deliveryLocation.textContent =
                        text;

                }


                if (mobilePincode) {

                    mobilePincode.textContent =
                        text;

                }


                localStorage.setItem(
                    "shopkartLocation",
                    text
                );


                showToast(
                    "Delivery location updated"
                );

            },


            () => {

                showToast(
                    "Please allow location access"
                );

            },


            {
                enableHighAccuracy: false,

                timeout: 10000,

                maximumAge: 300000

            }

        );

    }


    const locationBtn =
        document.getElementById(
            "locationBtn"
        );


    if (locationBtn) {

        locationBtn.addEventListener(
            "click",
            selectLocation
        );

    }


    const mobileLocation =
        document.getElementById(
            "mobileLocation"
        );


    if (mobileLocation) {

        mobileLocation.addEventListener(
            "click",
            selectLocation
        );

    }


    const changeLocationBtn =
        document.getElementById(
            "changeLocationBtn"
        );


    if (changeLocationBtn) {

        changeLocationBtn.addEventListener(
            "click",
            selectLocation
        );

    }


    /* =====================================================
       MOBILE CATEGORY NAV
    ===================================================== */

    const mobileCategoriesBtn =
        document.getElementById(
            "mobileCategoriesBtn"
        );


    if (mobileCategoriesBtn) {

        mobileCategoriesBtn.addEventListener(
            "click",
            () => {

                const categories =
                    document.querySelector(
                        ".mobile-categories"
                    );


                if (categories) {

                    categories.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    /* =====================================================
       MOBILE ACCOUNT
    ===================================================== */

    const mobileAccountBtn =
        document.getElementById(
            "mobileAccountBtn"
        );


    if (mobileAccountBtn) {

        mobileAccountBtn.addEventListener(
            "click",
            () => {

                window.location.href =
                    "links/login.html";

            }
        );

    }


    /* =====================================================
       RESTORE LOCATION
    ===================================================== */

    const savedLocation =
        localStorage.getItem(
            "shopkartLocation"
        );


    if (savedLocation) {

        const currentPincode =
            document.getElementById(
                "currentPincode"
            );


        const deliveryLocation =
            document.getElementById(
                "deliveryLocation"
            );


        const mobilePincode =
            document.getElementById(
                "mobilePincode"
            );


        if (currentPincode) {

            currentPincode.textContent =
                savedLocation;

        }


        if (deliveryLocation) {

            deliveryLocation.textContent =
                savedLocation;

        }


        if (mobilePincode) {

            mobilePincode.textContent =
                savedLocation;

        }

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    updateCart();

});
