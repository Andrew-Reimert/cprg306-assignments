import Link from "next/link";

export default function MainPage() {
  return (
    <main>
      <h1 class="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li> <Link href="week-2">week-2</Link> </li>
        <li> <Link href="week-3">week-3</Link> </li>
      </ul>
    </main>
  );
}