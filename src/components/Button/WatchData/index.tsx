"use client";
import { useRouter } from "next/navigation";
import { Button } from "..";

export default function WatchDataButton() {
  const router = useRouter();
  return <Button text="データを見る" onClick={() => router.push("/watch")} />;
}
