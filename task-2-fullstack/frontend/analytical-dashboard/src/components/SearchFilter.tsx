import { alpha, Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter = ({ value, onChange }: SearchFilterProps) => {
  return (
    <Box sx={{ px: 2.5, pb: 2.5 }}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search by name, gender, or division...'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon sx={{ color: alpha('#919eab', 0.6) }} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 1,
            backgroundColor: alpha('#919eab', 0.04),
            '& fieldset': {
              borderColor: alpha('#919eab', 0.2),
            },
            '&:hover fieldset': {
              borderColor: alpha('#919eab', 0.3),
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00a76f',
            },
          },
          '& .MuiInputBase-input': {
            py: 1.5,
          },
        }}
      />
    </Box>
  );
};

export default SearchFilter;
