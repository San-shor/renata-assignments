import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  alpha,
  createTheme,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface FilterBerProps {
  label: string;
  menu: string[];
  value: string;
  onChange: (value: string) => void;
}

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: 1,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#919eab', 0.04),
          borderRadius: 4,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: alpha('#919eab', 0.08),
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
            boxShadow: `0 0 2px 0 ${alpha(
              '#00a76f',
              0.2
            )}, 0 4px 8px -4px ${alpha('#00a76f', 0.12)}`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00a76f',
          },
        },
        notchedOutline: {
          borderColor: alpha('#919eab', 0.2),
          transition: 'all 0.2s ease-in-out',
        },
        input: {
          padding: '8px 14px',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: alpha('#212b36', 0.8),
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: 'flex',
          alignItems: 'center',
          minHeight: 'unset',
        },
        icon: {
          color: alpha('#919eab', 0.6),
          right: 8,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: alpha('#919eab', 0.8),
          fontSize: '0.875rem',
          '&.Mui-focused': {
            color: '#00a76f',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: alpha('#00a76f', 0.08),
          },
          '&.Mui-selected': {
            backgroundColor: alpha('#00a76f', 0.16),
            color: '#00a76f',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: alpha('#00a76f', 0.24),
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: 8,
          borderRadius: 1,
          boxShadow: `0 0 2px 0 ${alpha(
            '#919eab',
            0.2
          )}, 0 12px 24px -4px ${alpha('#919eab', 0.12)}`,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '4px 0',
        },
      },
    },
  },
});

export default function FiltersBar({
  label,
  menu,
  value,
  onChange,
}: FilterBerProps) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        size='small'
        sx={{
          minWidth: 150,
        }}>
        <InputLabel>{label}</InputLabel>
        <Select
          variant='outlined'
          value={value}
          onChange={(event) => onChange(event.target.value as string)}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
              },
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
          }}
          renderValue={(selected) =>
            selected ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant='body2'
                  sx={{
                    color: alpha('#212b36', 0.8),
                    fontWeight: 500,
                  }}>
                  {selected}
                </Typography>
                <IconButton
                  size='small'
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange('');
                  }}
                  sx={{
                    color: alpha('#919eab', 0.6),
                    '&:hover': {
                      backgroundColor: alpha('#919eab', 0.08),
                      color: alpha('#919eab', 0.8),
                    },
                  }}>
                  <ClearIcon fontSize='small' />
                </IconButton>
              </Box>
            ) : (
              <Typography
                variant='body2'
                sx={{
                  color: alpha('#919eab', 0.6),
                  fontStyle: 'italic',
                }}>
                None
              </Typography>
            )
          }>
          {menu.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
