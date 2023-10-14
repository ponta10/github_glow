"use client"
import { GraphData } from '@/utils/const';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

interface PieGraphProps {
    data: GraphData[];
}

const PieGraph: React.FC<PieGraphProps> = ({
    data
}) => {
    const sortedData = [...data].sort((a, b) => b.value - a.value);
  return (
    <PieChart width={440} height={240}>
      <Pie
        data={sortedData}
        cx={220}
        cy={120}
        labelLine={false}
        outerRadius={80}
        dataKey="value"
        label={({ name, percent }) => (percent * 100 > 3 ? `${name} ${(percent * 100).toFixed(0)}%` : '')}
      >
        {
          sortedData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default PieGraph;