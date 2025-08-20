import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '@/components/Logo';

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="w-full shadow z-30 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <NavigationMenu className="flex-grow">
          <NavigationMenuList className="flex gap-2 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle() + ' mr-3'}>
                <Link to="/">
                  <span className="flex items-center gap-2">
                    <Logo size={36} />
                    <span className="font-extrabold text-lg tracking-tight text-[#1d4ed8]" style={{ fontFamily: 'Montserrat, sans-serif' }}>ShieldLink Health</span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/dashboard">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/medical-records">Records</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/appointments">Appointments</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/prescriptions">Prescriptions</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/messaging">Messaging</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/notifications">Notifications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Button asChild variant={location.pathname === '/login' ? 'secondary' : 'outline'} id="nav-login">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="bg-[#1d4ed8] text-white hover:bg-blue-700" id="nav-signup">
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
