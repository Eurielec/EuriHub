import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/LCMadridBlanco.png";
import logoEuri from "@/public/images/logo_euri.svg"

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={70} height={70} className="mr-2" />
      <Image src={logoEuri} alt="Cruip Logo" width={70} height={70} />
    </Link>
  );
}
