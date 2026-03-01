import { FiHeart } from 'react-icons/fi';
import { BiCoffeeTogo } from 'react-icons/bi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 Nguyễn Trọng Hồng Phúc. All rights reserved.</p>
        <p className="footer-made">
          Made with <FiHeart className="heart-icon" /> and <BiCoffeeTogo className="coffee-icon" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
