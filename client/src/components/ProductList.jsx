import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Pagination from "./Pagination";
import SortOptions from "./SortOptions";
import ProductDetail from "./ProductDetail";
import Spinner from "./Spinner";
import Header from "./Header";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 12;

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(currentPage, productsPerPage, sortOrder);
      setProducts(data);
    };
    loadProducts();
  }, [currentPage, sortOrder]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCartItems(prevItems => [...prevItems, product]);
    setNotificationVisible(true);
  };

  const handleCloseCart = () => {
    setNotificationVisible(false)
  }
  return (
    <>
      <Header onCloseCart={handleCloseCart} notificationVisible={notificationVisible} cartItems={cartItems} />
      <SortOptions onSortChange={setSortOrder} />
      {products?.length ? (
        <div className="product-list">
          {products.map((product) =>
            product.stock ? (
              <div key={product.id} onClick={() => handleProductClick(product)}>
                <h2>{product.title}</h2>
                <p>$ {product.price}</p>
                <img src='../public/product.jpg' alt={product.title} />
              </div>
            ) : null
          )}
        </div>
      ) : (
        <Spinner/>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  );
};

export default ProductList;