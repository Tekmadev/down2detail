import ContactHeader from "./ContactHeader";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="w-full">
      <div className="hidden xl:block">
        <ContactHeader />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
