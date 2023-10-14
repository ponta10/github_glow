"use client";
import { useRouter } from "next/navigation";
import { Button } from "..";

export default function WatchFieldButton() {
  const router = useRouter();
  return <Button text="畑を見る" onClick={() => router.push("/")} />;
}
