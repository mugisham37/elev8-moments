import Image from 'next/image';

export default function Gallery2() {
  return (
    <>
   <section className="bg-[#f9f2ec] py-16">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="border border-black p-4 relative">
                        <div className="overflow-hidden">
                            <div className="flex gap-1"><img alt="Event 1" className="h-[641px] object-cover"
                                    src="https://picsum.photos/600/700" /><img alt="Event 2"
                                    className="h-[641px] object-cover" src="https://picsum.photos/600/700" /><img
                                    alt="Event 3" className="h-[641px] object-cover" src="https://picsum.photos/600/700" />
                            </div>
                        </div><button className="absolute right-8 bottom-8 hover:opacity-70"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-chevron-right w-12 h-12 text-[#95aa9b]"
                                aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg></button>
                    </div>
                </div>
            </section>
    </>
    )}