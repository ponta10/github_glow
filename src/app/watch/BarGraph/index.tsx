"use client"
import { GraphData } from '@/utils/const';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface BarGraphProps {
    data: GraphData[];
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#40B93C" />
    </BarChart>
  );
}


export default BarGraph;