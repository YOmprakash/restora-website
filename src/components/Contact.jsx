import { CONTACT } from "../constants";
const Contact = () => {
  return (
    <section
      className="container mx-auto
     py-16 px-10 lg:px-16"
    >
      <h1 className="text-3xl text-center lg:text-4xl mb-8">Contact Us</h1>
      <div className="text-neutral-400">
        {CONTACT.map((contact) => (
          <p
            key={contact.key}
            className=" border-b-2 border-neutral-700 border-dotted text-center my-20 text-2xl lg:text-3xl pb-20 tracking-tighter"
          >
            {contact.value}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Contact;
