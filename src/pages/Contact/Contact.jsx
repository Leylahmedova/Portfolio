import ContactDetail from "../../components/ContactDetail/ContactDetail";
import ContactForm from "../../components/ContactForm/ContactForm";
import Styles from "./contact.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Contact = () => {
  const contactDetails = [
    {
      logo: "/phone-icon.png",
      name: "Phone",
      value: "+994775352954",
    },
    {
      logo: "/mail-icon.png",
      name: "Email",
      value: "leyla.ehmedova220w@gmail.com",
    },
    {
      logo: "/location-icon.png",
      name: "Address",
      value: "Baku, Azerbaijan",
    },
  ];
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-once="true" className={Styles.contact__page}>
      <div className={Styles.contact__form}>
        <ContactForm />
      </div>
      <div className={Styles.contact__detail}>
        {contactDetails.map((detail,index) => {
          return (
            <ContactDetail
              key={index}
              logo={detail.logo}
              name={detail.name}
              value={detail.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
