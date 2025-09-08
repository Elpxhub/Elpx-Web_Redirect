import { Button } from "@/components/ui/button";
import ElpxLogo from "@/assets/ElpxLoogo.svg";

const Header = () => {
  const handleSignIn = () => {
    window.location.href = import.meta.env.VITE_SIGNIN_URL;
  };
  return (
    <header className="w-full bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <img className="h-12" src={ElpxLogo} alt="Elpx Logo" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Communities
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
            Create a Campaign
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;