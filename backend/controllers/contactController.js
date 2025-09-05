const { getMessages, saveMessages } = require('../config/db');

// POST /contact - send contact message
const sendMessage = (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Get existing messages
    const messages = getMessages();

    // Create new message
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    // Add to messages array
    messages.push(newMessage);

    // Save messages
    saveMessages(messages);

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  sendMessage
};
