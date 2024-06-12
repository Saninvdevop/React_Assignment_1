import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../productData"; // Import product data

const Analytics = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.scrollContainer}>
      <div style={styles.container}>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} style={styles.link}>
            <div
              style={{
                ...styles.card,
                ...(hovered === product.id ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={product.imageUrl} alt={product.name} style={styles.image} />
              <div style={styles.info}>
                <h3 style={styles.name}>{product.name}</h3>
                <p style={styles.price}>{product.price}</p>
                {product.isNewArrival && <p style={styles.newArrival}>New Arrival</p>}
                <div style={styles.colors}>
                  {product.colors.map((color, index) => (
                    <span key={index} style={{ ...styles.colorDot, backgroundColor: color }}></span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  scrollContainer: {
    height: '100vh',
    overflowY: 'scroll',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
    top: '-800px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    width: '300px',
    margin: '50px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    right: '-80px',
    transition: 'box-shadow 0.3s ease-in-out', // Add transition for smooth effect
  },
  cardHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow effect on hover
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  info: {
    padding: '10px',
  },
  name: {
    fontSize: '18px',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    color: '#333',
  },
  newArrival: {
    fontSize: '14px',
    color: '#FF0000',
  },
  colors: {
    display: 'flex',
    marginTop: '10px',
  },
  colorDot: {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    marginRight: '5px',
  },
};

export default Analytics;
