import { Noto_Sans_Thai } from 'next/font/google';
const notosansthaifont = Noto_Sans_Thai({ subsets: ['thai'] });


const ScoreComponent = () => {
  return (
    <div className='flex pl-32'>
    <div className={`${notosansthaifont.className}`}>
        <div className="text-4xl pb-2 font-light">
            <p>ให้คะแนน</p>
        </div>
        <div>
        <input
            type="text"
            name="answer"
            className="rounded-lg w-16 sm:w-96 h-12 sm:h-14 flex-shrink-0 bg-white rounded-8 text-gray-900 px-4 outline-none focus:ring-2 focus:ring-white-600"
          />
          </div>
    </div>
    </div>
  )
}

export default ScoreComponent