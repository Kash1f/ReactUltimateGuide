
import {useSelector} from 'react-redux'

const Cart = () => {
 
  const items = useSelector(state=>state)
  return (
    <div className="alert alert-success">
      <h3 className="text-center">Total Items: 5 (Rs. 3,000)/-</h3>
    </div>
  );
};

export default Cart;
