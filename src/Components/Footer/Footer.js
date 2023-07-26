import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react';
import LanguageContext from '../../context/languages';
import { footerTranslations } from './FooterLanguages';

function Footer() {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className='mt-5 fixed-bottom'  style={{ backgroundColor: 'rgb(247, 247, 249)' }}>
      <div class="container mt-2">
        <div class="row gy-5">
          <div class="col-md-4">
            <h4 class="logo-text text-dark">{footerTranslations[lang].tmdb}</h4>
            <p>
              {footerTranslations[lang].description}
            </p>
            <div class="social-icons text-dark">
              <a href="https://www.facebook.com/eslamgouda97/">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='mx-2'/>
              </a>
              <a href="https://twitter.com/EslamGo0da">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='mx-2'/>
              </a>

             <a href="https://github.com/EslamGouda97">
                <FontAwesomeIcon icon={faGithub} size="2x" className='mx-2'/>
              </a>
            </div>
          </div>
          <div class="col-md-2">
            <h5 class="title-sm text-dark">{footerTranslations[lang].navigation}</h5>
            <div class="footer-links text-dark">
              <li> <a href="#">{footerTranslations[lang].services}</a></li>
              <li> <a href="#">{footerTranslations[lang].myWork}</a></li>
              <li> <a href="#">{footerTranslations[lang].aboutUs}</a></li>
              <li> <a href="#">{footerTranslations[lang].blog}</a></li>  
            </div>
          </div>
          <div class="col-md-2">
            <h5 class="title-sm text-dark">{footerTranslations[lang].more}</h5>
            <div class="footer-links">
              <li> <a href="#">{footerTranslations[lang].faqs}</a></li>
              <li> <a href="#">{footerTranslations[lang].privacyPolicy}</a></li>
              <li> <a href="#">{footerTranslations[lang].tasks}</a></li>
            </div>
          </div>
          <div class="col-md-2 text-dark">
            <h5 class="title-sm text-dark">{footerTranslations[lang].contact}</h5>
            <div class="footer-links text-dark">
              <p class="mb">{footerTranslations[lang].address}</p>
              <p class="mb-">{footerTranslations[lang].phone}</p>
            </div>
          </div>
          <div class="col-md-2 text-dark">
            <h5 class="title-sm text-dark">{footerTranslations[lang].legal}</h5>
            <div class="footer-links text-dark">
              <li> <a href="#">{footerTranslations[lang].termsOfUse}</a></li>
              <li> <a href="#">{footerTranslations[lang].privacyPolicy}</a></li>
              <li> <a href="#">{footerTranslations[lang].cookiePolicy}</a></li>
            </div>
          </div>
        </div>
        <div class="row justify-content-between ">
            <div class="col-md-6">
              <p class="my-0 text-dark">{footerTranslations[lang].rightsReserved}</p>
            </div>
          </div>
      </div>
     
    
    </footer>
  );
}

export default Footer;