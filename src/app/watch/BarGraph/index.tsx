"use client"
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DataEntry {
  month: string;
  value: number;
}

interface BarGraphProps {
    data: DataEntry[];
}

const BarGraph: React.FC<BarGraphProps> = ({
    data
}) => {
  return (
    <BarChart
      width={660}
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


export default BarGraph;