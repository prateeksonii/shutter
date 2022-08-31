import { FiMessageCircle, FiPlusCircle } from "react-icons/fi";
import { styled } from "stitches.config";
import Button from "./Button";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Button size="lg">
        <FiMessageCircle />
      </Button>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled("aside", {
  height: "100vh",
  backgroundColor: "$darkest",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  borderRight: "1px solid $darker",
});
