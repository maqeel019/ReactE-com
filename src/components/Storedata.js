function setOrder(objects) {
  objects.forEach((obj, index) => {
    obj.id = (index + 1).toString();
  });
}

const storeData = [
 
 

  {
    image: "images/Store/shirts3.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 101 ,
    feature: true,
    
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 199 ,
    feature: true,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts2.jpeg",
    intro: "Mens Shirts",
    brand : "AKING",
    type: "Shirt",
    price: 100,
    
  },
  {
    image: "images/Store/shirts5.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 101,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts5.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 67,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "AKING",
    type: "Shirt",
    price: 124,
    
  },
  {
    image: "images/Store/watch1.jpeg",
    intro: "Mens Hand Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 65,
    feature: true, 
  },

  {
    image: "images/Store/shirts5.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 55,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts2.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 111,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 99,
    
  },
  {
    image: "images/Store/shirts5.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 93,
    isAddToCart: false,
  },
  
  {
    image: "images/Store/shirts5.jpeg",
    intro: "Mens Shirts",
    brand : "A2S19",
    type: "Shirt",
    price: 67,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "AKING",
    type: "Shirt",
    price: 124,
    
  },
  {
    image: "images/Store/watch3.jpeg",
    intro: "Mens Hand Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 65,
    feature: true,
    
  },
 {
    image: "images/Store/shirts1.jpeg",
    intro: "Mens Shirts",
    brand : "AAKs",
    type: "Shirt",
    price: 23,
    feature: true,
    
  },
  {
    image: "images/Store/shirts2.jpeg",
    intro: "Mens Shirts",
    brand : "AAKs",
    type: "Shirt",
    price:  34,
    feature: true,
    
  },
  {
    image: "images/Store/shirts3.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 101 ,
    feature: true,
    
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 199 ,
    feature: true,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch5.jpeg",
    intro: "Mens Hand Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 65,
   
    
  },
  {
    image: "images/Store/watch2.jpeg",
    intro: "Mens Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 78,
    feature: true,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch3.jpeg",
    intro: "Mens Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 99,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch4.jpeg",
    intro: "Mens Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 67,
    feature: true,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch1.jpeg",
    intro: "Mens Watch",
    brand : "AAKs",
    type: "Shirt",
    price: 67,
    isAddToCart: false,
  },

  {
    image: "images/Store/Watch3.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 56,
    isAddToCart: false,
  },
  
  {
    image: "images/Store/Watch5.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 85,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch1.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 88,
    isAddToCart: false,
  },
  {
    image: "images/Store/shirts3.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 101 ,
    feature: true,
    
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 199 ,
    feature: true,
    isAddToCart: false,
  },
 
  {
    image: "images/Store/watch3.jpeg",
    intro: "Mens Watch",
    brand : "Ak019",
    type: "Shirt",
    price: 94,
    feature: true,
    
  },
  {
    image: "images/Store/Watch4.jpeg",
    intro: "Mens Watch",
    brand : "Ak019",
    type: "Shirt",
    price: 97,
    feature: true,
    
  },
  {
    image: "images/Store/shirts3.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 101 ,
    feature: true,
    
  },
  {
    image: "images/Store/shirts4.jpeg",
    intro: "Mens Shirts",
    brand : "Ak019",
    type: "Shirt",
    price: 199 ,
    feature: true,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch5.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch1.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 133,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch5.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    feature: true,
    
  },
  {
    image: "images/Store/Watch2.jpeg",
    intro: "Mens Watch",
    brand : "Ak019",
    type: "Shirt",
    price: 109,
    feature: true,
    
  },
  {
    image: "images/Store/Watch5.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 55,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch4.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    isAddToCart: false,
  },
  {
    image: "images/Store/watch1.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    
  },
  {
    image: "images/Store/Watch2.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch3.jpeg",
    intro: "Mens Watch",
    brand : "Ak019",
    type: "Shirt",
    price: 99,
    feature: true,
    
  },
  {
    image: "images/Store/watch4.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 66,
    isAddToCart: false,
  },
  {
    image: "images/Store/Watch5.jpeg",
    intro: "Mens Watch",
    brand : "Ak019",
    type: "Shirt",
    price: 69,
    feature: true,
    
  },
  {
    image: "images/Store/watch3.jpeg",
    intro: "Mens Watch",
    brand : "AKING",
    type: "Shirt",
    price: 99,
    isAddToCart: false,
  },
];
setOrder(storeData);

export default storeData;
