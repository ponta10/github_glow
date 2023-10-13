import { getGithubData } from "@/function/getGithubData";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "@/libs/next-auth/options";
import SignInButton from "../components/Button/SignIn";
import Image from "next/image";
import logoWhite from "../../public/logoWhite.png";
import logo from "../../public/logo.png";
import field from "../../public/field.jpg";
import WatchDataButton from "@/components/Button/WatchData";
import SignOutButton from "@/components/Button/SIgnOut";
import { DesertScene } from "@/components/3d/ThreeScene";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return (
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${field.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-screen h-screen relative"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 flex flex-col gap-8">
          <Image width={600} height={80} alt="logo" src={logoWhite} priority />
          <SignInButton />
          <p className="text-white text-xl">
            〜あなたのGitHubに応じて畑が育つ〜
          </p>
        </div>
      </div>
    );
  }

  const githubData = await getGithubData(
    session?.accessToken ?? "",
    "2022-09-01T00:00:00",
    "2023-08-31T00:00:00"
  );

  return (
    <>
    <header className="fixed top-0 left-0 z-10 w-screen h-24 bg-white shadow-md flex items-center justify-between px-10">
      <Image width={180} height={80} alt="logo" src={logo} priority style={{ width: "auto" }} />
      <div className="flex gap-4">
        <WatchDataButton />
        <SignOutButton />
      </div>
    </header>
    <DesertScene data={githubData.total} />
  </>
  );
}
