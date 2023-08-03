import Link from 'next/link'
import './Header.css'

const TopHeader = () => {
    return (
        <div className='header d-flex justify-content-center align-items-center fixed-top'>
            <p className='text-light pt-2 fw-bold text-center top_Text'>🚀Limited Time Offer: Lifetime Deal for 100 Users. <Link className='top_color text-decoration-none' href={"https://app.askdocs.com/pricing?plan=basicmonthly&life_time=true"}>Buy Now</Link></p>
        </div>
    )
}

export default TopHeader