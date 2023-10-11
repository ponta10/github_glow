export interface DataEntry {
    name: string;
    value: number;
    color?: string;
  }
  
export const langData: DataEntry[] = [
    { name: 'TypeScript', value: 50, color: '#0088FE' },
    { name: 'PHP', value: 30, color: '#00C49F' },
];

export const activeData: DataEntry[] = [
    { name: 'commit', value: 50, color: '#0088FE' },
    { name: 'review', value: 30, color: '#00C49F' },
    { name: 'pull request', value: 30, color: '#FFBB28' },
    { name: 'issue', value: 30, color: '#FF8042' },
] 