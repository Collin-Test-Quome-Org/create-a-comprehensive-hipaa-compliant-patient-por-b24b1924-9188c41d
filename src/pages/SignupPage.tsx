import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SignupPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Please fill out all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    navigate('/dashboard');
  }

  return (
    <main className="bg-[#f9fafb] min-h-screen w-full flex items-center justify-center py-12">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Create Your Account
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Signup Form">
          <Input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            id="signup-email"
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            id="signup-password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            id="signup-confirm"
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={handleChange}
            required
            className="text-base"
          />
          {error && <div className="text-red-600 text-sm" id="signup-error">{error}</div>}
          <Button type="submit" id="signup-submit" className="bg-[#1d4ed8] text-white font-semibold text-lg">
            Sign Up
          </Button>
        </form>
        <div className="flex flex-col gap-1 text-sm text-slate-600 mt-2">
          <span>
            Already have an account?{' '}
            <Link to="/login" className="text-[#1d4ed8] font-medium underline">
              Log In
            </Link>
          </span>
        </div>
      </motion.div>
    </main>
  );
};
