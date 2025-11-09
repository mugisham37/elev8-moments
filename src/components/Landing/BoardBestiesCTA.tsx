import Image from 'next/image';

export default function BoardBestiesCTA() {
  return (
    <>
    <section className="bg-[#1e1e1e] relative py-16">
                <div className="absolute inset-0 opacity-30"><Image alt="Background" className="w-full h-full object-cover"
                        src="https://picsum.photos/1600/400" width={1600} height={400} /></div>
                <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-[54px] font-['Noiretblanc'] text-white mb-2">Join our</h2>
                    <h3 className="text-[66px] font-['Strings'] text-white mb-4">Board Besties</h3>
                    <p className="text-[16px] font-['Raleway'] text-white mb-6">Follow us on Instagram to keep up with our
                        latest releases and specials!</p><a href="#"
                        className="inline-block bg-[#1e1e1e] text-white border border-white px-8 py-4 text-[14px] font-['Montserrat'] tracking-[1.4px] uppercase hover:bg-white hover:text-[#1e1e1e] transition-colors">TAKE
                        ME THERE</a>
                </div>
            </section>
    </>
)}