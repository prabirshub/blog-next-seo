import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profileImg.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
        <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
            <Image src={profileImg} alt="codebucks" className="w-full h-auto rounde" />
        </div>
        <span className="font-bold text-xl">Prabir Singh</span>
    </Link>
  )
}

export default Logo