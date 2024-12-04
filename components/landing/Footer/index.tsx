import Link from 'next/link';

const footerLinks = ['Home', 'Features', 'Pricing', 'Testimonials'];

function Footer() {
  return (
    <footer className="px-5 lg:px-10 py-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-y-2 md:items-center flex-col md:flex-row justify-between gap-x-5">
          <div className="flex items-center gap-x-2">
            <h2 className="text-primary font-bold text-base">Orange <span
              className="text-black">Bandit</span></h2>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex md:items-center flex-col md:flex-row justify-center gap-x-10 text-zinc-700">
              {footerLinks.map((footerLink, index) => (
                <li key={index} className="flex-wrap">
                  <Link
                    href="#"
                    className="hover:text-foreground font-medium text-sm hover:underline hover:underline-offset-4"
                  >
                    <span>{footerLink}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
