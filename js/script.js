console.log("My JavaScript file loaded!");

console.log("Supabase library:", window.supabase);

//INITIATE SUPEBASE
const supabaseUrl = "https://joaqqdbobdacowghywxd.supabase.co";
const supabaseKey = "sb_publishable_zCrOSns6UcebtMvS_XoMYw_gS2E6LsJ";

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

async function testConnection() {

    const { data, error } = await supabaseClient
        .from("products")
        .select("*");

    if (error) {
        console.error("Connection failed:", error);
    } else {
        console.log("Supabase connected!");
        console.log(data);
    }

}

testConnection();

async function loadPage(page) {

    const content = document.getElementById("page-content");

    try {
        // Retrieve HTML file from directory
        const response = await fetch(`pages/${page}.html`);

        if (!response.ok) {
            throw new Error("Page could not be loaded");
        }

        // Convert response into HTML text
        const html = await response.text();

        // Replace existing page content
        content.innerHTML = html;

        // Run the appropriate page script
        runPageScript(page);

        // Fade content back in
        requestAnimationFrame(() => {
            content.classList.remove("fade-out");
        });

    } catch (error) {

        content.innerHTML = `
            <h2>Page Not Found</h2>
            <p>Unable to load the requested page.</p>
        `;

        content.classList.remove("fade-out");

        console.error(error);

    }

}

// CLOSE OVERLAY
function closeModal() {

    document.getElementById("overlay")
        .classList.remove("show");

    selectedProduct = null;

}

function runPageScript(page) {

    switch (page) {

        case "home":
            homeScript();
            break;

        case "auction":
            auctionScript();
            break;

        case "donate":
            donateScript();
            break;

        case "contact":
            contactScript();
            break;

    }
}



// HOME PAGE SCRIPT
function homeScript() {
    console.log("Home page loaded");

    //OPEN THE DONATE PAGE
    loadPage('auction')
}


