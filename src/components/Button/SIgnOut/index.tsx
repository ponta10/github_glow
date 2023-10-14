"use client";
import { signOut } from "next-auth/react";
import { Button } from "..";

export default function SignOutButton() {
  return <Button text="SignOut" bgcolor="bg-base" onClick={() => signOut()} />;
}
