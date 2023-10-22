import SignOutButton from "@/components/Button/SIgnOut";
import WatchDataButton from "@/components/Button/WatchData";
import { fetchArticles } from "@/function/articles/getQiita";
import { fetchZennArticles } from "@/function/articles/getZenn";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { Card } from "@/components/Card";
import { getTrendingQuestions } from "@/function/articles/getOverflow";
import WatchFieldButton from "@/components/Button/WatchField";

const article = async () => {
  const quiitaArticles = await fetchArticles();
  const zennArticles = await fetchZennArticles();
  const overflows = await getTrendingQuestions();

  return (
    <>
      <header className="fixed top-0 left-0 z-10 w-screen h-24 bg-white shadow-md flex items-center justify-between px-10">
        <Image width={180} height={80} alt="logo" src={logo} priority />
        <div className="flex gap-4 items-center">
          <WatchDataButton />
          <WatchFieldButton />
          <SignOutButton />
        </div>
      </header>
      <div className="flex flex-row justify-around mt-24 p-4">
        <div className="flex flex-col gap-8 items-center mb-8 w-1/3">
          <h2 className="text-xl font-bold mb-4">Qiita</h2>
          {quiitaArticles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              link={article.link}
              image="/quiita.png"
              date={article.pubDate}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8 items-center mb-8 w-1/3">
          <h2 className="text-xl font-bold mb-4">Zenn</h2>
          {zennArticles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              link={article.link}
              image={article.image}
              date={article.pubDate}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8 items-center mb-8 w-1/3">
          <h2 className="text-xl font-bold mb-4">Stack Overflow</h2>
          {overflows.map((overflow, index) => (
            <Card
              key={index}
              title={overflow.title}
              link={overflow.link}
              image="/stackoverflow.jpeg"
              date={new Date(
                Number(overflow.pubDate) * 1000,
              ).toLocaleDateString()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default article;
