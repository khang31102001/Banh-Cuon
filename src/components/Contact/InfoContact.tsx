import { Clock, MapPin, Phone } from "lucide-react";
import FormContact from "./FormContact";
import { useLanguage } from "@/Contexts/LanguageContext";
import { Media } from "@/assets/Media";

const InfoContact = ()=> {
    const {t} = useLanguage();
    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="secondary-heading text-gray-900 mb-6">{t('common.contact')}</h2>
            
            <div className="space-y-4">
              <div className="contact-info-item">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="cursor-pointers">
                  <a onClick={()=>{
                    const scrollToMap= document.getElementById('map');
                    if(scrollToMap){
                      scrollToMap.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="cursor-pointer"
                  >
                    {t('contact.address')}
                  </a>
                </span>
              </div>
              <div className="contact-info-item">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="cursor-pointers">
                  <a href="tel:028 3820 0584 " >
                    +84 028 3820 0584 
                  </a>

                </span>
              </div>
              <div className="contact-info-item">
                <Clock className="h-5 w-5 text-red-500" />
                <span className="cursor-pointers">
                  <a href="https://maps.app.goo.gl/oeAyzjwaQS7A3kTv9" target="_blank" rel="noopener noreferrer">
                  {t('contact.hours')}
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="secondary-heading text-grey-900 mb-6">{t('contact.orderOnline')}</h2>
            <div className="flex flex-col items-center">
              <p className="mb-4 text-muted-foreground">{t('contact.scanQR')}</p>
              <div className="bg-white p-2 rounded shadow-md">
                <img 
                  src={Media.QRcode}
                  alt="ShopeeFood QR Code "
                  className="w-40 h-40"
                />
              </div>
              <div className="mt-6">
                <a
                  href="https://shopeefood.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  {t('common.orderNow')}
                </a>
              </div>
            </div>
          </div>
        </div>
        
       {/* /// contact */}
       <FormContact/>

      </div>
    );
}

export default InfoContact;