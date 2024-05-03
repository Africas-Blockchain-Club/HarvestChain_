// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


contract AgriculturalMarketplace {

    address public contractOwner; // The contract owner who collects the fees
    uint256 public listingFee = 10; // Listing fee, goes to contract owner
    uint256 productCount = 0; // Initialize the product counter



    constructor() {
        contractOwner = msg.sender; // Set the contract owner to the person who deployed the contract
    }
    struct Product {
        bytes32 productID; //Unique product Id
        string name; // Name of the product
        uint256 price; // Price of product
        uint256 quantity; // Quantity available
        address owner; // Owner (seller) of the product
        string description; // Product description Tina@8462
    }


    mapping(bytes32 => Product) public products; // Store all products by ID
    bytes32[] productIDs;



    function generateUUID() private view returns (bytes32) {
        // Combines various elements to create a unique identifier
        return keccak256(abi.encodePacked(
            block.timestamp,
            block.prevrandao,
            block.number,
            msg.sender,
            productCount
        )); 
    }


    // Function to list a new product
    function listProduct(
        string memory name, 
        uint256 price, 
        uint256 quantity,
        string memory description
        // )  public payable {
        // bytes32 productID = keccak256(
        //     abi.encodePacked(name, price, msg.sender)
        // );
        ) public payable {
        require(price > 0, "Price must be greater than zero");

        bytes32 productID = generateUUID(); // Generate a UUID for the product
        
        require(msg.value == listingFee, "Listing fee is required"); // Check if the correct fee was paid
        require(price > 0, "Product price must be greater than zero"); // Ensure the price is greater than zero


        // Create a new Product and store it in the mapping with its productID
        products[productID] = Product(
            productID,
            name,
            price,
            quantity,
            msg.sender,
            description
        );

        productCount++; // Increment the product count after successful listing
        productIDs.push(productID); // Stores the product IDs in in a list


        payable(contractOwner).transfer(listingFee); // Send the listing fee to the contract owner
            }
        
    


    // Function for buyers to buy a product
    function buyProduct(bytes32 productId, uint256 quantity) public payable {
        Product storage product = products[productId];
        require(product.quantity >= quantity, "Not enough quantity available");
        require(msg.value == product.price * quantity, "Incorrect payment");

        // Transfer payment to the seller
        payable(product.owner).transfer(msg.value);

        // Reduce the quantity available
        product.quantity -= quantity;
    }



    // Function to check the quantity of a product
    function checkInventory(bytes32 productId) public view returns (uint256) {
        Product storage product = products[productId]; // Find the product by its ID
        return product.quantity; // Return the quantity left
        }


    // Function to cancel a product listing
    function cancelProduct(bytes32 productId) public {
        Product storage product = products[productId];
        require(msg.sender == product.owner, "Only the owner can cancel"); // Only the seller can cancel
        delete products[productId]; // Remove the product from the market
        productId = 0;

    
    }



    // Function to update product details
    function updateProduct(bytes32 productId, uint256 newPrice, uint256 newQuantity, string memory newDescription) public {
        Product storage product = products[productId];
        require(msg.sender == product.owner, "Only the owner can update"); // Only the seller can update
        product.price = newPrice; // Update the price
        product.quantity = newQuantity; // Update the quantity
        product.description = newDescription; // Update the description
        }
  


     function getProducts() public view returns (Product[] memory) {
        uint256 validCount = 0;

        // First, count valid products to create an array of the correct size
        for (uint256 i = 0; i < productIDs.length; i++) {
            if (products[productIDs[i]].price > 0 && bytes(products[productIDs[i]].name).length > 0) {
                validCount++;
            }
        }

        // Create a memory array with the exact size of valid products
        Product[] memory productList = new Product[](validCount);

        uint256 index = 0;

        // Fill the memory array with valid products
        for (uint256 i = 0; i < productIDs.length; i++) {
            if (products[productIDs[i]].price > 0 && bytes(products[productIDs[i]].name).length > 0) {
                productList[index] = products[productIDs[i]];
                index++;
            }
        }

        return productList;
    }
 




    // Function to get all productIds
    function getAllProductIds() public view returns (uint256[] memory) {
    uint256[] memory productIds = new uint256[](productCount); // Create an array for all productIds
    for (uint256 i = 1; i <= productCount; i++) { // Loop through all products
        productIds[i - 1] = i; // Add each productId to the array
    }
    return productIds; // Return the array of productIds
    }



}
