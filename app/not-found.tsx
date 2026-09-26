import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site-page" style={{ height: "calc(100vh - 164px)" }}>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return to Home</Link>
    </div>
  );
}