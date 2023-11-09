import { Noto_Sans_Thai } from 'next/font/google';
const notosansthaifont = Noto_Sans_Thai({ subsets: ['thai'] });

const CyberSecText = () => {
  return (
    <div className="text-center relative z-10">
      <div className="pb-4">
        <span className={`text-white text-3xl md:text-5xl font-bold font-inter ${notosansthaifont.className}`}>
          เรียนรู้พื้นฐานฟรี ในด้าน<br />
        </span>
      </div>
      <div>
        <span className={`text-orange-600 text-3xl md:text-6xl font-bold font-inter ${notosansthaifont.className}`}>
          Cyber Security
        </span>
      </div>
    </div>
  )
}

export default CyberSecText
