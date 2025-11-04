export default function AboutHeader() {
  return (
    <div>
      {/* "ABOUT US" label with decorative line */}
      <div className="flex items-center gap-3 mb-2">
        <span 
          className="font-montserrat uppercase"
          style={{
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '3px',
            color: '#5a5a5a'
          }}
        >
          ABOUT US
        </span>
        <div 
          className="bg-[#d4b896]"
          style={{
            width: '85px',
            height: '1px'
          }}
        />
      </div>
      
      {/* "Meet Megan" heading */}
      <h1 
        className="font-allura mb-1"
        style={{
          fontSize: '68px',
          fontWeight: 400,
          color: '#2c2c2c',
          lineHeight: 1.1,
          marginTop: '8px'
        }}
      >
        Meet Megan
      </h1>
      
      {/* Subtitle */}
      <p 
        className="font-montserrat uppercase mb-8"
        style={{
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '2.5px',
          color: '#8a8a8a',
          marginBottom: '32px'
        }}
      >
        OWNER OF GLAM HAUS DESIGN CO.
      </p>
    </div>
  );
}