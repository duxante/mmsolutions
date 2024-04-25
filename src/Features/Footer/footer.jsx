import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import { MmsLogo } from '../../assets';
import './footer.style.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footerHolder">
      <div className="footerMain">
        <div className="footerLeft footerTogheter">
          <MmsLogo />
          <p>{t('shortAboutCompany')}</p>
          <div className="socialMedia">
            <Facebook
              sx={{
                color: 'orange',
              }}
            />
            <Instagram
              sx={{
                color: 'orange',
              }}
            />
            <Twitter
              sx={{
                color: 'orange',
              }}
            />
            <LinkedIn
              sx={{
                color: 'orange',
              }}
            />
          </div>
        </div>
        <div className="footerMiddle footerTogheter">
          <h2>{t('category')}</h2>
          <p>→ {t('home')}</p>
          <p>→ {t('about')}</p>
          <p>→ {t('services')}</p>
          <p>→ {t('news')}</p>
          <p>→ {t('contact')}</p>
        </div>
        <div className="footerRight footerTogheter">
          <h2>{t('question')}</h2>
          <div className="smallIcons">
            <MapIcon
              sx={{
                color: 'orange',
              }}
            />{' '}
            <p>{t('belgrade')}</p>
          </div>
          <div className="smallIcons">
            <LocalPhoneIcon
              sx={{
                color: 'orange',
              }}
            />{' '}
            <p>+381 65 352 4125</p>
          </div>
          <div className="smallIcons">
            <SendIcon
              sx={{
                color: 'orange',
              }}
            />{' '}
            <p>marija.milicevic@mmsolutions.rs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
