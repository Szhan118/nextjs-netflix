import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return <Link href="/">
        <a>
            <Image 
                src={`/images/netflix-logo.svg`}
                alttext="Nextflix Logo"
                width={160}
                height={60}
            />
        </a>
    </Link>
}

export default Logo