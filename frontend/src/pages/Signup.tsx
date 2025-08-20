import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Mock signup: succeed always
    setError('');
    navigate('/dashboard');
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#f8fafc] px-4 py-12">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center pb-3">
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Create Your Account
          </CardTitle>
          <p className="mt-1 text-slate-500 text-sm">Sign up for ShieldLink Health Patient Portal</p>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={onSubmit} aria-label="Signup form">
            <div>
              <label htmlFor="signup-name" className="text-sm font-medium text-slate-700 mb-1 block">Full Name</label>
              <div className="relative">
                <Input
                  id="signup-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={onChange}
                  className="pl-10"
                  required
                />
                <User className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label htmlFor="signup-email" className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
              <div className="relative">
                <Input
                  id="signup-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={onChange}
                  className="pl-10"
                  required
                />
                <Mail className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label htmlFor="signup-password" className="text-sm font-medium text-slate-700 mb-1 block">Password</label>
              <div className="relative">
                <Input
                  id="signup-password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={onChange}
                  className="pl-10"
                  required
                />
                <Lock className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label htmlFor="signup-confirm-password" className="text-sm font-medium text-slate-700 mb-1 block">Confirm Password</label>
              <div className="relative">
                <Input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={onChange}
                  className="pl-10"
                  required
                />
                <Lock className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
            <Button type="submit" className="bg-[#1d4ed8] text-white mt-2" id="signup-submit">
              Create Account
            </Button>
            <div className="flex justify-between text-xs mt-2">
              <a href="/login" className="text-[#1d4ed8] hover:underline font-medium">Already have an account?</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
