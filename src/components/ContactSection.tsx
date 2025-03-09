import { useState } from "react";

const ContactSection = () => {
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl text-center font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p><strong>Address:</strong> 95 Ashbourne Rd, Mackworth, Derby DE22 4LZ, United Kingdom</p>
            <p><strong>Phone:</strong> +44 (0) 1332 480 318</p>
            <p><strong>Email:</strong> tygerinnn.derby@gmail.com</p>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.8912715093665!2d-1.4974367841832902!3d52.92750957989319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f91b6fc3b8e9%3A0xcea28b3fd4cb3e30!2s95%20Ashbourne%20Rd%2C%20Mackworth%2C%20Derby%20DE22%204LZ%2C%20UK!5e0!3m2!1sen!2s!4v1679918220304!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Send Us a Message</h3>
            <form
              action="https://formsubmit.co/tygerinnn.derby@gmail.com"
              method="POST"
              className="space-y-4"
              onSubmit={() => setStatus("Sending...")}
            >
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                required 
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32 resize-none" 
                required
              ></textarea>

              {/* Hidden Fields */}
              <input type="hidden" name="_captcha" value="false" />

              <button 
                type="submit" 
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
            {status && <p className="text-center text-gray-700">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;