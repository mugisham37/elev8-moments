import React from 'react'

export const SeasonalDecor = () => {
  return (
    <div className="relative h-[807px] bg-[#95AA9B]">
                <div className="max-w-[1200px] mx-auto h-full relative px-4 flex items-center">
                    <div className="flex-1 text-right pr-12">
                        <h2 className="text-[56px] font-normal text-[#F9F2EC] font-['Noiretblanc'] leading-tight mb-6">
                            SEASONAL &amp;<br />HOLIDAY DECOR</h2>
                        <p className="text-[16px] text-[#F9F2EC] font-['Raleway'] leading-relaxed">Embrace the magic of each
                            season with our enchanting holiday décor! From cozy autumn gatherings adorned with vibrant
                            leaves and pumpkins to glamorous winter wonderlands draped in twinkling lights and evergreen
                            accents, we create settings that capture the essence of the season. Our designs are infused
                            with warmth and charm, ensuring your guests feel welcomed and inspired.</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-8">
                        <div className="relative">
                            <div className="w-[480px] h-[334px] bg-[#95AA9B]"></div>
                            <div className="absolute top-4 left-4 w-[353px] h-[298px] bg-gray-200 rounded overflow-hidden">
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-[429px] h-[587px] bg-gray-200 rounded overflow-hidden"></div>
                            <div className="relative">
                                <div className="w-[267px] h-[280px] bg-[#95AA9B]"></div>
                                <div
                                    className="absolute top-4 left-4 w-[237px] h-[250px] bg-gray-200 rounded overflow-hidden">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
