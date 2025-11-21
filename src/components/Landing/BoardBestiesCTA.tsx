import Image from 'next/image';

export default function BoardBestiesCTA() {
  return (
    <>
    <section className="bg-[#1e1e1e] relative py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20">
                <div className="absolute inset-0 opacity-30"><Image alt="Background" className="w-full h-full object-cover"
                        src="/images/30.jpg" width={1600} height={400} /></div>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-['Noiretblanc'] text-white mb-1 sm:mb-2">Join our</h2>
                    <h3 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] xl:text-[66px] font-['Strings'] text-white mb-3 sm:mb-4">Elev8 Community</h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] font-['Raleway'] text-white mb-5 sm:mb-6 max-w-[90%] sm:max-w-[80%] md:max-w-[600px] mx-auto leading-relaxed">Follow us on Instagram to keep up with our latest events and offerings!</p><a href="#"
                        className="inline-block bg-[#1e1e1e] text-white border border-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-[12px] sm:text-[13px] md:text-[14px] font-['Montserrat'] tracking-[1.2px] sm:tracking-[1.4px] uppercase hover:bg-white hover:text-[#1e1e1e] transition-colors">TAKE
                        ME THERE</a>
                </div>
            </section>
    </>
)}