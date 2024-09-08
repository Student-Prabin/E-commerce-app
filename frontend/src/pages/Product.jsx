import { useParams } from 'react-router-dom'

const Product = () => {

  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      Products
    </div>
  )
}
export default Product