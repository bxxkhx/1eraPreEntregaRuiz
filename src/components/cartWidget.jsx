import Cart from '../assets/cart.svg'
const CartWidget = () =>{
    return (<><div className='flex'>
        <img src={Cart} alt="Cart" />
        <span className='text-rose-950'>(19)</span>
        </div></>)
}
export default CartWidget