import { Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  alignItems: "center",
  display: "none",
  gap: "2em",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  alignItems: "center",
  display: "flex",
  gap: "1em",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography>jp</Typography>
        <Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/30"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://picsum.photos/30"
          />
          <Typography>jp viegas</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
}

export default Navbar;
