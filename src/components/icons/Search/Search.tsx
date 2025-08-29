// src/icons/Right/Right.tsx
import { SVGProps } from "react";

export default function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-search-icon lucide-search'
      {...props}
    >
      <path d='m21 21-4.34-4.34' />
      <circle cx='11' cy='11' r='8' />
    </svg>
  );
}
