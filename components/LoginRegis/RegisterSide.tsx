import React from 'react'
const notosansthaifont = Noto_Sans_Thai({ subsets: ['thai'] });
import LogoImage from "../../src/assets/konhackweblogo.png";
import Image from 'next/image';
import { Noto_Sans_Thai } from 'next/font/google';

// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX
// WANYENFIX

const RegisterSide = () => {
  return (
    <div>
            <div>
            <div className={`text-center ${notosansthaifont.className} text-5xl font-bold`}>
                <div>
                    <label className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #E45E07 54.7%, #ECC20C 100%)' }}>
                    เพราะเราเองก็มีความฝันที่เหมือนกัน
                    </label>
                </div>
                <div>
                    <label className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #E45E07 54.7%, #ECC20C 100%)' }}>
                    คุณเองก็เป็นแฮกเกอร์ได้
                    </label>
                </div>
            </div>
            </div>
            

            <div className="">
                <div className="flex items-center justify-center">
                    <div className="pr-3">
                        <Image src={LogoImage} width={48} height={48} alt="Logo" />
                    </div>
                    <div className="text-white font-inter text-3xl font-bold">
                            KONHACKWEB
                    </div>
                </div>
            </div>

    </div>
  )
}

export default RegisterSide