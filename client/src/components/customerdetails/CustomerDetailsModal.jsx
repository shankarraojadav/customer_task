import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import { useContext, useState } from "react";
import Region from "../Region";
import { DataContext } from "../../context/dataContext";
import LanguageSelector from "../language";
import "./addButtonModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../redux/actions/index";
import { NotificationContext } from "../../context/NotificationProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomerDetailsModal() {
  const { country, state, city, selectedLanguage } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { updateNotification } = useContext(NotificationContext);

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasswrod] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [active, setActive] = useState(false);

  const [data, setData] = useState();

  const handleCancel = () => {
    setData();
    handleClose();
  };

  console.log(data);

  const handleSave = () => {
    setData({
      fullName: fullName,
      email: email,
      password: password,
      active: active,
      country: country?.name,
      state: state?.name,
      city: city?.name,
      languages: selectedLanguage?.label,
    });

    if (password === confirmpassword) {
      dispatch(addCustomer(data));
    }
    else {
      updateNotification("error", "password and confirm password not matching")
    }
  };

  return (
    <div>
      <IconButton
        sx={{
          borderRadius: "10vh",
          border: "1px solid black",
          fontSize: "2vh",
          padding: "2vh",
          fontWeight: "bold",
        }}
        onClick={handleOpen}
      >
        Add New
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className="titleBox">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Manage Customer
            </Typography>
            <IconButton
              sx={{
                border: "1px solid black",
                borderRadius: "50%",
                padding: "0.5vh",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Box className="textBox">
              <Typography>Full Name</Typography>
              <TextField
                placeholder="Enter Full Name"
                name="fullname"
                onChange={(e) => setFullName(e.target.value)}
              />
            </Box>
            <Box className="textBox">
              <Typography>Email</Typography>
              <TextField
                placeholder="Enter Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="textBox">
              <Typography>Password</Typography>
              <TextField
                placeholder="Password"
                name="password"
                type="password"
                onChange={(e) => setPasswrod(e.target.value)}
              />
            </Box>
            <Box className="textBox">
              <Typography>Confirm Password</Typography>
              <TextField
                placeholder="Enter Confirm Password"
                name="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>

            <Region />

            <Box className="textBox">
              <Typography>Language</Typography>
              <LanguageSelector />
            </Box>
            <Box className="textBox">
              <Typography>Active</Typography>
              <Checkbox onChange={() => setActive(true)} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={handleCancel}
              sx={{
                border: "1px solid black",
                borderRadius: "10%",
                fontSize: "3vh",
                mr: "10vh",
              }}
            >
              Cancel
            </IconButton>
            <IconButton
              onClick={handleSave}
              sx={{
                border: "1px solid black",
                borderRadius: "10%",
                fontSize: "3vh",
              }}
            >
              Save
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
