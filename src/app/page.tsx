import Buttons from '@/components/UI/Buttons';
import { IconDivider } from '@/assets/svg/icon';
import Cards from '@/components/Atom/Cards';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="">
        <div className="bg-purple-200 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] py-6 sm:py-12 px-6 max-w-screen-xl mx-auto ">
            <div className=" pt-7 pb-4 sm:py-7 order-2 sm:order-1">
              <h2 className="text-xl sm:text-4xl font-bold mb-3 text-slate-900">What is QuizMe?</h2>
              <p className="text-sm whitespace-normal mb-3 sm:mb-0 text-slate-800  sm:text-base">
                Quizme? is a game-based learning platform that makes it easy to create, and play learning games in minutes. Unleash the fun in classrooms, office and living rooms!
              </p>
              <Link href={'http://cloud-moored-buckthorn.glitch.me/'} className="hidden ">
                <Buttons variant="primary" size={'large'} className="sm:grid sm:w-[184px] sm:mt-4">
                  Let's Play
                </Buttons>
              </Link>

              <Link href={'http://cloud-moored-buckthorn.glitch.me/'} className="sm:hidden">
                <Buttons variant="primary" size={'medium'} className="w-[120px] ">
                  Let's Play
                </Buttons>
              </Link>
            </div>
            <div className="h-auto w-full order-1 sm:order-2 rounded-2xl overflow-hidden">
              <video src="https://cdn.soundstripe.com/uploads/video/previews/043310992.mp4" autoPlay loop muted></video>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h2 className="text-center sm:my-12 my-8 font-bold text-2xl text-slate-900">How it Works?</h2>

            <div className="px-6 max-w-[1200px] sm:mx-auto sm:rounded-xl sm:overflow-hidden">
              <video src="https://cdn.soundstripe.com/uploads/video/previews/064409264.mp4" className="rounded-2xl overflow-hidden" autoPlay loop muted></video>
            </div>
          </div>
        </div>

        <div className="grid place-items-center ">{/* <IconDivider width="auto" className="sm:px-[30px] sm:grid max-w-screen-xl my-3 sm:my-9" /> */}</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] py-6 sm:py-4 px-6 max-w-screen-xl mx-auto ">
          <div className=" flex flex-col justify-center pt-7 pb-4 sm:py-7 order-2 sm:order-1">
            <h2 className="sm:text-4xl text-lg font-bold mb-3 text-slate-900">Create</h2>
            <p className="whitespace-normal mb-3 sm:mb-0 text-slate-600 text-sm sm:text-base">
              Create a fun learning game in minutes – we call these 'QuizMe?'. The format and number of questions is up to you. Add videos, images and diagrams to your questions to amplify engagement.
            </p>
          </div>
          <div className="h-auto w-[240px] mx-auto sm:w-[450px] order-1 sm:order-2">
            <video src="https://assets-v2.lottiefiles.com/a/3da49710-117f-11ee-8a00-9f4918866211/dQiDehAMli.mp4" autoPlay loop muted></video>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] py-6 sm:py-4 px-6 max-w-screen-xl mx-auto ">
          <div className=" flex flex-col justify-center pt-7 pb-4 sm:py-7 order-2 sm:order-2">
            <h2 className="sm:text-4xl font-bold text-lg mb-3 text-slate-900">Play</h2>
            <p className="whitespace-normal mb-3 sm:mb-0 text-slate-600 text-sm sm:text-base">
              QuizMe? are best played in a group setting. To join a game, you need a unique PIN. If you’re the game host, you need a big screen. Players answer on their own devices, while questions are displayed on a shared screen. In
              addition to live games, you can also send kahoot challenges that players complete at their own pace – for example, for homework or remote training.
            </p>
          </div>
          <div className="h-auto mx-auto w-[240px] sm:w-[450px]  order-1 sm:order-1">
            <video src="https://assets-v2.lottiefiles.com/a/6a9314e2-1178-11ee-a860-d7309ab15223/1WSR6xlEUo.mp4" autoPlay loop muted></video>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] py-6 sm:py-4 px-6 max-w-screen-xl mx-auto ">
          <div className=" flex flex-col justify-center pt-7 pb-4 sm:py-7 order-2 sm:order-1">
            <h2 className="sm:text-4xl text-lg font-bold mb-3 text-slate-900">Share</h2>
            <p className="whitespace-normal mb-3 sm:mb-0 text-slate-600 text-sm sm:text-base">
              After a game, encourage players to create and share their own QuizMe? With one of our premium plans for schools or business, you can co-create games with your colleagues and save time on finding relevant QuizMe? for your class
              or training session.
            </p>
          </div>
          <div className="h-auto w-[240px] mx-auto sm:w-[450px] order-1 sm:order-2">
            <video src="https://assets-v2.lottiefiles.com/a/e98ca1a8-1170-11ee-96f7-b79ac7625595/hk16UFxCBk.mp4" autoPlay loop muted></video>
          </div>
        </div>

        <div className="grid place-items-center ">{/* <IconDivider width="auto" className="sm:px-[30px] sm:grid sm:max-w-screen-xl my-3 sm:my-9" /> */}</div>

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-center sm:my-12 my-8 font-bold text-2xl text-slate-900 ">Enjoyed Worldwide in Various Settings</h2>
          </div>
          <div className="sm:max-w-screen-xl sm:mx-auto">
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
}
