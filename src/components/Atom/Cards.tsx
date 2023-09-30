import React from 'react';

const data = [
  {
    id: 1,
    title: 'By teachers and students',
    para: 'Millions of teachers and students unleash the magic of learning with QuizMe? Introduce new topics, review, reward, and collect data for formative assessment.',
    video: 'https://assets-v2.lottiefiles.com/a/2c19dc36-255b-11ee-bf7f-a332a4cfcfc8/kI4vNcg8EU.mp4',
  },
  {
    id: 2,
    title: 'By office superheroes',
    para: 'Make learning awesome in a business setting, too! Companies of all sizes use QuizMe? in training, presentations, team building and events.',
    video: 'https://cdnl.iconscout.com/lottie/premium/preview-watermark/boy-in-superhero-costume-8704064-7016713.mp4?h=700',
  },
  {
    id: 3,
    title: 'By families and friends',
    para: 'Birthdays, weddings, holidays, game nights, family dinners, trivia – QuizMe? is the secret ingredient that will make any party or gathering even more awesome.',
    video: 'https://cdnl.iconscout.com/lottie/premium/preview-watermark/boy-in-superhero-costume-8704064-7016713.mp4?h=700',
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-3">
      {data.map((item, index) => (
        <div className=" w-full px-6 sm:w-[350px] items-center sm:p-3 p-2 " key={index}>
          <div className="h-auto w-full mx-auto sm:w-full mb-3 sm:mb-6">
            <video src={item.video} autoPlay loop muted></video>
          </div>
          <div>
            <h3 className="sm:text-xl text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
            <p className="whitespace-normal  mb-3 sm:mb-0 text-slate-600 text-sm sm:text-base">{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
