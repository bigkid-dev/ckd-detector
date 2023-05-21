import '../../App.css'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="logo">
                <p className='logo-text'>Ceenima</p>
            </div>
            <div className="navigations">
                <a>Get Tickets</a>
                <a>Membership</a>
                <a>Booking & Events</a>
                <a>About Us</a>
                <a>Prices & Promos</a>
            </div>
            <div className='routes'>
                <Login/>
                <Cart/>
            </div>
        </div>
    )
}

const Cart = () =>{
    return(
        <div className='cart'>
            <div >
                <img></img>
            </div>
            <div>
                <p>Cart</p>
            </div>
        </div>
    )
}

const Login = () =>{
    return(
    <div className ='signIn'>
        <p className='sign-in'>Sign In</p>
    </div>
    )
}

export default Navbar