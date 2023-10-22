import catus from "../../public/catus.png";
import grass from "../../public/grass.png";
import plant from "../../public/plant.png";
import flower from "../../public/flower.png";
import corn from "../../public/corn.png";
import { StaticImageData } from "next/image";

export interface DataEntry {
  name: string;
  color?: string;
}

export interface GraphData extends DataEntry {
  value: number;
}

export const activeColorData: DataEntry[] = [
  { name: "commit", color: "#0088FE" },
  { name: "review", color: "#00C49F" },
  { name: "pull request", color: "#FFBB28" },
  { name: "issue", color: "#FF8042" },
];

export const langColorData: DataEntry[] = [
  { name: "JavaScript", color: "#f0db4f" },
  { name: "Python", color: "#306998" },
  { name: "Java", color: "#b07219" },
  { name: "TypeScript", color: "#007acc" },
  { name: "C#", color: "#178600" },
  { name: "C++", color: "#f34b7d" },
  { name: "PHP", color: "#4F5D95" },
  { name: "Shell", color: "#89e051" },
  { name: "C", color: "#555555" },
  { name: "Ruby", color: "#701516" },
  { name: "HCL", color: "#e86c60" },
  { name: "Rust", color: "#dea584" },
  { name: "Lua", color: "#000080" },
  { name: "Go", color: "#00ADD8" },
  { name: "Makefile", color: "#427819" },
  { name: "Kotlin", color: "#F18E33" },
  { name: "Blade", color: "#f7523f" },
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#264de4" },
];

type ScaleArray = [number, number, number];

export interface ScaleObject {
  cactus: ScaleArray;
  plant: ScaleArray;
  grass: ScaleArray;
  flower: ScaleArray;
  corn: ScaleArray;
}

interface rankData {
  name: string;
  size: number;
  image: StaticImageData;
  range: string;
}

export const ranks: rankData[] = [
  { name: "cactus", size: 64, image: catus, range: "0~299" },
  { name: "grass", size: 64, image: grass, range: "300~999" },
  { name: "plant", size: 64, image: plant, range: "1000~1999" },
  { name: "flower", size: 64, image: flower, range: "2000~3999" },
  { name: "corn", size: 64, image: corn, range: "4000~" },
];


export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}