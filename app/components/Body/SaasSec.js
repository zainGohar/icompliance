import './Body.css';
import Image from 'next/image';
import HeroImage from '@/public/assets/Images/main.png'
import Link from 'next/link';
const SaasSec = () => {
    return (
        <div className="main_content mb-5 pb-5" id='mainsec'>
            <div className='content_class pt-5 mt-5 d-flex flex-column justify-content-center align-items-center gap-3'>
                <h1 className='heading_top text-center'>Get Insights From Your <br /> Documents In Seconds</h1>
                <p className='w-75  text-center keyfeatures'>AskDocs is your digital assistant that research and get actionable insights from lengthy documents.</p>
                <Link href={"https://app.askdocs.com/"} className='py-3 px-5  d-flex justify-content-between top_btn'>
                    <span></span>
                    <span>Get Started</span>
                    <i class="bi bi-chevron-right "></i>
                </Link>

                <div className='img-box'>
                    <Image src={HeroImage} className="img-fluid img_edit" />
                </div>
            </div>
        </div>
    )
}

export default SaasSec