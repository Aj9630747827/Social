import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-top py-3 mt-auto bg-light w-100 sticky-footer">
      <div className="container-fluid">
        <div className="row align-items-center text-center text-md-start">
          {/* Left */}
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <span className="text-muted">© 2025 Social, Inc</span>
          </div>

          {/* Right */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
            <a href="#" className="text-muted fs-5">
              <FaInstagram />
            </a>

            <a href="#" className="text-muted fs-5">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
