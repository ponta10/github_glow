"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataEntry {
  month: number;
  value: number;
}

const data: DataEntry[] = [
  { month: 1, value: 40 },
  { month: 2, value: 53 },
  { month: 3, value: 20 },
  { month: 4, value: 25 },
  { month: 5, value: 50 },
  { month: 6, value: 15 },
  { month: 7, value: 30 },
  { month: 8, value: 40 },
  { month: 9, value: 45 },
  { month: 10, value: 35 },
  { month: 11, value: 80 },
  { month: 12, value: 30 }
];

export const BarGraph: React.FC = () => {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#40B93C" />
    </BarChart>
  );
}
