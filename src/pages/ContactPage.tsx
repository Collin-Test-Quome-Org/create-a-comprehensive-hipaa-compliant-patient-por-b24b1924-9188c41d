import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#f9fafb] min-h-screen w-full pt-8 pb-16">
      <div className="max-w-xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-4 text-[#1d4ed8]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact ShieldLink Health
        </motion.h2>
        {submitted ? (
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-2xl mb-2">🎉</div>
            <div className="text-lg font-medium mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Message Sent!
            </div>
            <div className="text-slate-500">
              Our digital shield is on the case. We'll get back to you soon!
            </div>
          </motion.div>
        ) : (
          <form
            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4"
            onSubmit={handleSubmit}
            aria-label="Contact Form"
          >
            <Input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="text-base"
            />
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="text-base"
            />
            <Textarea
              id="contact-message"
              name="message"
              placeholder="How can we help you?"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="text-base"
            />
            <Button type="submit" id="contact-submit" className="bg-[#1d4ed8] text-white font-semibold text-lg">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </main>
  );
};
