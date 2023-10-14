export interface DataEntry {
    name: string;
    color?: string;
}

export interface GraphData extends DataEntry {
    value: number;
}

export const activeColorData: DataEntry[] = [
    { name: 'commit', color: '#0088FE' },
    { name: 'review', color: '#00C49F' },
    { name: 'pull request', color: '#FFBB28' },
    { name: 'issue', color: '#FF8042' },
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

type ScaleArray = [number, number, number];

export interface ScaleObject {
  cactus: ScaleArray;
  plant: ScaleArray;
  grass: ScaleArray;
  flower: ScaleArray;
  corn: ScaleArray;
};