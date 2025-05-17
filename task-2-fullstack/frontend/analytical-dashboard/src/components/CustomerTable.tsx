import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TablePagination,
  Card,
  Box,
} from "@mui/material";
import { customerData } from "../data/CustomerData";
import { useTheme } from "@mui/material";

import { alpha } from "@mui/material/styles";

import { useState } from "react";
const MARITAL_STATUS_TYPES = {
  SINGLE: "Single",
  MARRIED: "Married",
  DIVORCED: "Divorced",
};

const CustomerTable = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Card
      sx={{
        boxShadow: `0 0 2px 0 ${alpha(
          theme.palette.grey[500],
          0.2
        )}, 0 12px 24px -4px ${alpha(theme.palette.grey[500], 0.12)}`,
      }}
    >
      <TableContainer
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: 600,
        }}
      >
        <Table stickyHeader aria-label="customer table">
          <TableHead>
            <TableRow>
              {[
                "ID",
                "Customer Name",
                "Division",
                "Gender",
                "Marital Status",
                "Age",
                "Income",
              ].map((header) => (
                <TableCell
                  key={header}
                  align="center"
                  sx={{
                    backgroundColor: alpha(theme.palette.grey[400], 0.24),
                    color: theme.palette.text.secondary,
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customerData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell align="center">{customer.id}</TableCell>
                  <TableCell align="center">{customer.name}</TableCell>
                  <TableCell align="center">{customer.division}</TableCell>
                  <TableCell align="center">{customer.gender}</TableCell>
                  <TableCell align="center">
                    <Chip
                      label={customer.maritalStatus}
                      sx={{
                        backgroundColor:
                          customer.maritalStatus ===
                          MARITAL_STATUS_TYPES.MARRIED
                            ? alpha(theme.palette.success.light, 0.2)
                            : customer.maritalStatus ===
                              MARITAL_STATUS_TYPES.SINGLE
                            ? alpha(theme.palette.secondary.light, 0.2)
                            : alpha(theme.palette.warning.light, 0.2),
                        color:
                          customer.maritalStatus ===
                          MARITAL_STATUS_TYPES.MARRIED
                            ? theme.palette.success.main
                            : customer.maritalStatus ===
                              MARITAL_STATUS_TYPES.SINGLE
                            ? theme.palette.secondary.main
                            : theme.palette.warning.main,
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{customer.age}</TableCell>
                  <TableCell align="center">{customer.income}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end">
        <TablePagination
          component="div"
          labelRowsPerPage="Rows per page"
          rowsPerPageOptions={[5, 10, 25]}
          count={customerData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Card>
  );
};

export default CustomerTable;
