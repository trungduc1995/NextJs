'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageComponent({item}:any){
    return(
        <Link href={item.desUrl}>
            <Image 
                src={item.fileUrl} 
                alt={item.name} 
                width={100} 
                height={100} 
                className="block w-full"
                unoptimized
            />
        </Link>
    )
}