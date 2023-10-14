"use client";
import { signIn } from "next-auth/react";
import { Button } from "..";

export default function SignInButton() {
  return (
    <Button
      text="SignIn With GitHub"
      bgcolor="bg-base"
      fontSize="lg"
      onClick={() => signIn()}
    />
  );
}
