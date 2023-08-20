// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Marketplace{
    string public name;
    uint public totalCount;
    address owner;

    constructor (){
        owner=msg.sender;
        name="Marketplace";
        totalCount=0;

    }

    struct Product{
        string product_name;
        uint256 product_id;
        string product_description;
        uint256 product_price;
        uint256 product_stock;
        string category;
        string image;
        address payable seller;
    }

    struct Seller{
        address account;
        string name;

    }

    mapping(uint256=>Product) public products;

    event productCreated(
        string product_name,
        uint256 product_id,
        string product_description,
        uint256 product_price,
        uint256 product_stock,
        string category,
        string image,
        address seller
    );

    event productPurchased(
        string product_name,
        uint256 product_id,
        uint256 product_stock
    );

    function sellProduct(string memory _name, string memory _description,uint256 _price,uint256 _stock,string memory  _category, string memory _image) public {
        totalCount=totalCount+1;
        
        Product memory product=Product(_name,totalCount,_description,_price,_stock,_category,_image,payable(msg.sender));
        products[totalCount]=product;
        emit productCreated(_name,totalCount,_description,_price,_stock,_category,_image,msg.sender);

    }

    function buyProduct(uint256 id) public payable{
        require(id>0);
        
        Product memory _product=products[id];
        require(_product.product_price<=msg.value);
        require(_product.product_stock>0);

        _product.product_stock=_product.product_stock-1;
        products[id]=_product;
        
        address payable seller=_product.seller;
        seller.transfer(msg.value);
        emit productPurchased(_product.product_name,_product.product_id,_product.product_stock);

        
    }

    function getTotal() public view returns(uint){
        return totalCount;
    }
}
