import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-black border-t-8 border-black"
      style={{ backgroundColor: "var(--color-yellow)" }}
    >
      <div className="container-max px-0">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-extrabold mb-4 uppercase tracking-widest text-black">
                Frostwood Labs, LLC
              </h3>
              <p className="text-lg font-bold mb-4 text-black">
                Custom software development and digital solutions.
              </p>
              <div className="space-y-2">
                <p className="text-black font-bold">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hello@frostwoodlabs.com"
                    className="hover:underline text-black font-extrabold"
                  >
                    hello@frostwoodlabs.com
                  </a>
                </p>
                <p className="text-black font-bold">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+13074522403"
                    className="hover:underline text-black font-extrabold"
                  >
                    +1 (307) 452-2403
                  </a>
                </p>
                <p className="text-black font-bold">
                  <strong>Registered Office:</strong>{" "}
                  <span role="img" aria-label="pin">
                    📍
                  </span>{" "}
                  75 E 3rd St, Ste 7, Sheridan, WY 82801
                </p>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-extrabold mb-4 uppercase tracking-widest text-black">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-black font-bold uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-black font-bold uppercase">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-black font-bold uppercase"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h3 className="text-xl font-extrabold mb-4 uppercase tracking-widest text-black">
                Legal
              </h3>
              <p className="text-lg font-bold mb-4 text-black">
                <strong>Legal entity name (D-U-N-S):</strong> Frostwood Labs,
                LLC
              </p>
              <p className="text-lg font-bold mb-4 text-black">
                <strong>D-U-N-S:</strong> 119478037
              </p>
              <p className="text-lg font-bold mb-4 text-black">
                <a
                  href="https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=196038014227126004245172030113091158227120026048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline font-extrabold underline underline-offset-4 decoration-black"
                >
                  View our Wyoming business registration
                </a>
              </p>
              <p className="text-black font-bold">
                © {new Date().getFullYear()} Frostwood Labs, LLC. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
