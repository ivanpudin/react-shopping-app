import axios from "axios"
const api = 'https://fakestoreapi.com/products/'

const products = await axios.get(api)

const ProductsList = () => {

    console.log(products)

    return (
        <div>
            <div>Products will be here</div>
        </div>
    )
}

export default ProductsList;