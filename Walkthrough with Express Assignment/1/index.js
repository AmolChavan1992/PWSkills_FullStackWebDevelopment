const express = require("express")

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

app.use("/women", (req, res) => {
    products = [
        {
          "id": 1,
          "name": "Flowy Cami Top",
          "brand": "Sienna Sky",
          "price": 24.99,
          "color": "Blush Pink",
          "size": "Medium",
          "category": "Clothing"
        },
        {
          "id": 2,
          "name": "High-Waisted Skinny Jeans",
          "brand": "Denim & Co.",
          "price": 59.95,
          "color": "Black",
          "size": "28",
          "category": "Clothing"
        },
        {
          "id": 3,
          "name": "Tote Bag",
          "brand": "Wanderlust",
          "price": 39.99,
          "color": "Natural Canvas",
          "size": "Large",
          "category": "Accessories"
        },
        {
          "id": 4,
          "name": "Minimalist Watch",
          "brand": "Muse",
          "price": 99.00,
          "color": "Rose Gold",
          "size": "One Size",
          "category": "Accessories"
        },
        {
          "id": 5,
          "name": "Running Shoes",
          "brand": "Zephyr",
          "price": 74.50,
          "color": "Pink",
          "size": "8.5",
          "category": "Shoes"
        },
        {
          "id": 6,
          "name": "Wrap Dress",
          "brand": "Sienna Sky",
          "price": 42.99,
          "color": "Floral Print",
          "size": "Small",
          "category": "Clothing"
        },
        {
          "id": 7,
          "name": "Cosmetic Bag",
          "brand": "Vanity Bliss",
          "price": 19.95,
          "color": "Metallic Rose",
          "size": "Medium",
          "category": "Accessories"
        },
        {
          "id": 8,
          "name": "Wireless Earbuds",
          "brand": "Harmony",
          "price": 149.00,
          "color": "White",
          "size": "N/A",
          "category": "Accessories"
        },
        {
          "id": 9,
          "name": "Mom Jeans",
          "brand": "Denim & Co.",
          "price": 49.99,
          "color": "Light Wash",
          "size": "30",
          "category": "Clothing"
        },
        {
          "id": 10,
          "name": "Backpack Purse",
          "brand": "Wanderlust",
          "price": 99.95,
          "color": "Black",
          "size": "One Size",
          "category": "Accessories"
        }
      ];

    res.status(200).json({
        success: true,
        data: products
    })
});

app.use("/men", (req, res) => {
    products = [
        {
          "id": 1,
          "name": "Classic Crew Neck T-Shirt",
          "brand": "Threadborne",
          "price": 19.99,
          "color": "Navy",
          "size": "Medium",
          "category": "Clothing"
        },
        {
          "id": 2,
          "name": "Slim Fit Dress Pants",
          "brand": "Tailored by James",
          "price": 79.50,
          "color": "Charcoal",
          "size": "32x30",
          "category": "Clothing"
        },
        {
          "id": 3,
          "name": "Leather Weekender Bag",
          "brand": "Nomad",
          "price": 249.99,
          "color": "Brown",
          "size": "One Size",
          "category": "Accessories"
        },
        {
          "id": 4,
          "name": "Digital Chronograph Watch",
          "brand": "Aviator",
          "price": 129.95,
          "color": "Black",
          "size": "N/A",
          "category": "Accessories"
        },
        {
          "id": 5,
          "name": "Running Sneakers",
          "brand": "Apex",
          "price": 84.50,
          "color": "Blue",
          "size": "10.5",
          "category": "Shoes"
        },
        {
          "id": 6,
          "name": "Casual Button-Up Shirt",
          "brand": "Hemlock & Hide",
          "price": 34.99,
          "color": "Light Blue",
          "size": "Large",
          "category": "Clothing"
        },
        {
          "id": 7,
          "name": "Dopp Kit",
          "brand": "Travelwell",
          "price": 24.95,
          "color": "Black",
          "size": "Small",
          "category": "Accessories"
        },
        {
          "id": 8,
          "name":  "Wireless Headphones",
          "brand": "Harmony",
          "price": 199.00,
          "color": "Space Gray",
          "size": "N/A",
          "category": "Accessories"
        },
        {
          "id": 9,
          "name": "Slim Chino Pants",
          "brand": "Tailored by James",
          "price": 64.99,
          "color": "Khaki",
          "size": "30x32",
          "category": "Clothing"
        },
        {
          "id": 10,
          "name": "Weekend Backpack",
          "brand": "Nomad",
          "price": 179.95,
          "color": "Navy",
          "size": "One Size",
          "category": "Accessories"
        }
      ];

    res.status(200).json({
        success: true,
        data: products
    })
});

app.use("/other", (req, res) => {
    res.status(400).json({
        success:false,
        message: "Page not found"
    })
});

app.use("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Men & Women Dummy Data"
    });
});

