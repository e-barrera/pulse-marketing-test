// mock-saas-metrics.js
// Mock data representing 12 months (Mar 2025 - Feb 2026) of SaaS metrics.
// Structured for easy import into a codebase (no backend required).
// All dates in YYYY-MM format for monthly data; downtimes use ISO timestamps.

const mockSaaSData = {
  // Monthly revenue figures (in USD, MRR - Monthly Recurring Revenue)
  revenue: [
    { month: '2025-03', amount: 2200 },
    { month: '2025-04', amount: 3100 },
    { month: '2025-05', amount: 4200 },
    { month: '2025-06', amount: 5400 },
    { month: '2025-07', amount: 6800 },
    { month: '2025-08', amount: 8900 },
    { month: '2025-09', amount: 11800 },
    { month: '2025-10', amount: 16200 },
    { month: '2025-11', amount: 22800 },
    { month: '2025-12', amount: 31200 },
    { month: '2026-01', amount: 42800 },
    { month: '2026-02', amount: 56200 }
  ],

  // User signup counts over time (new users per month)
  signups: [
    { month: '2025-03', count: 65 },
    { month: '2025-04', count: 92 },
    { month: '2025-05', count: 128 },
    { month: '2025-06', count: 162 },
    { month: '2025-07', count: 205 },
    { month: '2025-08', count: 255 },
    { month: '2025-09', count: 315 },
    { month: '2025-10', count: 385 },
    { month: '2025-11', count: 495 },
    { month: '2025-12', count: 615 },
    { month: '2026-01', count: 735 },
    { month: '2026-02', count: 820 }
  ],

  // Subscription tier distribution (active users per tier at month-end; simulates growth + light churn ~5%)
  tierDistribution: [
    { month: '2025-03', free: 52, pro: 14, enterprise: 2 },
    { month: '2025-04', free: 132, pro: 35, enterprise: 4 },
    { month: '2025-05', free: 240, pro: 68, enterprise: 7 },
    { month: '2025-06', free: 370, pro: 105, enterprise: 11 },
    { month: '2025-07', free: 530, pro: 150, enterprise: 16 },
    { month: '2025-08', free: 720, pro: 205, enterprise: 22 },
    { month: '2025-09', free: 960, pro: 275, enterprise: 30 },
    { month: '2025-10', free: 1280, pro: 365, enterprise: 40 },
    { month: '2025-11', free: 1680, pro: 480, enterprise: 52 },
    { month: '2025-12', free: 2200, pro: 630, enterprise: 68 },
    { month: '2026-01', free: 2840, pro: 820, enterprise: 88 },
    { month: '2026-02', free: 3560, pro: 1020, enterprise: 110 }
  ],

  // Downtimes (planned + unplanned outages; includes start/end ISO timestamps and duration in minutes)
  downtimes: [
    {
      id: 1,
      start: '2025-04-08T16:20:00Z',
      end: '2025-04-08T16:50:00Z',
      durationMinutes: 30,
      description: 'Authentication service scaling issue',
      affectedServices: ['Login', 'API']
    },
    {
      id: 2,
      start: '2025-08-15T14:30:00Z',
      end: '2025-08-15T15:15:00Z',
      durationMinutes: 45,
      description: 'Regional server overload during peak hours',
      affectedServices: ['API', 'Dashboard']
    },
    {
      id: 3,
      start: '2025-10-03T02:00:00Z',
      end: '2025-10-03T02:30:00Z',
      durationMinutes: 30,
      description: 'Scheduled maintenance for database upgrades',
      affectedServices: ['All']
    },
    {
      id: 4,
      start: '2025-11-22T09:15:00Z',
      end: '2025-11-22T09:45:00Z',
      durationMinutes: 30,
      description: 'Third-party payment gateway integration issue',
      affectedServices: ['Billing']
    },
    {
      id: 5,
      start: '2025-12-28T23:45:00Z',
      end: '2026-12-29T00:15:00Z',
      durationMinutes: 30,
      description: 'Holiday traffic spike - auto-scaling delay',
      affectedServices: ['Dashboard']
    },
    {
      id: 6,
      start: '2026-01-12T20:00:00Z',
      end: '2026-01-12T20:20:00Z',
      durationMinutes: 20,
      description: 'Brief CDN propagation delay',
      affectedServices: ['Static Assets']
    },
    {
      id: 7,
      start: '2026-02-05T10:30:00Z',
      end: '2026-02-05T11:00:00Z',
      durationMinutes: 30,
      description: 'Email delivery service outage (external)',
      affectedServices: ['Notifications']
    }
  ]
};

// Export for use in your app (e.g., import { mockSaaSData } from './mock-saas-metrics.js');
export default mockSaaSData;

// For Node.js/commonjs: module.exports = mockSaaSData;
