import { Box, CircularProgress } from '@mui/material';
import type { ReactNode } from 'react';

interface LoadingBoundaryProps {
  isLoading: boolean;
  children: ReactNode;
  spinner?: boolean;
}

export const LoadingBoundary = ({ isLoading, children, spinner = true }: LoadingBoundaryProps) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 200,
          width: '100%',
        }}
      >
        {spinner && <CircularProgress />}
      </Box>
    );
  }

  return <>{children}</>;
};
