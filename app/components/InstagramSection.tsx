import { dancingScript, playfair } from '../layout';
import Image from 'next/image';

export default function InstagramSection() {
  // Array of charcuterie board images from Unsplash
  const instagramImages = [
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=100&h=100&fit=crop&crop=center',
  ];

  return (
    <section className={`${dancingScript.variable} ${playfair.variable} bg-[#F5EFE7] px-[100px] max-w-[1500px] mx-auto`}>
      <div className="pt-[80px] pb-[140px]">
        {/* Instagram Heading */}
        <h2 className="font-dancing text-[50px] font-normal text-[#3D3D3D] text-center mb-[45px]">
          Follow Us On Instagram!
        </h2>

        {/* Image Grid Container */}
        <div className="relative">
          {/* Image Grid */}
          <div className="grid grid-cols-8 grid-rows-2 gap-[10px] justify-center">
            {instagramImages.map((src, index) => (
              <div key={index} className="w-[100px] h-[100px]">
                <Image
                  src={src}
                  alt={`Charcuterie board ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* "Let's Get Social" Overlay */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-center w-[400px] px-[40px] py-[20px] z-10">
            <div className="font-playfair text-[30px] font-normal block">
              Let&apos;s Get
            </div>
            <div className="font-dancing text-[38px] font-normal block">
              Social
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}