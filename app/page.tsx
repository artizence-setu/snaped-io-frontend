import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/dashboard" className="underline">
        Dashboard
      </Link>
      <Link href="/sign-in" className="underline">
        Login
      </Link>
      <Link href="/sign-up" className="underline">
        Sign-Up
      </Link>
    </div>
  );
}
