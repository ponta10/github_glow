import SignOutButton from "@/components/Button/SIgnOut";
import WatchDataButton from "@/components/Button/WatchData";
import { fetchArticles } from "@/function/articles/getQiita";
import { fetchZennArticles } from "@/function/articles/getZenn";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { getTrendingQuestions } from "@/function/articles/getOverflow";
import WatchFieldButton from "@/components/Button/WatchField";
import { Container } from "./Container";

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
        <Container items={quiitaArticles} name="Qiita" image="/quiita.png" />
        <Container items={zennArticles} name="Zenn" />
        <Container
          items={overflows}
          name="StackOverFlow"
          image="/stackoverflow.jpeg"
        />
      </div>
    </>
  );
};

export default article;
