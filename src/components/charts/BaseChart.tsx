import { Box, Typography, Skeleton } from '@mui/material';
import { ResponsiveContainer } from 'recharts';

interface BaseChartProps {
  title?: string;
  height?: number;
  loading?: boolean;
  children: React.ReactNode;
}

export const BaseChart = ({ title, height = 400, loading, children }: BaseChartProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: height,
      }}
    >
      {title && (
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>
      )}
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={height - 32} sx={{ borderRadius: 1 }} />
      ) : (
        <ResponsiveContainer width="100%" height={height - (title ? 32 : 0)}>
          {children}
        </ResponsiveContainer>
      )}
    </Box>
  );
};
