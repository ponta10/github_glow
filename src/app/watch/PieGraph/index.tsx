"use client"
import { DataEntry } from '@/utils/const';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface PieGraphProps {
    data: DataEntry[];
}

export const PieGraph: React.FC<PieGraphProps> = ({
    data
}) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        dataKey="value"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
