const Footer = () => {
  return (
    <footer className="footer p-10 bg-pink-500 text-white text-neutral-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="bg-white-hover font-semibold">Branding</a>
        <a className="link link-hover font-semibold">Design</a>
        <a className="link link-hover font-semibold">Marketing</a>
        <a className="link link-hover font-semibold">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover font-semibold">About us</a>
        <a className="link link-hover font-semibold">Contact</a>
        <a className="link link-hover font-semibold">Jobs</a>
        <a className="link link-hover font-semibold">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover font-semibold">Terms of use</a>
        <a className="link link-hover font-semibold">Privacy policy</a>
        <a className="link link-hover font-semibold">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;