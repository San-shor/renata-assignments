import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  alpha,
} from "@mui/material";
interface FilterBerProps {
  label: string;
  menu: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function FiltersBar({
  label,
  menu,
  value,
  onChange,
}: FilterBerProps) {
  return (
    <>
      <FormControl
        size="small"
        sx={{
          minWidth: 150,
          boxShadow: `0 0 2px 0 ${alpha(
            "#919eab",
            0.2
          )}, 0 12px 24px -4px ${alpha("#919eab", 0.12)}`,
          borderRadius: 1,
          backgroundColor: "#fff",
          borderColor: "green",
        }}
      >
        <InputLabel id="region-select-label">{label}</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          label="Select Region"
          variant="outlined"
          value={value}
          onChange={(event) => onChange(event.target.value as string)}
        >
          {menu.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
