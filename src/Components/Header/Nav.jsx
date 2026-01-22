

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <a href="#home" onClick={() => setMobileToggle(false)}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={() => setMobileToggle(false)}>
          About
        </a>
      </li>
      <li>
        <a href="#service" onClick={() => setMobileToggle(false)}>
          Services
        </a>
      </li>
      <li>
        <a href="#project" onClick={() => setMobileToggle(false)}>
          Projects
        </a>
      </li>
      <li>
        <a href="#pricing" onClick={() => setMobileToggle(false)}>
          Pricing
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setMobileToggle(false)}>
          Contact
        </a>
      </li>
    </ul>
  );
}
