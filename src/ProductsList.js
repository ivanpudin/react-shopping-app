import axios from "axios";
import Product from "./Product";
const api = 'https://fakestoreapi.com/products/';

const { data: products } = await axios.get(api)

const ProductsList = () => {

    return (
        <div className="ProductsList">
            <h1>Browse items</h1>
            <div className="List">
            {
                Array.isArray(products) && products.map((product) => <Product key={product?.id} {...product} />) // ? - skip rendering if there is no such component
            }
            </div>
        </div>
    )
}

export default ProductsList;