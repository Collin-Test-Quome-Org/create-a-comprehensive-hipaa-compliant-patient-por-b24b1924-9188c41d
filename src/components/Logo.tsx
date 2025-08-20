import { Shield } from "lucide-react";

interface LogoProps {
  size?: number;
}

export const Logo = ({ size = 32 }: LogoProps) => (
  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
    <img
      src={"/branding/assets/logo-0.png"}
      style={{ height: size, width: size, display: 'inline-block', margin: 0, verticalAlign: 'middle' }}
      draggable={false}
    />
  </span>
);
