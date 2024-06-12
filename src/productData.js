import Prod1 from './Images/prod1.jpeg';
import Prod2 from './Images/prod2.jpeg';
import Prod3 from './Images/prod3.jpeg';
import Prod4 from './Images/prod4.jpeg';
import Prod5 from './Images/prod5.jpeg';
import Prod6 from './Images/prod6.jpeg';
import Prod7 from './Images/prod7.jpeg';
import Prod8 from './Images/prod8.jpeg';
import Prod9 from './Images/prod9.jpeg'; // Import the specific image

const products = [
  {
    id: 1,
    name: "Regular Fit T-shirt_ ",
    price: "Rs.1,499.00",
    imageUrl: Prod1, // Use the imported image
    isNewArrival: true,
    colors: ["#000000", "#FFFFFF"],
    description: "A regular fit patterned resort shirt.",
    color:"Brickred"
  },
  {
    id: 2,
    name: "Regular Fit T-shirt1",
    price: "Rs.1,499.00",
    imageUrl: Prod2,
    isNewArrival: true,
    colors: ["#D2691E", "#000000"],
    description: "A loose fit t-shirt for casual wear.",
    color:"Zebra stripes"
  },
  {
    id: 3,
    name: "Regular Fit T-shirt2",
    price: "Rs.1,499.00",
    imageUrl: Prod3,
    isNewArrival: true,
    colors: ["#000000"],
    description: "Comfortable loose fit mesh shorts.",
    color:"Slime"
  },
  {
    id: 4,
    name: "Regular Fit T-shirt3",
    price: "Rs.1,299.00",
    imageUrl: Prod4,
    isNewArrival: false,
    colors: ["#FFFFFF"],
    description: "A stylish slim fit casual shirt.",
    color:"Retro"
  },
  {
    id: 5,
    name: "Regular Fit T-shirt4",
    price: "Rs.2,499.00",
    imageUrl: Prod5,
    isNewArrival: true,
    colors: ["#0000FF", "#000000"],
    description: "Comfortable fit jeans for everyday wear.",
    color:"BrownPunk"
  },
  {
    id: 6,
    name: "Regular Fit T-shirt5",
    price: "Rs.1,999.00",
    imageUrl: Prod6,
    isNewArrival: false,
    colors: ["#808080"],
    description: "A cozy regular fit sweatshirt.",
    color:"Metallica"
  },
  {
    id: 7,
    name: "Regular Fit T-shirt6",
    price: "Rs.999.00",
    imageUrl: Prod7,
    isNewArrival: true,
    colors: ["#FF4500"],
    description: "Athletic fit shorts for active wear.",
    color:"Blackswift"
  },
  {
    id: 8,
    name: "Regular Fit T-shirt7",
    price: "Rs.1,199.00",
    imageUrl: Prod8,
    isNewArrival: false,
    colors: ["#008000", "#FFFFFF"],
    description: "Classic regular fit polo shirt.",
    color:"Stripes"
  },
  {
    id: 9,
    name: "Regular Fit T-shirt8",
    price: "Rs.2,299.00",
    imageUrl: Prod9,
    isNewArrival: true,
    colors: ["#A52A2A"],
    description: "Functional loose fit cargo pants.",
    color:"OG-NYC"
  },
];

export default products;
