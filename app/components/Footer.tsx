import { montserrat } from '../layout';

export default function Footer() {
  return (
    <footer className={`${montserrat.variable} bg-[#F5EFE7] px-[100px] max-w-[1500px] mx-auto`}>
      <div className="pt-[70px] pb-[35px] grid grid-cols-[1fr_2fr_1fr] items-center">
        {/* Left Column - Privacy Link */}
        <div className="justify-self-start">
          <a 
            href="#" 
            className="font-montserrat text-[11px] font-normal text-[#3D3D3D] tracking-[0.8px] uppercase no-underline"
          >
            PRIVACY
          </a>
        </div>

        {/* Center Column - Credit Text */}
        <div className="text-center justify-self-center">
          <div className="font-montserrat text-[11px] font-normal text-[#3D3D3D] tracking-[0.4px] leading-[19px]">
            Website Designed With Love By Indie Haus Design Co.
          </div>
          <div className="font-montserrat text-[11px] font-medium text-[#3D3D3D] tracking-[0.4px] leading-[19px] uppercase">
            GLAM HAUS DESIGN CO 2024 | ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Right Column - Legal Link */}
        <div className="justify-self-end">
          <a 
            href="#" 
            className="font-montserrat text-[11px] font-normal text-[#3D3D3D] tracking-[0.8px] uppercase no-underline text-right"
          >
            LEGAL
          </a>
        </div>
      </div>
    </footer>
  );
}