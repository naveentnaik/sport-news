import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    const submission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    };
    
    existingSubmissions.push(submission);
    
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
    
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-6xl font-bold mb-6 mt-8">Contact us</h1>
      
      <p className="text-xl text-center mb-12 max-w-lg">
        Send us a message using the contact form below,
        <br />and we'll get back to you in 24 hours.
      </p>
      
      {submitted && (
          <div className="mt-4 p-4 bg-blue-700 text-white rounded">
            Thank you! Your message has been submitted.
          </div>
        )}

      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={`w-full p-4 rounded transition-all duration-500 outline-none ${
              focusedField === 'name' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-700 text-white'
            }`}
            placeholder="Jane Smith"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={`w-full p-4 rounded transition-all duration-500 outline-none ${
              focusedField === 'email' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-700 text-white'
            }`}
            placeholder="tonjrv@email.com"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            className={`w-full p-4 rounded h-40 transition-all duration-500 outline-none placeholder:text-gray-400 ${
              focusedField === 'message' 
                ? 'bg-white text-gray-900' 
                : 'bg-gray-700 text-white'
            }`}
            placeholder="Leave your message here."
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-100 hover:bg-blue-200 hover:cursor-pointer text-black font-bold p-4 rounded transition duration-200"
        >
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default ContactForm;