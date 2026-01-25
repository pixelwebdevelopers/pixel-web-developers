
import { useLocation } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Helper function to get correct href
  const getHref = (anchor) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <a href={getHref('#home')} onClick={() => setMobileToggle(false)}>
          Home
        </a>
      </li>
      <li>
        <a href={getHref('#about')} onClick={() => setMobileToggle(false)}>
          About
        </a>
      </li>
      <li>
        <a href={getHref('#service')} onClick={() => setMobileToggle(false)}>
          Services
        </a>
      </li>
      <li>
        <a href={getHref('#project')} onClick={() => setMobileToggle(false)}>
          Projects
        </a>
      </li>
      <li>
        <a href={getHref('#pricing')} onClick={() => setMobileToggle(false)}>
          Pricing
        </a>
      </li>

      <li>
        <a href={getHref('#contact')} onClick={() => setMobileToggle(false)}>
          Contact
        </a>
      </li>
    </ul>
  );
}

