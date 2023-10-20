"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";

function UnauthorizedPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 mt-[-24px]">
      <Image width={240} height={200} alt="ロゴ" src={logo} />
      <h2 className="text-4xl mt-[-16px] font-bold">401 Unauthorized</h2>
      <Button
        text="トップに戻る"
        bgcolor="bg-base"
        fontSize="lg"
        onClick={() => router.push("/")}
      />
    </div>
  );
}

export default UnauthorizedPage;
