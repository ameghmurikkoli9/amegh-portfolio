import PillNav from "./PillNav";

const Navbar = () => {
  return (
    <PillNav
      items={[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
      ]}
      activeHref="#home"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={false}
    />
  );
};

export default Navbar;