export interface DataEntry {
    name: string;
    value?: number;
    color?: string;
}
  
export const langData: DataEntry[] = [
    { name: 'TypeScript', color: '#0088FE' },
    { name: 'PHP', color: '#00C49F' },
];

export const activeColorData: DataEntry[] = [
    { name: 'commit', value: 50, color: '#0088FE' },
    { name: 'review', value: 30, color: '#00C49F' },
    { name: 'pull request', value: 30, color: '#FFBB28' },
    { name: 'issue', value: 30, color: '#FF8042' },
]

export const langColorData: DataEntry[] = [
    { name: 'JavaScript', color: '#f0db4f' },
    { name: 'Python', color: '#306998' },
    { name: 'Java', color: '#b07219' },
    { name: 'TypeScript', color: '#007acc' },
    { name: 'C#', color: '#178600' },
    { name: 'C++', color: '#f34b7d' },
    { name: 'PHP', color: '#4F5D95' },
    { name: 'Shell', color: '#89e051' },
    { name: 'C', color: '#555555' },
    { name: 'Ruby', color: '#701516' },
    { name: 'HCL', color: '#e86c60' },
    { name: 'Rust', color: '#dea584' },
    { name: 'Lua', color: '#000080' },
    { name: 'Go', color: '#00ADD8' },
    { name: 'Makefile', color: '#427819' },
    { name: 'Kotlin', color: '#F18E33' },
    { name: 'Blade', color: '#f7523f' },
    { name: 'HTML', color: '#e34c26' },
    { name: 'CSS', color: '#264de4' },
];