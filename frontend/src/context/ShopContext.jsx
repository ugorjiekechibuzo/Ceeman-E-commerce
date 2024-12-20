import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = "€";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");




  const addToCart = async (itemId, size) => {

    if(!size){
      toast.error("Please select a Product size");
      return
    }
    //  let cartData = {...cartItems};
    let cartData = structuredClone(cartItems);


    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size] = 1;
      }
    } else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token){
      try {
        await axios.post(`${backendUrl}/api/cart/add`, {productId: itemId, size}, {headers: {token}});
      } catch (error) {
        console.log(error);
        toast.error(error.message);

      }
    }
  }

  const getCartCount = () => {

    let totalCount = 0;

    for (const key in cartItems) {
      for (const size in cartItems[key]) {
       try{
        if(cartItems[key][size] > 0){
          totalCount += cartItems[key][size];
        }
       } catch (error) {
        console.log(error);
       }
      }
    }

    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;

    setCartItems(cartData);

    if(token){
      try {
        await axios.post(`${backendUrl}/api/cart/update`, {itemId, size, quantity}, {headers: {token}});

      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }

  }

  const getCartAmount = () => {

    let totalAmount = 0;


    for(const items in cartItems){

      let itemInfo = products.find(product =>  product._id === items);

      if (!itemInfo) {
        console.warn(`Product with ID ${items} not found in products array.`);
        continue; // Skip to the next item if not found
    }

      for(const size in cartItems[items]){

        try {
          if(cartItems[items][size] > 0){
            totalAmount += itemInfo.price * cartItems[items][size];
          }
        } catch (error) {
          console.log(error);

        }
      }
    }

    return totalAmount;

  }

  const getProductsData = async () => {
    try {

      const response = await axios.get(`${backendUrl}/api/product/list`,{withCredentials: true}); 

      if(response.data.success){
        setProducts(response.data.products);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);

    }
  }


 //  to update the cart items from the database when the user logs in
  const getUserCart = async (token) => {
    try {

      const response = await axios.post(`${backendUrl}/api/cart/get`, {}, {headers: {token}});

      if(response.data.success){
        setCartItems(response.data.cartData);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getProductsData();
  }, [])

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems])

 useEffect(() => {
   if(!token && localStorage.getItem("token")){
     setToken(localStorage.getItem("token"));
     getUserCart(localStorage.getItem("token"));
    }
 }, [])




  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCartItems
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
