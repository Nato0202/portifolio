import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Entre em Contato
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 mb-8 text-center"
      >
        Tem uma ideia interessante ou quer conversar sobre um projeto?
        Entre em contato comigo!
      </motion.p>
      <ContactForm />
    </div>
  );
};

export default Contact;
