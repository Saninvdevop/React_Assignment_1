import React from "react";
import { useParams } from "react-router-dom";
import products from "../productData"; // Import the product data
import "./pd.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={styles.detailsContainer}>
      <nav style={styles.breadcrumb}>
        <a href="/" style={styles.breadcrumbLink}>Innover.com</a> / <a href="/" style={styles.breadcrumbLink}>Men</a> / <a href="/" style={styles.breadcrumbLink}>Shirts</a> / <a href="/" style={styles.breadcrumbLink}>Casual Shirts</a> / <span>{product.name}</span>
      </nav>
      <div style={styles.content}>
        <div style={styles.imageSection}>
          <img src={product.imageUrl} alt={product.name} style={styles.mainImage} />
        </div>
        <div style={styles.infoSection}>
          <h1 style={styles.productName}>{product.name}</h1>
          <p style={styles.mrp}>MRP Inclusive of all taxes</p>
          <p style={styles.price}>{product.price}</p>
          <p>{product.description}</p>
          <p style={styles.color}>{product.color}</p>
          <div style={styles.sizes}>
            <h3>Sizes</h3>
            <div>
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <button key={size} style={styles.sizeButton}>{size}</button>
              ))}
            </div>
          </div>
          <a href="#" style={styles.sizeGuideLink}>Size Guide</a>
          <button style={styles.notifyButton}>NOTIFY ME</button>
          <p>Not available in stores</p>
          <p>Delivery Time: 2-7 days</p>
          <h3>Delivery and Payment</h3>
          <p>Details about delivery and payment.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  detailsContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  breadcrumb: {
    position:"relative",
    right:"-500px",
    top:"-810px",
    fontSize: "14px",
    marginBottom: "20px",
  },
  breadcrumbLink: {
    textDecoration: "none",
    color: "#000",
    position:"relative",

    
  },
  content: {
    
    display: "flex",
    justifyContent: "space-between",
  },
  imageSection: {
    position:"relative",
    top:"100px",
    right:"-300px",
    zIndex:"100",
    
    justifyContent: "center",
  },
  mainImage: {
    width: "500px",
   position:"relative",
   top:"-900px",
    maxWidth: "400px",
    height: "auto",
  },
 
  infoSection: {
    position:"relative",
    right:"300px",
    flex: 1,
    padding: "20px",
  },
  productName: {
    position:"relative",
    left:"275px",
    top:"-300px",
    fontSize: "24px",
    margin: "10px 0",
    zIndex:"999",
  },
  price: {
    position:"relative",
    top:"-680px",
    right:"-790px",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  sizes: {
    margin: "20px 0",
    position:"relative",
    top:"-650px",
    right:"-790px",
  },
  sizeButton: {
    
    padding: "10px",
    margin: "5px",
    border: "1px solid #ccc",
    background: "none",
    cursor: "pointer",
  },
  sizeGuideLink: {
    position:"relative",
    top:"-600px",
    textDecoration: "underline",
    color: "#000",
    display: "block",
    margin: "10px 0",
    right:"-795px",
  },
  notifyButton: {
    position:"relative",
    top:"-600px",
    right:"-790px",
    padding: "10px 20px",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    margin: "20px 0",
  },
  color: {
    position:"relative",
    top:"-690px",
    fontSize: "16px",
    fontWeight:"400",
    right:"-791px",
   
   
  },
  mrp: {
    position:"relative",
    top:"-700px",
    color:"grey",
    right:"-785px",
  },

};

export default ProductDetails;
