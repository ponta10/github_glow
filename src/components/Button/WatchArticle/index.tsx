"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '..';

export const WatchArticleButton = () => {
    const router = useRouter();
    return <Button text="記事を見る" onClick={() => router.push("/article")} />;
}
