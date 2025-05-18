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
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { customerData } from '../data/CustomerData';
import { MARITAL_STATUSES } from '../constants/constants';

const CustomerDialog = ({
  open,
  onClose,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (customer: any) => void;
}) => {
  const theme = useTheme();
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    division: '',
    gender: '',
    maritalStatus: '',
    age: '',
    income: '',
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
      name: '',
      division: '',
      gender: '',
      maritalStatus: '',
      age: '',
      income: '',
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: `0 0 2px 0 ${alpha(
            theme.palette.grey[500],
            0.2
          )}, 0 12px 24px -4px ${alpha(theme.palette.grey[500], 0.12)}`,
        },
      }}>
      <DialogTitle
        sx={{
          p: 3,
          borderBottom: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
        }}>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          Add New Customer
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant='subtitle2'
              sx={{ mb: 1, color: 'text.secondary' }}>
              Basic Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                label='Name'
                fullWidth
                value={newCustomer.name}
                onChange={handleInputChange('name')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}
              />
              <TextField
                label='Division'
                fullWidth
                value={newCustomer.division}
                onChange={handleInputChange('division')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}
              />
            </Stack>
          </Box>

          <Box>
            <Typography
              variant='subtitle2'
              sx={{ mb: 1, color: 'text.secondary' }}>
              Personal Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                select
                label='Gender'
                fullWidth
                value={newCustomer.gender}
                onChange={handleInputChange('gender')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </TextField>
              <TextField
                select
                label='Marital Status'
                fullWidth
                value={newCustomer.maritalStatus}
                onChange={handleInputChange('maritalStatus')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}>
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
              variant='subtitle2'
              sx={{ mb: 1, color: 'text.secondary' }}>
              Financial Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                label='Age'
                type='number'
                fullWidth
                value={newCustomer.age}
                onChange={handleInputChange('age')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}
              />
              <TextField
                label='Income'
                type='number'
                fullWidth
                value={newCustomer.income}
                onChange={handleInputChange('income')}
                required
                size='small'
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          p: 3,
          borderTop: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
        }}>
        <Button
          onClick={onClose}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              backgroundColor: alpha(theme.palette.grey[500], 0.08),
            },
          }}>
          Cancel
        </Button>
        <Button
          onClick={handleAddCustomer}
          variant='contained'
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
            borderRadius: 1,
            '&:hover': {
              boxShadow: 'none',
            },
          }}>
          Add Customer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDialog;
