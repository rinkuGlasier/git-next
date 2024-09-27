import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './font';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white bg-blue-500 py-10 rounded-xl px-5 `}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className={`${lusitana.className} text-[44px] `}>Acme</p>
    </div>
  );
}
