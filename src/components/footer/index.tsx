const Footer = () => {
  return (
    <footer className="bg-black pb-8">
      <div className="mx-auto w-full container py-6 lg:pb-0 lg:pt-20 z-1">
        {/* Social Links */}
        {/* <div className="px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 text-white">
            {["Facebook", "Twitter", "Youtube", "Instagram"].map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-start space-x-2 border border-gray-700 p-4"
              >
                <span className="text-sm font-semibold">{platform}</span>
                <span className="text-lg font-bold">→</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Footer Links */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-gray-700 text-white">
          {/* About Us */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Pricing</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Community */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>Forum</li>
              <li>Events</li>
              <li>Partners</li>
              <li>Affiliates</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Press */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Press</h3>
            <ul className="space-y-2 text-sm">
              <li>Investors</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>


        {/* Footer Bottom */}
        <div className=" sm:flex sm:items-center sm:justify-between text-gray-500 text-sm mt-8">
          <span className="block text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <a href="apollocode.io" className="hover:underline">
              Bostex™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex justify-center sm:justify-start mt-4 sm:mt-0 space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              aria-label="Twitter"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
