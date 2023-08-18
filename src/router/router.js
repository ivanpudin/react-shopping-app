import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import ProductsList from "../ProductsList";
import Product from "../Product";


const router = createBrowserRouter([
    {
      path: "/homepage",
      element: <Homepage />,
    },
    {
      path: "/productslist",
      element: <ProductsList />,
    },
    {
      path: "/product",
      element: <Product />,
    },

  ])

  export default router;