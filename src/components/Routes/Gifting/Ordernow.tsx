import React from 'react'

export default function Ordernow() {
  return (
     <div className="bg-[#314F39] py-16">
                <div className="max-w-[1200px] mx-auto px-4">
                    <p className="text-[#F9F2EC] text-[30px] font-[Strings] mb-8">Perfect For</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/22.jpg")' }}>
                        </div>
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/23.jpg")' }}>
                        </div>
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/24.jpg")' }}>
                        </div>
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/25.jpg")' }}>
                        </div>
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/26.jpg")' }}>
                        </div>
                        <div className="aspect-square bg-cover bg-center"
                            style={{ backgroundImage: 'url("/images/27.jpg")' }}>
                        </div>
                    </div>
                    <div className="text-center mt-12"><a href="#"
                            className="inline-block bg-[#F9F2EC] text-[#314F39] px-12 py-4 text-[14px] font-[Raleway] uppercase tracking-[1.4px] hover:opacity-90 transition-opacity">CONTACT US</a></div>
                </div>
            </div>
  )
}
