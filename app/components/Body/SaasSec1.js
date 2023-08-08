import Image from "next/image"
import HeroImage from '@/public/assets/Images/hero1.png'
import HeroImage1 from '@/public/assets/Images/hero2.png'
import HeroImage2 from '@/public/assets/Images/hero3.png'


export const SaasSec1 = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 style={{ fontSize:"35px", fontWeight:""}} className="  text-center  mt-5 py-3"> Key Features Content</h1>
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center mt-5">
                    <span className="text-primary fw-bold">FAST-TRACK RESEARCH</span>
                    <h1 className="fw-bold text-center text-md-start">Built to do the Heavy <br /> Lifting</h1>
                    <p className="w-75 keyfeatures text-center text-md-start">Upload your lengthy documents (PDF, DOCX, TXT, CSV) and Youtube link.
                        Ask any question and get answers based on the content of
                        your document in no time.</p>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-end position-relative">
                    <Image src={HeroImage} className="img-fluid img_edit" width={500} />
                    <div className="py-2 px-3 card d-flex flex-column  position-absolute border-0 justify-content-center align-items-center gap-2 card_position">
                        <Image src={HeroImage} className="img-rounded" width={50} height={50} />
                        <p className="text-center fw-bold">Your MRR increased by <br /> 20% today.</p>
                        <button className="btn btn-primary rounded-5 py-2 px-4">View Analytics</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5">

                <div className="col-md-6 order-md-1 order-0 col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
                    <span className="text-primary fw-bold text-md-start text-center">ENHANCE YOUR PRODUCTIVITY</span>
                    <h1 className="fw-bold">Automate Searching <br />  Multiple Documents</h1>
                    <p className="w-75 keyfeatures text-center text-md-start">Query multiple documents at once. Import your files, select the folder, and watch as your assistant delivers precise answers
                        to your queries within seconds. And get answers in your language with multilingual support.</p>
                </div>

                <div className="col-md-6 order-md-0 order-1 col-12 d-flex justify-content-center align-items-start position-relative">
                    <Image src={HeroImage1} className="img-fluid img_edit" width={500} />
                    <div className="py-2 px-3 card d-flex flex-column  position-absolute border-0 justify-content-center align-items-center gap-2 card_position_spec">
                        <Image src={HeroImage} className="img-rounded" width={50} height={50} />
                        <p className="text-center fw-bold">Its pay day! Check your <br /> bank account..</p>
                        <button className="btn btn-primary rounded-5 py-2 px-4">View Analytics</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5 pt-5">
                <div className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <span className="text-primary fw-bold">UNCOVER DEEPER KNOWLEDGE</span>
                    <h1 className="fw-bold">Reliable and<br />  Trustworthy </h1>
                    <p className="w-75 keyfeatures text-md-start text-center">Every answer AskDocs provides comes with cited source.
                        Its not just about speed, but also about the accuracy and reliability of the information.</p>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-center align-items-end position-relative">
                    <Image src={HeroImage2} className="img-fluid img_edit" width={500} />
                    <div className="py-2 px-3 card d-flex flex-column  position-absolute border-0 justify-content-center align-items-center gap-2 card_position">
                        <Image src={HeroImage} className="img-rounded" width={50} height={50} />
                        <p className="text-center fw-bold">Its pay day! Check your <br /> bank account..</p>
                        <button className="btn btn-primary rounded-5 py-2 px-4">View Analytics</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
