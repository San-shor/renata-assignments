import { Box, InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";

const SearchFilter = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        fullWidth
        variant="outlined"
        size={"medium"}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                <MdOutlineClear />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchFilter;
