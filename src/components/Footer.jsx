import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <section className="text-white mb-8 mt-6">
      <div className="flex items-center justify-center gap-8 ">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <a href={link.href} key={link.key} className={link.className}>
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-center mt-4 tracking-tighter text-neutral-500">
        &copy;compileTab. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
