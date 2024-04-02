import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';
import './footer.style.css';
import { MmsLogo } from '../../assets';

const Footer = () => {
  return (
    <div className="footerHolder">
      <div className="footerMain">
        <div className="footerLeft footerTogheter">
          <MmsLogo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ipsum dolorem, sunt consequatur debitis, adipisci quos sint soluta
            qui et consequuntur reprehenderit dolores harum vitae eos totam
            voluptatem commodi iste.
          </p>
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
          <h2>Category</h2>
          <p>→ Home</p>
          <p>→ About</p>
          <p>→ Services</p>
          <p>→ News</p>
          <p>→ Contact</p>
        </div>
        <div className="footerRight footerTogheter">
          <h2>Have A Question?</h2>
          <div className="smallIcons">
            <MapIcon
              sx={{
                color: 'orange',
              }}
            />{' '}
            <p>Beograd, Srbija</p>
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
