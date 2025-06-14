import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Box,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import { customerData } from "../data/CustomerData";
import { MARITAL_STATUSES } from "../constants/constants";

const CustomerDialog = ({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (customer: any) => void;
}) => {
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    division: "",
    gender: "",
    maritalStatus: "",
    age: "",
    income: "",
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewCustomer({
        ...newCustomer,
        [field]: event.target.value,
      });
    };

  const handleAddCustomer = () => {
    const customerToAdd = {
      ...newCustomer,
      id: (customerData.length + 1).toString(),
      age: parseInt(newCustomer.age),
      income: parseInt(newCustomer.income),
    };
    onAdd(customerToAdd);
    onClose();
    setNewCustomer({
      name: "",
      division: "",
      gender: "",
      maritalStatus: "",
      age: "",
      income: "",
    });
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      backgroundColor: alpha("#919eab", 0.04),
      "& fieldset": {
        borderColor: alpha("#919eab", 0.2),
      },
      "&:hover fieldset": {
        borderColor: alpha("#919eab", 0.3),
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00a76f",
      },
    },
    "& .MuiInputLabel-root": {
      color: alpha("#919eab", 0.8),
      "&.Mui-focused": {
        color: "#00a76f",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 14px",
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: `0 0 2px 0 ${alpha(
            "#919eab",
            0.2
          )}, 0 12px 24px -4px ${alpha("#919eab", 0.12)}`,
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 2.5,
          borderBottom: `1px solid ${alpha("#919eab", 0.12)}`,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Add New Customer
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 2.5 }}>
        <Stack spacing={2.5}>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, color: alpha("#919eab", 0.8) }}
            >
              Basic Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Name"
                fullWidth
                value={newCustomer.name}
                onChange={handleInputChange("name")}
                required
                size="small"
                sx={textFieldStyles}
              />
              <TextField
                label="Division"
                fullWidth
                value={newCustomer.division}
                onChange={handleInputChange("division")}
                required
                size="small"
                sx={textFieldStyles}
              />
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, color: alpha("#919eab", 0.8) }}
            >
              Personal Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                select
                label="Gender"
                fullWidth
                value={newCustomer.gender}
                onChange={handleInputChange("gender")}
                required
                size="small"
                sx={textFieldStyles}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
              <TextField
                select
                label="Marital Status"
                fullWidth
                value={newCustomer.maritalStatus}
                onChange={handleInputChange("maritalStatus")}
                required
                size="small"
                sx={textFieldStyles}
              >
                {Object.values(MARITAL_STATUSES).map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Box>

          <Box>
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, color: alpha("#919eab", 0.8) }}
            >
              Financial Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Age"
                type="number"
                fullWidth
                value={newCustomer.age}
                onChange={handleInputChange("age")}
                required
                size="small"
                sx={textFieldStyles}
              />
              <TextField
                label="Income"
                type="number"
                fullWidth
                value={newCustomer.income}
                onChange={handleInputChange("income")}
                required
                size="small"
                sx={textFieldStyles}
              />
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          p: 2.5,
          borderTop: `1px solid ${alpha("#919eab", 0.12)}`,
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            color: alpha("#919eab", 0.8),
            "&:hover": {
              backgroundColor: alpha("#919eab", 0.08),
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAddCustomer}
          variant="contained"
          disabled={
            !newCustomer.name ||
            !newCustomer.division ||
            !newCustomer.gender ||
            !newCustomer.maritalStatus ||
            !newCustomer.age ||
            !newCustomer.income
          }
          sx={{
            px: 3,
            py: 1,
            backgroundColor: "#00a76f",
            color: "#ffffff",
            borderRadius: 1,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: `0 0 2px 0 ${alpha(
              "#00a76f",
              0.2
            )}, 0 4px 8px -4px ${alpha("#00a76f", 0.12)}`,
            "&:hover": {
              backgroundColor: "#007867",
              boxShadow: `0 0 2px 0 ${alpha(
                "#00a76f",
                0.2
              )}, 0 8px 16px -4px ${alpha("#00a76f", 0.12)}`,
            },
          }}
        >
          Add Customer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDialog;
