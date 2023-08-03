import './Footer.css'
import Image from 'next/image';
import Logo from '@/public/assets/Images/logo.png'

const Footer = () => {
    return (
        <div className="footer py-3 ">
            <div className='container'>
                <Image src={Logo} alt='logo_web' className='' width={150} height={50} />
            </div>
        </div>
    )
}

export default Footer