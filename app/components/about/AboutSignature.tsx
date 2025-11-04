export default function AboutSignature() {
  return (
    <div>
      {/* "Cheers!" text */}
      <p 
        className="font-crimson"
        style={{
          fontSize: '15px',
          fontWeight: 400,
          color: '#3d3d3d',
          marginBottom: '8px'
        }}
      >
        Cheers!
      </p>
      
      {/* Signature line */}
      <div className="flex items-baseline">
        <span 
          className="font-allura inline mr-[6px]"
          style={{
            fontSize: '20px',
            color: '#3d3d3d'
          }}
        >
          xoxo
        </span>
        <span 
          className="font-allura inline"
          style={{
            fontSize: '42px',
            color: '#2c2c2c'
          }}
        >
          Megan
        </span>
      </div>
    </div>
  );
}