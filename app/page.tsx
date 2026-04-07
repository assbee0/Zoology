import Link from "next/link";
import { getAllClasses } from "@/lib/data";

export default function Home() {
  const classes = getAllClasses();

  return (
    <div>
      <h1>スモモ動物図鑑</h1>

      {classes.map(c => (
        <div key={c}>
          <Link href={`/${c}`}>{c}</Link>
        </div>
      ))}
    </div>
  );
}