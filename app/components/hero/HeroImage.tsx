import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-[-25px] z-3 md:relative md:top-auto md:right-auto md:transform-none md:w-[90%] md:mx-auto sm:w-full">
      <Image
        src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
        alt="Beautifully arranged charcuterie board with cheeses, meats, fruits, and flowers"
        width={525}
        height={545}
        priority
        className="object-cover shadow-[0px_15px_40px_rgba(0,0,0,0.2)]"
        style={{
          width: '525px',
          height: '545px',
        }}
      />
    </div>
  )
}