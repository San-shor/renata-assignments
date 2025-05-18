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
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
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
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 8,
          boxShadow: `0 0 2px 0 ${alpha(
            "#919eab",
            0.2
          )}, 0 12px 24px -4px ${alpha("#919eab", 0.12)}`,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
          },
        },
        notchedOutline: {
          borderColor: "#c4cdd5",
        },

        input: {
          padding: "10px 14px",
          border: "none",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: "flex",
          alignItems: "center",
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
        size="small"
        sx={{
          minWidth: 150,
        }}
      >
        <InputLabel>{label}</InputLabel>
        <Select
          variant="outlined"
          value={value}
          onChange={(event) => onChange(event.target.value as string)}
          renderValue={(selected) =>
            selected ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {selected}
                <IconButton
                  size="small"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange("");
                  }}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <em style={{ color: "#aaa" }}>None</em>
            )
          }
          sx={{
            fontSize: "12px",
          }}
        >
          {menu.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
