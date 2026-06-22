import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-custom-gradientblue to-custom-gradientwhite dark:from-custom-gradientdarkgrey dark:to-custom-gradientgrey px-4 text-center">
      {/* 404 number */}
      <h1 className="text-[8rem] sm:text-[12rem] font-extrabold leading-none text-blue-700 dark:text-blue-400 select-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mt-2 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-10 text-base sm:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Head back to the portfolio.
      </p>

      {/* Back home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Portfolio
      </Link>
    </div>
  );
}
