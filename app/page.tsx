import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/dashboard" className="underline">
        Dashboard
      </Link>
    </div>
  );
}
