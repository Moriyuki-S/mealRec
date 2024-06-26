"use client"

import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import { useAtom } from 'jotai';
import { userAtom } from '../states/store/authAtom';

import Link from "next/link";

export default function Home() {
  const [user, setUser] = useAtom(userAtom);
  console.log(user);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-4xl text-black text-center font-serif">
        <h1>Meet a new meal.</h1>
        <p>毎日同じメニュー...</p>
        <p>献立を決めるのが面倒...</p>
        <p>そんな食卓に革命を。</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-center">
        {user ? (
          <Link href="/cook/question">
            <GreenRoundButton>質問に回答して料理を生成→</GreenRoundButton>
          </Link>
        ) : (<p>ログアウト状態</p>)}
      </div>
    </>
  );
}