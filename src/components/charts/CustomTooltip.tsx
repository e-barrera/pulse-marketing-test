import { Paper, Typography, Box } from '@mui/material';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
  isCurrency?: boolean;
}

const formatValue = (value: number, isCurrency?: boolean): string => {
  if (isCurrency) {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return `$${value.toLocaleString()}`;
  }
  return value.toLocaleString();
};

const formatMonth = (month: string): string => {
  if (!month || !month.includes('-')) return month;
  const [year, monthNum] = month.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = parseInt(monthNum, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
};

export const CustomTooltip = ({ active, payload, label, isCurrency = false }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  return (
    <Paper
      sx={{
        p: 1.5,
        boxShadow: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
        {formatMonth(label || '')}
      </Typography>
      {payload.map((entry, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              bgcolor: entry.color,
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {entry.name}: <strong>{formatValue(entry.value, isCurrency)}</strong>
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};