// AUCTION PAGE SCRIPT
function auctionScript() {
    console.log("Auction page loaded");

    //CALL SUPABASE
    loadProducts();

    let products = [];

async function loadProducts() {

    const { data, error } = await supabaseClient
        .from("products")
        .select("*")
        .order("id", { ascending: false });

    if (error) {
        console.error("Error loading products:", error);
        return;
    }

    console.log(data);
    products = data;

    displayProducts(products);
}

    // PRODUCT INVENTORY
    const itemsList = [
        {
            id: 1,
            name: "Minimalist Desk Lamp",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 2,
            name: "Auction Item 2",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 3,
            name: "Auction Item 3",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 4,
            name: "Auction Item 4",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 5,
            name: "Auction Item 5",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 6,
            name: "Auction Item 6",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 7,
            name: "Auction Item 7",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 8,
            name: "Auction Item 8",
            category: "Kitchen",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 9,
            name: "Auction Item 9",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 10,
            name: "Auction Item 10",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 11,
            name: "Auction Item 11",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 12,
            name: "Auction Item 12",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 13,
            name: "Auction Item 13",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 14,
            name: "Auction Item 14",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 15,
            name: "Auction Item 15",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 16,
            name: "Auction Item 16",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 17,
            name: "Auction Item 17",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 18,
            name: "Auction Item 18",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 19,
            name: "Auction Item 19",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 20,
            name: "Auction Item 20",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        },
        {
            id: 21,
            name: "Auction Item 21",
            category: "Home & Living",
            price: 40.00,
            stock: 10.00,
            userbid: "No",
            emoji: "💡",
            image: "image/template.png",
            color: "#E9E4DA",
            description: "A sleek, modern desk lamp with warm adjustable lighting. Perfect for workspaces, reading corners, and bedside tables."
        }
    ];

    let activeCategory = "All Items";
    let cart = [];
    let selectedProduct = null;

    //HIGHEST BID
    async function getHighestBid(productId) {

        const { data, error } = await supabaseClient
            .from("bids")
            .select("amount")
            .eq("product_id", productId)
            .order("amount", { ascending: false })
            .limit(1);
    
        if (error) {
            console.error("Error retrieving bids:", error);
            return 0;
        }
    
        return data.length > 0
            ? Number(data[0].amount)
            : 0;
    }


    //BID HISTORY
    async function getBidHistory(productId) {

        const { data, error } = await supabaseClient
            .from("bids")
            .select("*")
            .eq("product_id", productId)
            .order("created_at", { ascending: false });
    
        if (error) {
            console.error("Error retrieving bid history:", error);
            return [];
        }
    
        return data;
    }


    //SUBMIT BID
    async function placeBid(productId, bidderName, amount) {

        const { data, error } = await supabaseClient
            .rpc("place_bid", {
                p_product_id: productId,
                p_bidder_name: bidderName,
                p_amount: Number(amount)
            });
    
        if (error) {
            alert(error.message);
            return false;
        }
    
        alert("Your bid has been placed!");
    
        return true;
    }


    // ADD TO CART

    // CATEGORY FILTERS

    document.querySelectorAll(".filters button").forEach(button => {

        button.addEventListener("click", () => {

            document.querySelector(".filters .active")
                .classList.remove("active");

            button.classList.add("active");

            activeCategory = button.dataset.category;

            displayProducts();

        });

    });

    // SEARCH

    document.getElementById("search").addEventListener("input", displayProducts);

    // CLOSE WHEN CLICKING OUTSIDE MODAL

    document.getElementById("overlay").addEventListener("click", event => {

        if (event.target.id === "overlay") {
            closeModal();
        }

    });

    // CLOSE WITH ESCAPE KEY

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });

    // DISPLAY PRODUCTS
    function displayProducts(products) {

        const grid = document.getElementById("product-grid");
        const search = document.getElementById("search")
            .value.toLowerCase();
        
        grid.innerHTML = "";
        
        const filtered = products.filter(product => {
        
            const matchesCategory =
                activeCategory === "All Items" ||
                product.category === activeCategory;
        
            const matchesSearch =
                product.name.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search);
        
            return matchesCategory && matchesSearch;
        
        });
        
        document.getElementById("product-count").textContent =
            filtered.length + " products";
        
        document.getElementById("no-results").style.display =
            filtered.length === 0 ? "block" : "none";
        
        filtered.forEach(product => {
        
            const card = document.createElement("div");
        
            card.className = "product-card";
        
            card.innerHTML = `
                <div class="product-image"
                        style="background:${product.color}">
        
                    <img src="${product.image}" 
                    alt="${product.name}"
                    class="product-img">
                </div>
        
                <div class="product-info">
        
                    <div class="category">
                        ${product.category}
                    </div>
        
                    <div class="product-name">
                        ${product.name}
                    </div>
        
                </div>
            `;
        
            card.addEventListener("click", () => {
                openModal(product.id);
            });
        
            grid.appendChild(card);
        
        });
        
    }


    //ENABLE BIDDING
    async function setupBidding(productId) {

        const highestBidElement =
            document.getElementById("highest-bid");
    
        const bidHistoryElement =
            document.getElementById("bid-history");
    
        const bidForm =
            document.getElementById("bid-form");
    
        const bidAmountInput =
            document.getElementById("bid-amount");
    
        // Load highest bid
        const highestBid = await getHighestBid(productId);
    
        highestBidElement.textContent =
            "$" + highestBid.toFixed(2);
    
        // Load bidding history
        const history = await getBidHistory(productId);
    
        bidHistoryElement.replaceChildren();
    
        if (history.length === 0) {
    
            bidHistoryElement.textContent = "No bids yet.";
    
        } else {
    
            history.forEach(bid => {
    
                const entry = document.createElement("div");
    
                entry.textContent =
                    bid.bidder_name + " - $" +
                    Number(bid.amount).toFixed(2);
    
                bidHistoryElement.appendChild(entry);
    
            });
    
        }
    
        // Handle bid submission
        bidForm.onsubmit = async function(event) {

            event.preventDefault();
        
            const submitButton = bidForm.querySelector("button");
        
            const bidderName =
                document.getElementById("bidder-name").value.trim();
        
            const amount =
                Number(bidAmountInput.value);
        
            if (!bidderName || !Number.isFinite(amount) || amount <= 0) {
                alert("Please enter a valid name and bid.");
                return;
            }
        
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        
            try {
        
                const success = await placeBid(
                    productId,
                    bidderName,
                    amount
                );
        
                if (success) {
                    bidForm.reset();
                    await setupBidding(productId);
                }
        
            } finally {
        
                submitButton.disabled = false;
                submitButton.textContent = "Place Bid";
        
            }
        
        };
    
    }

    // OPEN PRODUCT OVERLAY
    function openModal(id) {

        const product = products.find(p => p.id === id);
    
        if (!product) {
            console.error("Product not found:", id);
            return;
        }
    
        selectedProduct = product;
    
        // Product information
        document.getElementById("modal-category").textContent =
            product.category;
    
        document.getElementById("modal-name").textContent =
            product.name;
    
        document.getElementById("modal-description").textContent =
            product.description || "No description available.";

        // Display modal
        document.getElementById("overlay").classList.add("show");
    
        // Load bidding information
        setupBidding(product.id);
    
    }

    //displayProducts();
}


// DONATE PAGE SCRIPT
function donateScript() {
    console.log("Donate page loaded");
}

// CONTACT PAGE SCRIPT
function contactScript() {
    console.log("Contact page loaded");

    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        console.log("Email:", email);
        console.log("Phone:", phone);

        message.textContent = "Thank you! Your information has been received.";
        message.style.color = "green";

        form.reset();
    });
}


// Load homepage automatically
loadPage("home");