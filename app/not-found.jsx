import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-yellow-600">404 - Страницата не е намерена</h1>
      <p className="text-lg mb-6 max-w-xl">
        Съжаляваме, но страницата, която търсите, не съществува или е преместена. Моля, проверете адреса или се върнете към началната страница.
      </p>
      <Link href="/" className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition">
        Към началната страница
      </Link>
    </div>
  );
} 