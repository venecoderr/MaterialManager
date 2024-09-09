const Material = require('../models/Material.js')

const materials = [
  {
    part_name: "PVC Conduit 1/2 inch",
    part_number: "PVC-001",
    description: "1/2 inch PVC conduit used for electrical wiring.",
    quant_in_stock: 200,
    unit: "ft"
  },
  {
    part_name: "PVC Conduit 3/4 inch",
    part_number: "PVC-002",
    description: "3/4 inch PVC conduit used for electrical wiring.",
    quant_in_stock: 150,
    unit: "ft"
  },
  {
    part_name: "MC Cable 12/2",
    part_number: "MC-001",
    description: "Metal-clad 12/2 cable for electrical installations.",
    quant_in_stock: 300,
    unit: "ft"
  },
  {
    part_name: "MC Cable 14/2",
    part_number: "MC-002",
    description: "Metal-clad 14/2 cable for electrical installations.",
    quant_in_stock: 250,
    unit: "ft"
  },
  {
    part_name: "4 Square Box 1-1/2 inch",
    part_number: "4SQ-001",
    description: "1-1/2 inch deep 4 square metal box.",
    quant_in_stock: 100,
    unit: "pieces"
  },
  {
    part_name: "4 Square Box 2-1/8 inch",
    part_number: "4SQ-002",
    description: "2-1/8 inch deep 4 square metal box.",
    quant_in_stock: 80,
    unit: "pieces"
  },
  {
    part_name: "1/2 inch EMT Connector",
    part_number: "EMT-001",
    description: "1/2 inch connector for EMT conduit.",
    quant_in_stock: 500,
    unit: "pieces"
  },
  {
    part_name: "3/4 inch EMT Connector",
    part_number: "EMT-002",
    description: "3/4 inch connector for EMT conduit.",
    quant_in_stock: 400,
    unit: "pieces"
  },
  {
    part_name: "1/2 inch EMT Coupling",
    part_number: "EMT-003",
    description: "1/2 inch EMT conduit coupling.",
    quant_in_stock: 350,
    unit: "pieces"
  },
  {
    part_name: "3/4 inch EMT Coupling",
    part_number: "EMT-004",
    description: "3/4 inch EMT conduit coupling.",
    quant_in_stock: 300,
    unit: "pieces"
  },
  {
    part_name: "Electrical Tape",
    part_number: "TAPE-001",
    description: "Standard black electrical tape.",
    quant_in_stock: 600,
    unit: "rolls"
  },
  {
    part_name: "Wire Nuts (Small)",
    part_number: "WN-001",
    description: "Small wire connectors for joining wires.",
    quant_in_stock: 1000,
    unit: "pieces"
  },
  {
    part_name: "Wire Nuts (Large)",
    part_number: "WN-002",
    description: "Large wire connectors for joining wires.",
    quant_in_stock: 800,
    unit: "pieces"
  },
  {
    part_name: "1/2 inch EMT Conduit",
    part_number: "EMT-005",
    description: "1/2 inch Electrical Metallic Tubing (EMT) conduit.",
    quant_in_stock: 500,
    unit: "ft"
  },
  {
    part_name: "3/4 inch EMT Conduit",
    part_number: "EMT-006",
    description: "3/4 inch Electrical Metallic Tubing (EMT) conduit.",
    quant_in_stock: 400,
    unit: "ft"
  },
  {
    part_name: "1/2 inch PVC Coupling",
    part_number: "PVC-003",
    description: "1/2 inch coupling for PVC conduit.",
    quant_in_stock: 250,
    unit: "pieces"
  },
  {
    part_name: "3/4 inch PVC Coupling",
    part_number: "PVC-004",
    description: "3/4 inch coupling for PVC conduit.",
    quant_in_stock: 200,
    unit: "pieces"
  },
  {
    part_name: "Duplex Receptacle",
    part_number: "REC-001",
    description: "Standard 15A 120V duplex receptacle.",
    quant_in_stock: 150,
    unit: "pieces"
  },
  {
    part_name: "Toggle Switch",
    part_number: "SW-001",
    description: "Standard 15A 120V single pole toggle switch.",
    quant_in_stock: 120,
    unit: "pieces"
  },
  {
    part_name: "Grounding Clamp 1/2 inch",
    part_number: "GND-001",
    description: "1/2 inch grounding clamp for conduit.",
    quant_in_stock: 300,
    unit: "pieces"
  }
]
;

// const products = [
//     { name: "Product 1", description: "Description for Product 1", price: 10, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 2", description: "Description for Product 2", price: 20, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 3", description: "Description for Product 3", price: 30, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 4", description: "Description for Product 4", price: 40, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 5", description: "Description for Product 5", price: 50, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 6", description: "Description for Product 6", price: 60, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 7", description: "Description for Product 7", price: 70, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 8", description: "Description for Product 8", price: 80, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 9", description: "Description for Product 9", price: 90, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 10", description: "Description for Product 10", price: 100, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 11", description: "Description for Product 11", price: 110, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 12", description: "Description for Product 12", price: 120, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 13", description: "Description for Product 13", price: 130, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 14", description: "Description for Product 14", price: 140, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 15", description: "Description for Product 15", price: 150, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 16", description: "Description for Product 16", price: 160, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 17", description: "Description for Product 17", price: 170, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 18", description: "Description for Product 18", price: 180, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 19", description: "Description for Product 19", price: 190, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 20", description: "Description for Product 20", price: 200, artisan: null, imageURL: "https://placehold.co/400" },
//     { name: "Product 21", description: "Description for Product 21", price: 210, artisan: null, imageURL: "https://placehold.co/400" },
// ];

async function seedDatabase() {
    try {
      // // Create users
      // const createdUsers = await User.insertMany(users);

      // // Assign artisans to products
      // for (let i = 0; i < products.length; i++) {
      // products[i].artisan = createdUsers[i % 7]._id;
      // }

        // Create products
      await Material.insertMany(materials);

      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
}

module.exports = seedDatabase