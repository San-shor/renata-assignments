import CustomerTable from '../components/CustomerTable';
import { Container, Stack } from '@mui/material';
import SearchFilter from '../components/SearchFilter';
import { useState } from 'react';

const Customer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container maxWidth={false} sx={{ padding: '30px 64px 40px 64px' }}>
      <Stack gap={5}>
        <SearchFilter value={searchQuery} onChange={setSearchQuery} />
        <CustomerTable searchQuery={searchQuery} />
      </Stack>
    </Container>
  );
};

export default Customer;
