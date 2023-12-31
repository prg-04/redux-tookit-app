import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';


function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

   useEffect(() => {
     dispatch(getCartItems());
   }, [dispatch]);

   if (isLoading) {
     return (
       <div className="loading">
         <h1>Loading...</h1>
       </div>
     );
   }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
