import { useMemo } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import type { FilterParams } from '../../hooks';
import { getAvailableMonths, formatMonthLabel } from '../../hooks';

interface FilterBarProps {
  filters: FilterParams;
  onFiltersChange: (filters: FilterParams) => void;
}

export const FilterBar = ({ filters, onFiltersChange }: FilterBarProps) => {
  const availableMonths = useMemo(() => getAvailableMonths(), []);

  const handleStartMonthChange = (month: string) => {
    if (month <= filters.endMonth) {
      onFiltersChange({ ...filters, startMonth: month });
    }
  };

  const handleEndMonthChange = (month: string) => {
    if (month >= filters.startMonth) {
      onFiltersChange({ ...filters, endMonth: month });
    }
  };

  const handleApply = () => {
    onFiltersChange({ ...filters });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        mb: 3,
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="start-month-label">From</InputLabel>
        <Select
          labelId="start-month-label"
          value={filters.startMonth}
          label="From"
          onChange={(e) => handleStartMonthChange(e.target.value)}
        >
          {availableMonths.map((month: string) => (
            <MenuItem key={month} value={month} disabled={month > filters.endMonth}>
              {formatMonthLabel(month)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="end-month-label">To</InputLabel>
        <Select
          labelId="end-month-label"
          value={filters.endMonth}
          label="To"
          onChange={(e) => handleEndMonthChange(e.target.value)}
        >
          {availableMonths.map((month: string) => (
            <MenuItem key={month} value={month} disabled={month < filters.startMonth}>
              {formatMonthLabel(month)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={handleApply}
        sx={{ minWidth: 120 }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};
