import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { day: 'Mon', hours: 6.5 },
  { day: 'Tue', hours: 7.2 },
  { day: 'Wed', hours: 5.8 },
  { day: 'Thu', hours: 8.1 },
  { day: 'Fri', hours: 6.0 },
  { day: 'Sat', hours: 0 },
  { day: 'Sun', hours: 0 },
];

export function WeeklyHoursChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="hoursGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(58% 0.26 285)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="oklch(58% 0.26 285)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="oklch(88% 0.02 264)" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'oklch(48% 0.03 264)', fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'oklch(48% 0.03 264)', fontSize: 12 }}
          width={32}
        />
        <Tooltip
          contentStyle={{
            borderRadius: '12px',
            border: '1px solid oklch(88% 0.02 264)',
            boxShadow: '0 4px 24px -4px oklch(58% 0.2 285 / 0.15)',
          }}
          formatter={(value) => [`${value ?? 0}h`, 'Logged']}
        />
        <Area
          type="monotone"
          dataKey="hours"
          stroke="oklch(58% 0.26 285)"
          strokeWidth={2}
          fill="url(#hoursGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
