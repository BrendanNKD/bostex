import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pb-8">
      <div className="mx-auto w-full container py-6 lg:pb-0 lg:pt-20 z-1">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-gray-700 text-white">
          {/* About Us */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              {["Introduction", "Contact", "Careers", "Linkedin"].map((item, index) => (
                <li key={index}>
                  <Link href="/comingsoon" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              {["Access Control", "Smart Locks", "Racks Management"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="/comingsoon" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Community */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              {["Aviation", "Data Centers", "Government Agency", "Health Care", "Education"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="/comingsoon" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Others */}
          <div className="border border-gray-700 p-4">
            <h3 className="text-gray-400 text-sm uppercase mb-4">Others</h3>
            <ul className="space-y-2 text-sm">
              {["PDPA", "Terms of Use", "Privacy Policy", "Cookie Policy", "Legal"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={item === "PDPA" ? "/pdpa" : "/comingsoon"}
                      className="hover:underline"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between text-gray-500 text-sm mt-8">
          <span className="block text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <a href="apollocode.io" className="hover:underline">
              Bostex™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
