import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Pagination from "./Pagination";
import SortOptions from "./SortOptions";
import ProductDetail from "./ProductDetail";
import Spinner from "./Spinner";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 12;

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(currentPage, productsPerPage, sortOrder);
      setProducts(data);
    };
    loadProducts();
  }, [currentPage, sortOrder]);

  return (
    <div>
      <SortOptions onSortChange={setSortOrder} />
      {
        products?.length ?
        (
          <div>
          {products.map(product => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))}
          </div>
        ) 
        : 
        (
          <Spinner />
        )
      }

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={setCurrentPage}
      />
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </div>
  );
};

export default ProductList;
