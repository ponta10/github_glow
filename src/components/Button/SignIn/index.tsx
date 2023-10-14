"use client";
import { signIn } from "next-auth/react";
import { Button } from "..";

export default function SignInButton() {
  return (
    <Button
      text="SignIn"
      bgcolor="bg-base"
      fontSize="lg"
      onClick={() => signIn()}
    />
  );
}
