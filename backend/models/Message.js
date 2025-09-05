// Message model class
class Message {
  constructor(id, name, email, message, timestamp) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.timestamp = timestamp;
  }

  // Static method to create message from JSON data
  static fromJSON(data) {
    return new Message(
      data.id,
      data.name,
      data.email,
      data.message,
      data.timestamp
    );
  }

  // Method to convert to JSON
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}

module.exports = Message;
