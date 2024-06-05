import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center w-full h-[100vh]">
        <button className="text-[30px] p-[20px] bg-blue-500 text-white rounded ">
          <Link href="/home">Get Started</Link>
        </button>
      </main>
    </>
  );
}
