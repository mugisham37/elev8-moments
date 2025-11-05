
import { StarIcon } from './StarIcon';

interface FeatureItemProps {
  text: string;
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <li className="flex flex-row gap-[10px] sm:gap-[11px] xl:gap-[12px] items-start pb-[20px] sm:pb-[22px] xl:pb-[24px]">
      <StarIcon className="w-[20px] h-[20px] shrink-0 mt-[3px]" />
      <p className="text-[15px] sm:text-[15.5px] xl:text-[16px] leading-[24px] sm:leading-[25px] xl:leading-[26px] tracking-[0.005em] text-[#3D3835] m-0">
        {text}
      </p>
    </li>
  );
}
