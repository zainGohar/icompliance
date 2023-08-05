import "./Body.css";
import Image from "next/image";
import HeroImage from "@/public/assets/Images/main.png";
import Link from "next/link";
import { Form } from "react-bootstrap";
const SaasSec = () => {
  return (
    <div className="main_content mb-5 pb-5" id="mainsec">
      <div className="content_class pt-5 mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
        <h1 className="heading_top text-center">
          Get Insights From Your <br /> Documents In Seconds
        </h1>
        <p className="w-75  text-center keyfeatures">
          AskDocs is your digital assistant that research and get actionable
          insights from lengthy documents.
        </p>



{/* 
        <form className="pill-form border py-2 px-3 rounded-5">
<select className="pill-dropdown mr-3 bg-transparent" placeholder="Select Region">
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
</select>
<Link href={"https://app.askdocs.com/"}>
  <button type="submit" className="pill-button">Submit</button>
  </Link>
</form> */}



        <Link
          href={"https://app.askdocs.com/"}
          className='py-3 px-5  d-flex justify-content-between top_btn'
        >
          <span></span>
          <span>Get Started</span>
          <i class="bi bi-chevron-right "></i>
        </Link>
        <div className="">
        <h1 className="mt-5 text-center">Live demo</h1>
        <h6>Creating a chatbot for <b>Product Hunt</b> by crawling the website and training the AI on its content. I can then embed the chatbot on the website!</h6>
        </div>
        <div className="img-box">
          <video
            width="1250px"
            className="rounded"
            autoplay="autoplay"
            muted
            loop
            controls
          >
            <source src="https://backend.chatbase.co/storage/v1/object/public/chatbase/producthunt-demo.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SaasSec;
