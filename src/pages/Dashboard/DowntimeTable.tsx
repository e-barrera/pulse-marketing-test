import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Skeleton,
  Paper,
} from '@mui/material';
import { useDowntimes } from '../../hooks/useDowntimes';
import { formatDate, getServiceColor } from '../../utils';

interface DowntimeTableProps {
  startMonth: string;
  endMonth: string;
  height?: number;
}

export const DowntimeTable = ({ startMonth, endMonth, height = 350 }: DowntimeTableProps) => {
  const { data, isLoading } = useDowntimes(startMonth, endMonth);
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: data?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 52,
    overscan: 5,
  });

  if (isLoading) {
    return (
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          System Downtimes
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} variant="rectangular" height={52} sx={{ borderRadius: 1 }} />
          ))}
        </Box>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box sx={{ width: '100%', height }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          System Downtimes
        </Typography>
        <Paper
          sx={{
            height: height - 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.50',
          }}
        >
          <Typography color="text.secondary">No downtimes in selected period</Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        System Downtimes
      </Typography>
      <Box
        ref={parentRef}
        sx={{
          height: height - 32,
          overflow: 'auto',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
        }}
      >
        <Table stickyHeader size="small" sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: 'background.paper',
                  fontWeight: 600,
                  minWidth: 150,
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: 'background.paper',
                  fontWeight: 600,
                  width: 80,
                }}
              >
                Duration
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: 'background.paper',
                  fontWeight: 600,
                  minWidth: 200,
                }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{
                  bgcolor: 'background.paper',
                  fontWeight: 600,
                  minWidth: 180,
                }}
              >
                Affected Services
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {virtualizer.getVirtualItems().map((virtualRow) => {
              const downtime = data![virtualRow.index];
              return (
                <TableRow
                  key={downtime.id}
                  sx={{
                    height: virtualRow.size,
                    transform: `translateY(${virtualRow.start - virtualRow.index * 52}px)`,
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <TableCell sx={{ fontSize: 13 }}>
                    {formatDate(downtime.start)}
                  </TableCell>
                  <TableCell sx={{ fontSize: 13 }}>
                    {downtime.durationMinutes} min
                  </TableCell>
                  <TableCell sx={{ fontSize: 13, maxWidth: 200 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {downtime.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {downtime.affectedServices.map((service) => (
                        <Chip
                          key={service}
                          label={service}
                          size="small"
                          color={getServiceColor(service)}
                          sx={{ fontSize: 11, height: 22 }}
                        />
                      ))}
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
