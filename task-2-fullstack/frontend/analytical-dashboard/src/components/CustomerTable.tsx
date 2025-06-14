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
  TableSortLabel,
  IconButton,
  Tooltip,
  Button,
  Typography,
  alpha,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import { customerData } from "../data/CustomerData";
import { useState } from "react";
import CustomerDialog from "./CustomerDialog";

const MARITAL_STATUS_TYPES = {
  SINGLE: "Single",
  MARRIED: "Married",
  DIVORCED: "Divorced",
};

type Order = "asc" | "desc";
type SortableField = "name" | "age" | "income";

interface CustomerTableProps {
  searchQuery: string;
  onEdit?: (customer: any) => void;
  onDelete?: (customerId: string) => void;
  onAdd?: (customer: any) => void;
}

// Table Header Component
const TableHeader = ({
  orderBy,
  order,
  onRequestSort,
}: {
  orderBy: SortableField;
  order: Order;
  onRequestSort: (property: SortableField) => void;
}) => {
  const headers = [
    { id: "id", label: "ID", sortable: false },
    { id: "name", label: "Customer Name", sortable: true },
    { id: "division", label: "Division", sortable: false },
    { id: "gender", label: "Gender", sortable: false },
    { id: "maritalStatus", label: "Marital Status", sortable: false },
    { id: "age", label: "Age", sortable: true },
    { id: "income", label: "Income", sortable: true },
    { id: "actions", label: "Actions", sortable: false },
  ];

  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.id}
            align="center"
            sx={{
              backgroundColor: alpha("#919eab", 0.04),
              color: alpha("#919eab", 0.8),
              fontWeight: 600,
              borderBottom: `1px solid ${alpha("#919eab", 0.12)}`,
              py: 2,
            }}
          >
            {header.sortable ? (
              <TableSortLabel
                active={orderBy === header.id}
                direction={orderBy === header.id ? order : "asc"}
                onClick={() => onRequestSort(header.id as SortableField)}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    opacity: orderBy === header.id ? 1 : 0.5,
                    color: "#00a76f",
                  },
                  "&.MuiTableSortLabel-root": {
                    "&:hover": {
                      color: "#00a76f",
                    },
                  },
                  "&.Mui-active": {
                    color: "#00a76f",
                    "&:hover": {
                      color: "#00a76f",
                    },
                  },
                }}
              >
                {header.label}
              </TableSortLabel>
            ) : (
              header.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

// Table Row Component
const CustomerRow = ({
  customer,
  onEdit,
  onDelete,
}: {
  customer: any;
  onEdit?: (customer: any) => void;
  onDelete?: (customerId: string) => void;
}) => {
  return (
    <TableRow
      key={customer.id}
      sx={{
        "&:hover": {
          backgroundColor: alpha("#919eab", 0.04),
        },
      }}
    >
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.id}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.name}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.division}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.gender}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        <Chip
          label={customer.maritalStatus}
          sx={{
            backgroundColor:
              customer.maritalStatus === MARITAL_STATUS_TYPES.MARRIED
                ? alpha("#00a76f", 0.16)
                : customer.maritalStatus === MARITAL_STATUS_TYPES.SINGLE
                ? alpha("#8e33ff", 0.16)
                : alpha("#ff5630", 0.16),
            color:
              customer.maritalStatus === MARITAL_STATUS_TYPES.MARRIED
                ? "#00a76f"
                : customer.maritalStatus === MARITAL_STATUS_TYPES.SINGLE
                ? "#8e33ff"
                : "#ff5630",
            fontWeight: 600,
          }}
        />
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.age}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        {customer.income}
      </TableCell>
      <TableCell align="center" sx={{ py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => onEdit?.(customer)}
              sx={{
                color: "#00a76f",
                "&:hover": {
                  backgroundColor: alpha("#00a76f", 0.08),
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              onClick={() => onDelete?.(customer.id)}
              sx={{
                color: "#ff5630",
                "&:hover": {
                  backgroundColor: alpha("#ff5630", 0.08),
                },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </TableCell>
    </TableRow>
  );
};

const CustomerTable = ({
  searchQuery,
  onEdit,
  onDelete,
  onAdd,
}: CustomerTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<SortableField>("name");
  const [order, setOrder] = useState<Order>("asc");
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property: SortableField) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = customerData.filter((customer) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      customer.name.toLowerCase().includes(searchLower) ||
      customer.division.toLowerCase().includes(searchLower) ||
      customer.gender.toLowerCase().includes(searchLower)
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (orderBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (orderBy === "age") {
      return order === "asc" ? a.age - b.age : b.age - a.age;
    } else {
      return order === "asc" ? a.income - b.income : b.income - a.income;
    }
  });

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: `0 0 2px 0 ${alpha(
          "#919eab",
          0.2
        )}, 0 12px 24px -4px ${alpha("#919eab", 0.12)}`,
      }}
    >
      <Box
        sx={{
          p: 2.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Customers
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenAddDialog(true)}
          sx={{
            backgroundColor: "#00a76f",
            color: "#ffffff",
            borderRadius: 1,
            px: 3,
            py: 1,
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
            "& .MuiButton-startIcon": {
              marginRight: 1,
            },
          }}
        >
          Add Customer
        </Button>
      </Box>

      {/* <Box sx={{ px: 2.5, pb: 2.5 }}>
        <TextField
          fullWidth
          placeholder='Search customer...'
          value={searchQuery}
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
      </Box> */}

      <TableContainer
        sx={{
          position: "relative",
          overflow: "auto",
          maxHeight: 600,
        }}
      >
        <Table stickyHeader aria-label="customer table">
          <TableHeader
            orderBy={orderBy}
            order={order}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer) => (
                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ borderTop: `1px solid ${alpha("#919eab", 0.12)}` }}>
        <TablePagination
          component="div"
          labelRowsPerPage="Rows per page"
          rowsPerPageOptions={[5, 10, 25]}
          count={filteredData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            "& .MuiTablePagination-select": {
              borderRadius: 1,
            },
            "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
              {
                color: alpha("#919eab", 0.8),
              },
          }}
        />
      </Box>

      <CustomerDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        onAdd={(customer) => onAdd?.(customer)}
      />
    </Card>
  );
};

export default CustomerTable;
