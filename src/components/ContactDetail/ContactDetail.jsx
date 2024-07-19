import Styles from "./contactDetail.module.scss";

const ContactDetail = ({ logo, name, value }) => {

  return (
    <div   className={Styles.contact__detail__div}>
      <div className={Styles.contact__detail__logo}>
        <img src={logo} alt={name} />
      </div>
      <div className={Styles.contact__details}>
        <span>{name}</span>
        <a href={
  name === 'Phone' ? `tel:${value}` :
  name === 'Email' ? `mailto:${value}` :
  value
}>
  {value}
</a>
      </div>
    </div>
  );
};

export default ContactDetail;
