"use client";
import { signOut } from "next-auth/react";
import { Button } from "..";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      text="SignOut"
      bgcolor="bg-base"
      onClick={() => {
        signOut();
        router.push("/");
      }}
    />
  );
}
