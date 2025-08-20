import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function CompanyFooter() {
  return (
    <footer className="w-full bg-blue-700 text-white py-10 px-4 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="/branding/assets/logo-0.png" className="h-10 w-10" />
          <span className="font-montserrat font-bold text-2xl tracking-tight">ShieldRx</span>
        </div>
        <nav className="flex gap-8 text-sm font-roboto">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/appointments" className="hover:underline">Appointments</Link>
          <Link to="/medical-records" className="hover:underline">Records</Link>
          <Link to="/messaging" className="hover:underline">Messages</Link>
          <Link to="/upload-documents" className="hover:underline">Upload</Link>
        </nav>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-100"><Facebook size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-100"><Twitter size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-100"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-blue-200">&copy; {new Date().getFullYear()} ShieldRx. All rights reserved.</div>
    </footer>
  );
}
