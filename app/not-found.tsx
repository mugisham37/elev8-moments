import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[rgb(249,242,236)] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 
          className="text-6xl font-normal text-[rgb(30,30,30)] mb-4"
          style={{ fontFamily: 'Noiretblanc' }}
        >
          404
        </h1>
        <h2 
          className="text-2xl font-normal text-[rgb(30,30,30)] mb-6"
          style={{ fontFamily: 'Strings' }}
        >
          Page Not Found
        </h2>
        <p 
          className="text-[rgb(30,30,30)] mb-8 leading-relaxed"
          style={{ fontFamily: 'Montserrat' }}
        >
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link 
          href="/"
          className="inline-block border border-[rgb(30,30,30)] px-8 py-3 text-[rgb(30,30,30)] hover:bg-[rgb(30,30,30)] hover:text-[rgb(249,242,236)] transition-colors duration-300"
          style={{ fontFamily: 'Montserrat' }}
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}