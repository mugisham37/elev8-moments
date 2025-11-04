import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import AboutSignature from './AboutSignature';

export default function AboutTextCard() {
  return (
    <div 
      className="relative z-2 bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.15)] md:w-[550px] w-full max-w-[500px] md:min-h-[580px] min-h-auto md:rotate-2 rotate-0 md:p-[60px_70px] p-[40px_30px]"
      style={{
        borderRadius: '0px'
      }}
    >
      <AboutHeader />
      <AboutContent />
      <AboutSignature />
    </div>
  );
}