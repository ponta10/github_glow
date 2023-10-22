import React from "react";
import SignOutButton from "@/components/Button/SIgnOut";
import Image from "next/image";
import logo from "../../../public/logo.png";
import WatchFieldButton from "@/components/Button/WatchField";
import dynamic from "next/dynamic";
import { getGithubDetailData } from "@/function/getGithubDetailData";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/libs/next-auth/options";
import { GraphContainer } from "./GraphContainer";
import { getDate } from "@/function/getDate";
import UnauthorizedPage from "../unauthorized";
import { WatchArticleButton } from "@/components/Button/WatchArticle";
const PieGraph = dynamic(() => import("./PieGraph"), {
  ssr: false,
});

const BarGraph = dynamic(() => import("./BarGraph"), {
  ssr: false,
});

const watch = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    return <UnauthorizedPage />;
  }
  const { today, oneYearAgo } = getDate();
  const githubData = await getGithubDetailData(
    session?.accessToken ?? "",
    oneYearAgo,
    today,
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-screen h-24 bg-white shadow-md flex items-center justify-between px-10">
        <Image
          width={180}
          height={80}
          alt="logo"
          src={logo}
          priority
          style={{ width: "auto" }}
        />
        <div className="flex gap-4">
          <WatchFieldButton />
          <WatchArticleButton />
          <SignOutButton />
        </div>
      </header>
      <div
        style={{ height: "calc(100vh - 160px)" }}
        className="flex items-center justify-center gap-16 mt-28"
      >
        <GraphContainer text="月別コントリビュート">
          <BarGraph data={githubData.monthlyContributions} />
        </GraphContainer>
        <div className="flex flex-col gap-4">
          <GraphContainer text="言語割合">
            <PieGraph data={githubData.repoLanguageData} />
          </GraphContainer>
          <GraphContainer text="コントリビュート割合">
            <PieGraph data={githubData.activeData} />
          </GraphContainer>
        </div>
      </div>
    </>
  );
};

export default watch;
