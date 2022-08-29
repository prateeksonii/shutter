import Link from "next/link";
import { styled, theme } from "stitches.config";

const Navbar = () => {
  return (
    <Nav>
      <Logo>Shutter</Logo>
      <NavMenu>
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/">
          <NavItem>About</NavItem>
        </Link>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled("nav", {
  width: "60%",
  height: "60px",
  margin: "auto",
  display: "flex",
  alignItems: "center",
});

const Logo = styled("div", {
  fontSize: "1.4rem",
  fontWeight: "bold",
});

const NavMenu = styled("div", {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "2rem",
});

const NavItem = styled("a", {
  color: "$grey",
});
