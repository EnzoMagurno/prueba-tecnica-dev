
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Pagination from "./Pagination";
import SortOptions from "./SortOptions";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
    const [products, setProducts] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [sortOrder, setSortOrder] = useState('asc');  
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const productsPerPage = 12; 

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts(currentPage, '', sortOrder);
            setProducts(data.products); 
        };
        loadProducts();
    }, [currentPage, sortOrder]); 

    return (
        <div>
            <SortOptions onSortChange={setSortOrder} /> 
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <img src={product.image} alt={product.title} />
                    </div>
                ))}
            </div>
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
