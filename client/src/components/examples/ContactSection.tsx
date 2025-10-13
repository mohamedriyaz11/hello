import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  const contactInfo = {
    address: "No 14 A Manjanman Kovil Street, Kanchipadu, Thiruvalur - 631704",
    city: "Chennai, Tamil Nadu, India 600034",
    email: "drsnk730@gmail.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  };

  return <ContactSection contactInfo={contactInfo} />;
}
