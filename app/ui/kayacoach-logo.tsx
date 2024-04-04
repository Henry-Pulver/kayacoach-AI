import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black`}
    >
      <Image
        src={`/logo/logo-header.png`}
        width={100}
        height={50}
        className="md:block"
        alt="Logo"
      />
    </div>
  );
}
