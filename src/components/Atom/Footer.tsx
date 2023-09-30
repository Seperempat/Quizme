import Datas from '@/utils/data/linking';
import Link from 'next/link';
import React from 'react';
import { IconLinkedin, IconFacebook, IconInstagram, IconTiktok, IconTwitter } from '@/assets/svg/icon';
export default function Footer() {
  return (
    <div className="bg-purple-500  sm:py-8 ">
      <div className="sm:max-w-screen-xl w-full p-8 mx-auto sm:px-12">
        <div className="sm:flex sm:justify-between sm:items-center pb-4 sm:border-b-2 sm:border-purple-300">
          <h2 className="font-medium text-xl sm:text-2xl py-4 text-white">QuizMe?</h2>

          <div className="sm:flex ">
            {Datas.map((item, index) => (
              <div>
                <Link href={item.link} key={index}>
                  <p className="font-regular border-b-2 border-transparent hover:text-white hover:border-white p-2 hover:transition-all hover:duration-150 inline-block sm:mb-2">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex sm:justify-end gap-3 py-4">
          <IconLinkedin width="28px" />
          <IconFacebook width="28px" />
          <IconInstagram width="28px" />
          <IconTwitter width="28px" />
          <IconTiktok width="28px" />
        </div>
      </div>
    </div>
  );
}
