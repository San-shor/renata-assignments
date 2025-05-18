import { Box, InputAdornment, TextField } from '@mui/material';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClear } from 'react-icons/md';

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchFilter = ({ value, onChange }: SearchFilterProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        fullWidth
        variant='outlined'
        size='medium'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search by name, gender, or division...'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <FiSearch />
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment
              position='end'
              sx={{ cursor: 'pointer' }}
              onClick={() => onChange('')}>
              <MdOutlineClear />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchFilter;
