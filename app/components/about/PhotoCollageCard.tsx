import Image from 'next/image';

export default function PhotoCollageCard() {
  return (
    <div 
      className="md:absolute md:left-[-50px] relative left-0 z-1 bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.1)] p-0 md:w-[315px] w-full max-w-[350px] md:h-[460px] h-auto md:rotate-[-2.5deg] rotate-0"
      style={{
        borderRadius: '0px'
      }}
    >
      {/* Image grid with exact spacing */}
      <div className="grid grid-cols-2 gap-2 h-full">
        {/* Top image - full width */}
        <div className="col-span-2 md:h-[240px] h-[200px]">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Owner at vineyard with wine barrels"
            width={315}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom left image */}
        <div className="md:h-[212px] h-[180px]">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Lifestyle styling shot"
            width={145}
            height={212}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom right image */}
        <div className="md:h-[212px] h-[180px]">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
            alt="Preparing charcuterie board"
            width={162}
            height={212}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}