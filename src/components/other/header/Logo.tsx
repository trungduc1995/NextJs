import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/">
            <img src="/images/logo.png" alt="logo" width={1} height={1} className="block w-auto max-h-[56px]" />
        </Link>
    )
}