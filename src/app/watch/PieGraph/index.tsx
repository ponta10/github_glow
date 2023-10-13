"use client"
import { DataEntry } from '@/utils/const';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface PieGraphProps {
    data: DataEntry[];
}

const PieGraph: React.FC<PieGraphProps> = ({
    data
}) => {
  return (
    <PieChart width={440} height={240}>
      <Pie
        data={data}
        cx={220}
        cy={120}
        labelLine={false}
        outerRadius={80}
        dataKey="value"
        label={({ name, percent }) => (percent * 100 > 3 ? `${name} ${(percent * 100).toFixed(0)}%` : '')}
      >
        {
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default PieGraph;