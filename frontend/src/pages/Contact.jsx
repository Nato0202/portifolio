import { motion } from 'framer-motion';
import './Contact.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-title"
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="contact-subtitle"
          >
            Tem uma ideia interessante ou quer conversar sobre um projeto?
            Entre em contato comigo!
          </motion.p>
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
