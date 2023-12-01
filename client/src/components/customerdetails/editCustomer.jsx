import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Checkbox, IconButton, TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import Region from "../Region";
import { DataContext } from "../../context/dataContext";
import LanguageSelector from "../language";
import "./addButtonModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { editCustomerData } from "../../redux/actions/index";

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

export default function EditCustomerModal({ editData }) {
  const {
    country,
    state,
    city,
    selectedLanguage,
    openEditModal,
    setOpenEditModal,
  } = useContext(DataContext);

  const handleOpen = () => setOpenEditModal(true);
  const handleClose = () => setOpenEditModal(false);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
  });

  useEffect(() => {
    if (editData) {
      setFormData({
        fullName: editData.fullName || "",
        email: editData.email || "",
        password: editData.password || "",
        confirmPassword: "", // Set based on your requirements
        active: editData.active || false,
      });
    }
  }, [editData]);

  const handleCancel = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      active: false,
    });
    handleClose();
  };

  const handleSave = () => {
    const newData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      active: formData.active,
      country: country?.name,
      state: state?.name,
      city: city?.name,
      languages: selectedLanguage?.label,
    };

    console.log("New data to be dispatched:", newData);
    dispatch(editCustomerData(newData));

    handleClose();
  };

  return (
    <div>
      <Modal
        open={openEditModal}
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
                value={formData.fullName}
                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
              />
            </Box>
            <Box className="textBox">
              <Typography>Email</Typography>
              <TextField
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </Box>
            <Box className="textBox">
              <Typography>Password</Typography>
              <TextField
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
              />
            </Box>
            <Box className="textBox">
              <Typography>Confirm Password</Typography>
              <TextField
                placeholder="Enter Confirm Password"
                name="confirmpassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                }
              />
            </Box>

            <Region />

            <Box className="textBox">
              <Typography>Language</Typography>
              <LanguageSelector />
            </Box>
            <Box className="textBox">
              <Typography>Active</Typography>
              <Checkbox
                checked={formData.active}
                onChange={() => setFormData((prev) => ({ ...prev, active: !prev.active }))}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              onClick={handleCancel}
              sx={{ border: "1px solid black", borderRadius: "10%", fontSize: "3vh", mr: "10vh" }}
            >
              Cancel
            </IconButton>
            <IconButton
              onClick={handleSave}
              sx={{ border: "1px solid black", borderRadius: "10%", fontSize: "3vh" }}
            >
              Save
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
