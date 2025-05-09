import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-2/5">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Email</h4>
                      <a href="mailto:john.doe@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        srinivaspinisetti8@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Kukatpally, Hyderabad, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/srinivas-pinisetti" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/srinivaspinisetti" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`px-6 py-3 flex items-center justify-center gap-2 rounded-lg text-white font-medium transition-all ${
                      formStatus === 'submitting' 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                    } w-full sm:w-auto`}
                  >
                    {formStatus === 'submitting' && (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {formStatus === 'submitting' ? 'Sending...' : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {formStatus === 'success' && (
                    <p className="mt-3 text-green-600 dark:text-green-400 text-sm">
                      Your message has been sent successfully!
                    </p>
                  )}
                  
                  {formStatus === 'error' && (
                    <p className="mt-3 text-red-600 dark:text-red-400 text-sm">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;