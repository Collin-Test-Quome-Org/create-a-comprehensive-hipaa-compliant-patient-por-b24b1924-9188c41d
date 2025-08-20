import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { LandingPage } from '@/pages/LandingPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { Dashboard } from '@/pages/Dashboard';
import { MedicalRecords } from '@/pages/MedicalRecords';
import { Appointments } from '@/pages/Appointments';
import { NewAppointment } from '@/pages/NewAppointment';
import { AppointmentDetails } from '@/pages/AppointmentDetails';
import { Prescriptions } from '@/pages/Prescriptions';
import { Messaging } from '@/pages/Messaging';
import { Notifications } from '@/pages/Notifications';
import { UploadDocuments } from '@/pages/UploadDocuments';

export const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/medical-records" element={<MedicalRecords />} />
      <Route path="/medical-records/upload" element={<UploadDocuments />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/appointments/new" element={<NewAppointment />} />
      <Route path="/appointments/:id" element={<AppointmentDetails />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  </BrowserRouter>
)
