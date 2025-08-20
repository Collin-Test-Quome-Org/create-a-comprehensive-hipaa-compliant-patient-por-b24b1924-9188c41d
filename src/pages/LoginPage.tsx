import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock login: any credentials succeed
    if (form.email && form.password) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Please enter your email and password.');
    }
  }

  return (
    <main className="bg-[#f9fafb] min-h-screen w-full flex items-center justify-center py-12">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Welcome Back
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Login Form">
          <Input
            id="login-email"
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="text-base"
          />
          <Input
            id="login-password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="text-base"
          />
          {error && <div className="text-red-600 text-sm" id="login-error">{error}</div>}
          <Button type="submit" id="login-submit" className="bg-[#1d4ed8] text-white font-semibold text-lg">
            Log In
          </Button>
        </form>
        <div className="flex flex-col gap-1 text-sm text-slate-600 mt-2">
          <span>
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#1d4ed8] font-medium underline">
              Sign Up
            </Link>
          </span>
          <span>
            <Link to="/forgot-password" className="text-[#1d4ed8] underline">
              Forgot Password?
            </Link>
          </span>
        </div>
      </motion.div>
    </main>
  );
};
