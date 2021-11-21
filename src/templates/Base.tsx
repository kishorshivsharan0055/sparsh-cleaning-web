import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import ReactWhatsapp from "react-whatsapp";
import { PHONE_NO } from '../utils/contants';


const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />

    <div
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
          color: "RGB(255, 255, 255)",
          borderRadius: 20,    
          // boxShadow:  "1px 1px 1px 1px #9E9E9E",     
          backgroundColor: "white",          
        }}
        className="shadow"
      >
        <ReactWhatsapp
          number={`+91${PHONE_NO}`}
          children={
            <div className="flex p-2">
              <img src="whatsapp.png" className="h-6 w-6 mr-2" alt="" />
              <div className="text-gray-900 font-semibold">Chat with Us</div>
            </div>
          }
        />
      </div>
  </div>
);

export { Base };
