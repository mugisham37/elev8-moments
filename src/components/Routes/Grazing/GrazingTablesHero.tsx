import Image from 'next/image';

export default function GrazingTablesHero() {
  return (
    <section className="bg-[#efd8c9] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#efd8c9] -left-4 -top-4 w-[281px] h-[383px]"></div><Image
                                alt="Grazing table" className="relative w-[259px] h-[346px] object-cover"
                                src="https://static.showit.co/800/G-ybSB7sOWRyN4b20KmF3g/shared/img_9735_jpg.jpg"
                                style={{ objectPosition: '50% 70%' }} width={259} height={346} />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#efd8c9] -right-4 -top-4 w-[604px] h-[496px]"></div>
                            <div className="relative bg-[#efd8c9] p-8">
                                <h2 className="text-[49px] leading-[58.8px] text-[#1e1e1e] uppercase mb-4"
                                    style={{ fontFamily: 'Noiretblanc' }}>experiences</h2>
                                <p className="text-[14px] leading-[25.2px] tracking-[1.4px] text-[#1e1e1e] uppercase mb-6 font-medium"
                                    style={{ fontFamily: 'Montserrat' }}>ELEVATE YOUR MOMENTS TO THE NEXT LEVEL</p>
                                <p className="text-[16px] leading-[25.6px] text-[#1e1e1e] mb-6"
                                    style={{ fontFamily: 'Raleway' }}>At Elev8 Moments, we go beyond simply planning activities – we curate intentional, meaningful experiences that will leave a lasting impression on your guests. Whether you&apos;re hosting a soulful retreat or organizing a creative team gathering, our team is here to bring your vision to life with thoughtful, memorable presentations. Let us handle the details while you enjoy the connection factor!</p><a href="#"
                                    className="inline-block border border-[#1e1e1e] px-8 py-4 hover:bg-[#1e1e1e] hover:text-[#f9f2ec] transition-colors"><span
                                        className="text-[14px] leading-[30.8px] tracking-[1.4px] text-[#1e1e1e] uppercase hover:text-[#f9f2ec]"
                                        style={{ fontFamily: 'Raleway' }}>BOOK AN EXPERIENCE</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
}