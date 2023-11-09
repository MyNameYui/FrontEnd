import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import KonHackWebLogo from '../../src/assets/konhackweblogo.png';

const LabFooter = () => {
  return (
    <div className="pt-48">
            <div className="flex flex-col items-center justify-center sm:flex-row">
              <Link href="" className="text-lg justify-start flex items-center">
                <IoIosArrowBack className="text-white text-sm" /> ไปเนื้อหาก่อนหน้า
              </Link>
              <div className="px-4 sm:px-64 pt-4 sm:pt-0">
                <Image
                  src={KonHackWebLogo}
                  className='px-2'
                  width={96}
                  height={96}
                  alt="Logo"
                />
              </div>
              <Link href="" className="text-lg justify-end flex items-center">
                ไปเนื้อหาถัดไป <IoIosArrowForward className="text-white text-sm" />
              </Link>
            </div>
          </div>
  )
}

export default LabFooter