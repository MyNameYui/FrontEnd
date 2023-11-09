import { Noto_Sans_Thai } from 'next/font/google';
const notosansthaifont = Noto_Sans_Thai({ subsets: ['thai'] });

const SelectText = () => {
  return (
    <div className="text-center relative">
        <div className="pb-4 pt-16 ">
        <span className={`text-white text-2xl md:text-5xl font-bold font-inter ${notosansthaifont.className}`}>
        เรียนรู้เกี่ยวกับ<br />
        </span>
        </div>
        <div>
        <span className={`text-orange-600 text-2xl md:text-6xl font-bold font-inter ${notosansthaifont.className}`}>
        Web Application Hacking
         </span>
        </div>
      </div>
  )
}

export default SelectText
