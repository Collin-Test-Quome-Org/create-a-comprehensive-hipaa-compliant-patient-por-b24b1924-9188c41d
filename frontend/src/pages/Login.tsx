import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login: any email/pass succeed
    if (email && password) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Please enter your email and password.');
    }
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#f8fafc] px-4 py-12">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="text-center pb-3">
          <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Welcome Back
          </CardTitle>
          <p className="mt-1 text-slate-500 text-sm">Sign in to ShieldLink Health Patient Portal</p>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={onSubmit} aria-label="Login form">
            <div>
              <label htmlFor="login-email" className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
              <div className="relative">
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="pl-10"
                  autoComplete="username"
                  required
                />
                <Mail className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            <div>
              <label htmlFor="login-password" className="text-sm font-medium text-slate-700 mb-1 block">Password</label>
              <div className="relative">
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="pl-10"
                  autoComplete="current-password"
                  required
                />
                <Lock className="absolute left-2 top-2.5 text-slate-400" size={18} />
              </div>
            </div>
            {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
            <Button type="submit" className="bg-[#1d4ed8] text-white mt-2" id="login-submit">
              Sign In
            </Button>
            <div className="flex justify-between text-xs mt-2">
              <a href="/forgot-password" className="text-[#1d4ed8] font-medium hover:underline">Forgot password?</a>
              <a href="/signup" className="text-slate-500 hover:underline">Create account</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
