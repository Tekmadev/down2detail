import ContactHeader from "./ContactHeader";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <ContactHeader />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
