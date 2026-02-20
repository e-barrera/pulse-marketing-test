import { Container, Box } from '@mui/material';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="xl" sx={{ px: 0, width: '100vw' }}>
        <Dashboard />
      </Container>
    </Box>
  );
}

export default App;
