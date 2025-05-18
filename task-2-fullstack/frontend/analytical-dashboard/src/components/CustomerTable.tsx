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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { customerData } from '../data/CustomerData';
import { useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import CustomerDialog from './CustomerDialog';

const MARITAL_STATUS_TYPES = {
  SINGLE: 'Single',
  MARRIED: 'Married',
  DIVORCED: 'Divorced',
};

type Order = 'asc' | 'desc';
type SortableField = 'name' | 'age' | 'income';

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
  const theme = useTheme();
  const headers = [
    { id: 'id', label: 'ID', sortable: false },
    { id: 'name', label: 'Customer Name', sortable: true },
    { id: 'division', label: 'Division', sortable: false },
    { id: 'gender', label: 'Gender', sortable: false },
    { id: 'maritalStatus', label: 'Marital Status', sortable: false },
    { id: 'age', label: 'Age', sortable: true },
    { id: 'income', label: 'Income', sortable: true },
    { id: 'actions', label: 'Actions', sortable: false },
  ];

  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.id}
            align='center'
            sx={{
              backgroundColor: alpha(theme.palette.grey[400], 0.24),
              color: theme.palette.text.secondary,
              fontWeight: 'bold',
            }}>
            {header.sortable ? (
              <TableSortLabel
                active={orderBy === header.id}
                direction={orderBy === header.id ? order : 'asc'}
                onClick={() => onRequestSort(header.id as SortableField)}
                sx={{
                  '& .MuiTableSortLabel-icon': {
                    opacity: orderBy === header.id ? 1 : 0.5,
                  },
                }}>
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
  const theme = useTheme();

  return (
    <TableRow key={customer.id}>
      <TableCell align='center'>{customer.id}</TableCell>
      <TableCell align='center'>{customer.name}</TableCell>
      <TableCell align='center'>{customer.division}</TableCell>
      <TableCell align='center'>{customer.gender}</TableCell>
      <TableCell align='center'>
        <Chip
          label={customer.maritalStatus}
          sx={{
            backgroundColor:
              customer.maritalStatus === MARITAL_STATUS_TYPES.MARRIED
                ? alpha(theme.palette.success.light, 0.2)
                : customer.maritalStatus === MARITAL_STATUS_TYPES.SINGLE
                ? alpha(theme.palette.secondary.light, 0.2)
                : alpha(theme.palette.warning.light, 0.2),
            color:
              customer.maritalStatus === MARITAL_STATUS_TYPES.MARRIED
                ? theme.palette.success.main
                : customer.maritalStatus === MARITAL_STATUS_TYPES.SINGLE
                ? theme.palette.secondary.main
                : theme.palette.warning.main,
            fontWeight: 'bold',
          }}
        />
      </TableCell>
      <TableCell align='center'>{customer.age}</TableCell>
      <TableCell align='center'>{customer.income}</TableCell>
      <TableCell align='center'>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <Tooltip title='Edit'>
            <IconButton
              size='small'
              onClick={() => onEdit?.(customer)}
              sx={{
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
              }}>
              <EditIcon fontSize='small' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Delete'>
            <IconButton
              size='small'
              onClick={() => onDelete?.(customer.id)}
              sx={{
                color: theme.palette.error.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.error.main, 0.1),
                },
              }}>
              <DeleteIcon fontSize='small' />
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
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<SortableField>('name');
  const [order, setOrder] = useState<Order>('asc');
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property: SortableField) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
    if (orderBy === 'name') {
      return order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (orderBy === 'age') {
      return order === 'asc' ? a.age - b.age : b.age - a.age;
    } else {
      return order === 'asc' ? a.income - b.income : b.income - a.income;
    }
  });

  return (
    <Card
      sx={{
        boxShadow: `0 0 2px 0 ${alpha(
          theme.palette.grey[500],
          0.2
        )}, 0 12px 24px -4px ${alpha(theme.palette.grey[500], 0.12)}`,
      }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          onClick={() => setOpenAddDialog(true)}
          sx={{
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}>
          Add Customer
        </Button>
      </Box>
      <TableContainer
        sx={{
          position: 'relative',
          overflow: 'auto',
          maxHeight: 600,
        }}>
        <Table stickyHeader aria-label='customer table'>
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
      <Box>
        <TablePagination
          component='div'
          labelRowsPerPage='Rows per page'
          rowsPerPageOptions={[5, 10, 25]}
          count={filteredData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
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
