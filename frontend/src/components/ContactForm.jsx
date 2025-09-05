import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await axios.post('/api/contact', formData);
      setSubmitMessage('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="form-textarea"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="form-button"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {submitMessage && (
        <p className={`submit-message ${submitMessage.includes('sucesso') ? 'success' : 'error'}`}>
          {submitMessage}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
