'use client';
import dynamic from "next/dynamic";

const QuizApp = dynamic(() => import("./QuizApp"), { ssr: false });

export default function Page() {
  return <QuizApp />;
}