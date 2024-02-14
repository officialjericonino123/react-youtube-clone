import { CgProfile } from "react-icons/cg";
import { FaCheckCircle, FaYoutube } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { ImYoutube2 } from "react-icons/im";
import { MdHome } from "react-icons/md";
import {
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";

import Thumbnail1 from "../../assets/images/img/Thumbnail-1.png";
import Thumbnail1Profile from "../../assets/images/img/Thumbnail-1Profile.png";
import Thumbnail2 from "../../assets/images/img/Thumbnail-2.jpg";
import Thumbnail3 from "../../assets/images/img/Thumbnail-3.jpg";
import Thumbnail3Profile from "../../assets/images/img/Thumbnail-3Profile.jpg";
import ShroudProfile from "../../assets/images/img/shroudprofile.jpg";
import Thumbnail4 from "../../assets/images/img/Thumbnail-4.jpg";
import WishProfile from "../../assets/images/img/WishProfile.jpg";
import Thumbnail5 from "../../assets/images/img/Thumbnail-5.jpg";
import Thumbnail6 from "../../assets/images/img/Thumbnail-6.jpg";
import Thumbnail6Profile from "../../assets/images/img/Thumbnail-6Profile.jpg";
import Thumbnail7 from "../../assets/images/img/Thumbnail-7.jpg";
import Thumbnail7Profile from "../../assets/images/img/Thumbnail-7Profile.jpg";
import Thumbnail8 from "../../assets/images/img/Thumbnail-8.jpg";
import Thumbnail8Profile from "../../assets/images/img/Thumbnail-8Profile.jpg";
import Thumbnail9 from "../../assets/images/img/Thumbnail-9.jpg";
import Thumbnail9Profile from "../../assets/images/img/Thumbnail-9Profile.jpg";
import Thumbnail10 from "../../assets/images/img/Thumbnail-10.jpg";
import Thumbnail10Profile from "../../assets/images/img/Thumbnail-10Profile.jpg";
import short1 from "../../assets/images/img/short1.jpg";
import short2 from "../../assets/images/img/short2.jpg";
import short3 from "../../assets/images/img/short3.jpg";
import short4 from "../../assets/images/img/short4.jpg";
import short5 from "../../assets/images/img/short5.jpg";
import short6 from "../../assets/images/img/short6.jpg";
import short7 from "../../assets/images/img/short7.jpg";
import YoutubeMusic from "../../assets/images/img/YoutubeMusic.png";
import { Link } from "react-router-dom";
import {
  IoIosArrowDown,
  IoIosCloseCircle,
  IoIosHelpCircleOutline,
} from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { VscMusic } from "react-icons/vsc";
import { LuClapperboard, LuFlag } from "react-icons/lu";
import {
  IoNewspaperOutline,
  IoSettingsOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { FiPlusCircle } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { TbFlagExclamation } from "react-icons/tb";

const homeComponent: React.FC = () => {
  return (
    <>
      <div>
        <div className="w-full flex text-white">
          {/* Nav Bar */}
          <div className="fixed top-0 bottom-0 left-0 w-[15%] h-auto bg-[#141617] mt-[60px] overflow-y-auto scrollbar-hide">
            <nav className="p-[20px] px-[20px] text-[1rem] font-Roboto font-[400]">
              <ul>
                <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                  <MdHome className="text-[1.7rem]" />
                  Home
                </li>
                <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                  <SiYoutubeshorts className="text-[1.7rem]" />
                  Short
                </li>
                <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                  <FaYoutube className="text-[1.7rem]" />
                  Subscription
                </li>

                {/* Divider */}
                <div className="divider"></div>

                <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                  <ImYoutube2 className="text-[1.7rem]" />
                  You
                </li>
                <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                  <GoHistory className="text-[1.7rem]" />
                  History
                </li>

                {/* Divider */}
                <div className="divider"></div>

                <div className="flex flex-col gap-[10px] text-start px-[20px]">
                  <p className="text-[.9rem]">
                    Sign in to like videos, comment and subscribe.
                  </p>
                  <div className="w-[110px] flex justify-center items-center border-[1px] rounded-full p-[5px] gap-[5px] text-[1rem] font-[500] text-[#3ba0ff] hover:bg-[#73b4f07e] hover:border-[#73b4f07e] duration-500 cursor-pointer ">
                    <CgProfile />
                    Sign in
                  </div>
                </div>

                {/* Divider */}
                <div className="divider"></div>

                <div>
                  <h1 className="font-[500] text-[1.2rem]">Explore</h1>
                  <Link to="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <FaFireFlameCurved className="text-[1.7rem]" />
                      Trending
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <VscMusic className="text-[1.7rem]" />
                      Music
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <LuClapperboard className="text-[1.7rem]" />
                      Movies
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/gaming">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <SiYoutubegaming className="text-[1.7rem]" />
                      Gaming
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <IoNewspaperOutline className="text-[1.7rem]" />
                      News
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <IoTrophyOutline className="text-[1.7rem]" />
                      Sports
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <GiHanger className="text-[1.7rem]" />
                      Fashion & Beauty
                    </li>
                  </Link>
                </div>

                {/* Divider */}
                <div className="divider"></div>

                <div className="flex justify-center">
                  <Link to="https://www.youtube.com/feed/guide_builder">
                    <button className="flex items-center gap-[20px] py-[10px] px-[15px] rounded-lg hover:bg-[#6a6a6a53] duration-500 text-[1rem] font-[500]">
                      <FiPlusCircle className="text-[1.5rem]" /> Browse channels
                    </button>
                  </Link>
                </div>

                {/* Divider */}
                <div className="divider"></div>

                <div>
                  <h1 className="font-[500] text-[1.1rem]">
                    More from YouTube
                  </h1>
                  <div>
                    <Link to="https://www.youtube.com/premium">
                      <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                        <FaYoutube className="text-[1.7rem] text-[#f12020]" />
                        YouTube Premium
                      </li>
                    </Link>
                    <Link to="https://music.youtube.com/">
                      <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                        <SiYoutubemusic className="text-[1.7rem] text-[#f12020]" />
                        YouTube Music
                      </li>
                    </Link>
                    <Link to="https://www.youtubekids.com/?source=youtube_web">
                      <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                        <TfiYoutube className="text-[1.7rem] text-[#f12020]" />
                        YouTube Kids
                      </li>
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                <div className="divider"></div>

                <div>
                  <Link to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%26feature%3Dredirect_login&hl=en&ifkv=ATuJsjzj23BixWCFXNx7d2UCC4gQ-S_i0U0mFVGWZEXtVFKaSnrSVj7UVFEuNgP-uSeYjlNH8EkdLw&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S302610125%3A1707706037484659&theme=glif">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <IoSettingsOutline className="text-[1.7rem]" />
                      Settings
                    </li>
                  </Link>
                  <Link to="https://www.youtube.com/reporthistory">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <LuFlag className="text-[1.7rem]" />
                      Report History
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <IoIosHelpCircleOutline className="text-[1.7rem]" />
                      Help
                    </li>
                  </Link>
                  <Link to="#">
                    <li className="flex justify-start items-center gap-[30px] my-[5px] py-[8px] px-[10px] rounded-md hover:bg-[#ffffff23] duration-300 cursor-pointer">
                      <TbFlagExclamation className="text-[1.7rem]" />
                      Send Feedback
                    </li>
                  </Link>
                </div>

                {/* Divider */}
                <div className="divider"></div>

                <div className="block text-[.8rem] text-stone-400 font-[500] mx-[20px]">
                  <button className="m-[2px]">About</button>
                  <button className="m-[2px]">Press</button>
                  <button className="m-[2px]">Copyright</button>
                  <button className="m-[2px]">Contact us</button>
                  <button className="m-[2px]">Creators</button>
                  <button className="m-[2px]">Advertise</button>
                  <button className="m-[2px]">Developers</button>
                  <br></br>
                  <br></br>
                  <button className="m-[2px]">Terms</button>
                  <button className="m-[2px]">Privacy</button>
                  <button className="m-[2px]">Policy & Safety</button>
                  <button className="m-[2px]">How YouTube works</button>
                  <button className="m-[2px]">Test new features</button>
                </div>
              </ul>
            </nav>
          </div>
          {/* Main Contents */}
          <div className="w-[85%]">
            {/* Filters */}
            <div className="fixed w-full px-[5px] py-[10px] bg-[#141617] mt-[70px] ml-[15%] flex items-center gap-[10px] text-white font-[500] text-[.9rem] ">
              <button className="px-[16px] py-[4px] rounded-lg text-black bg-white">
                All
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Live
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Music
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Variety shows
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                News
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Philippine music
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Playlist
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                1980s
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Backround music
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Acoustic guitar
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Programming
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Gaming
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Golden State Warriors
              </button>
              <button className="px-[16px] py-[4px] rounded-lg text-white bg-[#ffffff3d]">
                Animated Films
              </button>
            </div>

            <div className="w-full mt-[120px] ml-[18%]">
              {/* videos */}
              <div className="grid xl:grid-cols-5 gap-[15px] mt-[30px] mx-[30px]">
                {/* 1st */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                      <img
                        src={Thumbnail1}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@eduardo62762">
                      <img
                        src={Thumbnail1Profile}
                        alt=""
                        className="w-[90px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                        <span className="font-[500] text-[1.1rem]">
                          Best Soft Songs 2024 - Top 30 Acoustic Soft Songs 2024
                          - Soft Music Playlist
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@eduardo62762">
                        <p className="text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Music Express
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        805K views | Streamed 1 months ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                      <img
                        src={Thumbnail2}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@shroud">
                      <img
                        src={ShroudProfile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                        <span className="font-[500] text-[1.1rem]">
                          The Biggest Issue in PUBG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@shroud">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Shroud <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        104K views | 8 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                      <img
                        src={Thumbnail3}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                      <img
                        src={Thumbnail3Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                        <span className="font-[500] text-[1.1rem]">
                          Shroud dominates in Apex Legends - 24 Kills
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          WhiteMix MotoVlog
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        2.6K views | 1 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                      <img
                        src={Thumbnail4}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                        <span className="font-[500] text-[1.1rem]">
                          Bugoy Drilon, Moophs perform "Tied" LIVE on Wish 107.5
                          Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        163K views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                      <img
                        src={Thumbnail5}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px] rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                        <span className="font-[500] text-[1.1rem]">
                          Morissette performs "Akin Ka Na Lang" LIVE on Wish
                          107.5 Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        172M views | 6 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                      <img
                        src={Thumbnail6}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@ryan">
                      <img
                        src={Thumbnail6Profile}
                        alt=""
                        className="w-[50px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                        <span className="font-[500] text-[1.1rem]">
                          I Survived 50 Hours in Apple Vision Pro
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@ryan">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Ryan Trahan <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.3M views | 2 days ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=VO2VFCEv_Fg">
                      <img
                        src={Thumbnail7}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@KaiCenat">
                      <img
                        src={Thumbnail7Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <span className="font-[500] text-[1.1rem]">
                        Living With SPEED For 24 Hours!
                      </span>
                      <Link to="https://www.youtube.com/@KaiCenat">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Kai Cenat <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.1M views | 1 year ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                      <img
                        src={Thumbnail8}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@stevie.knight">
                      <img
                        src={Thumbnail8Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                        <span className="font-[500] text-[1.1rem]">
                          EZ MIL IS DIFFERENT! - FREEZE - REACTION
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@stevie.knight">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Stevie Knight <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        44M views | 20 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                      <img
                        src={Thumbnail9}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@IShowSpeed">
                      <img
                        src={Thumbnail9Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                        <span className="font-[500] text-[1.1rem]">
                          KSI IS HERE EVERYBODY WRONG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@IShowSpeed">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          IShowSpeed <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.8M views | Streamed 1 month ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 10th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                      <img
                        src={Thumbnail10}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@AdinRoss">
                      <img
                        src={Thumbnail10Profile}
                        alt=""
                        className="w-[100px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                        <span className="font-[500] text-[1.1rem]">
                          Prime & NLE Choppa Friend get into a HEATED ARGUMENT
                          On Adin Ross Stream!
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@AdinRoss">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Adin Live <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.6M views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* shorts */}
              <div className="font-Roboto">
                <div className="flex items-center gap-[10px] text-[1.3rem] font-[700] mb-[20px]">
                  <SiYoutubeshorts className="text-[#f12020]" /> Shorts
                </div>

                <div className="grid grid-cols-7 mx-[10px]">
                  {/* short1 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/sQT2DBxJ6Tk">
                        <img src={short1} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/sQT2DBxJ6Tk">
                        <span className="font-[500] text-[1rem]">
                          Jollibee chicken is top tier
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        6.9M views
                      </p>
                    </div>
                  </div>

                  {/* short2 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/phRHLD8Slb8">
                        <img src={short2} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/phRHLD8Slb8">
                        <span className="font-[500] text-[1rem]">
                          It was just a question.. 😂
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        10M views
                      </p>
                    </div>
                  </div>

                  {/* short3 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/BIkIhP1AO4E">
                        <img src={short3} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/BIkIhP1AO4E">
                        <span className="font-[500] text-[1rem]">
                          Dragon's Beard Candy
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        27M views
                      </p>
                    </div>
                  </div>

                  {/* short4 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/fHt59omk374">
                        <img src={short4} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/fHt59omk374">
                        <span className="font-[500] text-[1rem]">
                          Will it Jam? 🤨
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        8.3M views
                      </p>
                    </div>
                  </div>

                  {/* short5 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/hlR7eOuP_Fk">
                        <img src={short5} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/hlR7eOuP_Fk">
                        <span className="font-[500] text-[1rem]">
                          Melanie Shah after getting her tooth knocked out: "I
                          might not look like it but I enjoyed it"
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        14M views
                      </p>
                    </div>
                  </div>

                  {/* short6 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/elbUQfZLys0">
                        <img src={short6} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/elbUQfZLys0">
                        <span className="font-[500] text-[1rem]">
                          VHONG NA PRANK
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        3.6M views
                      </p>
                    </div>
                  </div>

                  {/* short7 */}
                  <div>
                    <div>
                      <Link to="https://www.youtube.com/shorts/oB73aE55xVo">
                        <img src={short7} alt="" className="rounded-xl" />
                      </Link>
                    </div>
                    <div className="flex flex-col cursor-pointer my-[10px]">
                      <Link to="https://www.youtube.com/shorts/oB73aE55xVo">
                        <span className="font-[500] text-[1rem]">
                          yellow cichlid fish gives birth to a lot of baby fish.
                          😍💪👍🙏 #fish #dolphin #fishvideo
                        </span>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[400]">
                        52M views
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="divider">
                <button className="flex justify-center items-center  gap-[10px] border-[1px] border-stone-500 py-[5px] rounded-full w-[700px] hover:bg-stone-500 duration-500 font-[600]">
                  Show More <IoIosArrowDown />
                </button>
              </div>

              {/* videos */}
              <div className="grid xl:grid-cols-5 gap-[15px] mt-[30px] mx-[30px]">
                {/* 1st */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                      <img
                        src={Thumbnail1}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@eduardo62762">
                      <img
                        src={Thumbnail1Profile}
                        alt=""
                        className="w-[90px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                        <span className="font-[500] text-[1.1rem]">
                          Best Soft Songs 2024 - Top 30 Acoustic Soft Songs 2024
                          - Soft Music Playlist
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@eduardo62762">
                        <p className="text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Music Express
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        805K views | Streamed 1 months ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                      <img
                        src={Thumbnail2}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@shroud">
                      <img
                        src={ShroudProfile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                        <span className="font-[500] text-[1.1rem]">
                          The Biggest Issue in PUBG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@shroud">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Shroud <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        104K views | 8 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                      <img
                        src={Thumbnail3}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                      <img
                        src={Thumbnail3Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                        <span className="font-[500] text-[1.1rem]">
                          Shroud dominates in Apex Legends - 24 Kills
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          WhiteMix MotoVlog
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        2.6K views | 1 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                      <img
                        src={Thumbnail4}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                        <span className="font-[500] text-[1.1rem]">
                          Bugoy Drilon, Moophs perform "Tied" LIVE on Wish 107.5
                          Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        163K views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                      <img
                        src={Thumbnail5}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px] rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                        <span className="font-[500] text-[1.1rem]">
                          Morissette performs "Akin Ka Na Lang" LIVE on Wish
                          107.5 Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        172M views | 6 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                      <img
                        src={Thumbnail6}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@ryan">
                      <img
                        src={Thumbnail6Profile}
                        alt=""
                        className="w-[50px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                        <span className="font-[500] text-[1.1rem]">
                          I Survived 50 Hours in Apple Vision Pro
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@ryan">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Ryan Trahan <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.3M views | 2 days ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=VO2VFCEv_Fg">
                      <img
                        src={Thumbnail7}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@KaiCenat">
                      <img
                        src={Thumbnail7Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <span className="font-[500] text-[1.1rem]">
                        Living With SPEED For 24 Hours!
                      </span>
                      <Link to="https://www.youtube.com/@KaiCenat">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Kai Cenat <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.1M views | 1 year ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                      <img
                        src={Thumbnail8}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@stevie.knight">
                      <img
                        src={Thumbnail8Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                        <span className="font-[500] text-[1.1rem]">
                          EZ MIL IS DIFFERENT! - FREEZE - REACTION
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@stevie.knight">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Stevie Knight <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        44M views | 20 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                      <img
                        src={Thumbnail9}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@IShowSpeed">
                      <img
                        src={Thumbnail9Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                        <span className="font-[500] text-[1.1rem]">
                          KSI IS HERE EVERYBODY WRONG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@IShowSpeed">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          IShowSpeed <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.8M views | Streamed 1 month ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 10th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                      <img
                        src={Thumbnail10}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@AdinRoss">
                      <img
                        src={Thumbnail10Profile}
                        alt=""
                        className="w-[100px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                        <span className="font-[500] text-[1.1rem]">
                          Prime & NLE Choppa Friend get into a HEATED ARGUMENT
                          On Adin Ross Stream!
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@AdinRoss">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Adin Live <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.6M views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="divider">
                <button className="flex justify-center items-center  gap-[10px] border-[1px] border-stone-500 py-[5px] rounded-full w-[700px] hover:bg-stone-500 duration-500 font-[600]">
                  Show More <IoIosArrowDown />
                </button>
              </div>

              {/* videos */}
              <div className="grid xl:grid-cols-5 gap-[15px] mt-[30px] mx-[30px]">
                {/* 1st */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                      <img
                        src={Thumbnail1}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@eduardo62762">
                      <img
                        src={Thumbnail1Profile}
                        alt=""
                        className="w-[90px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                        <span className="font-[500] text-[1.1rem]">
                          Best Soft Songs 2024 - Top 30 Acoustic Soft Songs 2024
                          - Soft Music Playlist
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@eduardo62762">
                        <p className="text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Music Express
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        805K views | Streamed 1 months ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                      <img
                        src={Thumbnail2}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@shroud">
                      <img
                        src={ShroudProfile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                        <span className="font-[500] text-[1.1rem]">
                          The Biggest Issue in PUBG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@shroud">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Shroud <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        104K views | 8 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                      <img
                        src={Thumbnail3}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                      <img
                        src={Thumbnail3Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                        <span className="font-[500] text-[1.1rem]">
                          Shroud dominates in Apex Legends - 24 Kills
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          WhiteMix MotoVlog
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        2.6K views | 1 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                      <img
                        src={Thumbnail4}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                        <span className="font-[500] text-[1.1rem]">
                          Bugoy Drilon, Moophs perform "Tied" LIVE on Wish 107.5
                          Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        163K views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                      <img
                        src={Thumbnail5}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px] rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                        <span className="font-[500] text-[1.1rem]">
                          Morissette performs "Akin Ka Na Lang" LIVE on Wish
                          107.5 Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        172M views | 6 years ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Youtube Music */}
              <div className="my-[50px] mx-[50px]">
                <div className="flex justify-end text-[3.5rem]">
                  <IoIosCloseCircle className="cursor-pointer" />
                </div>
                <div className="flex gap-[20px]">
                  <div className="w-[20%] flex justify-center items-center p-[10px]">
                    <img src={YoutubeMusic} alt="" className="w-[180px]" />
                  </div>
                  <div className="w-[50%]">
                    <h1 className="text-[2.5rem] font-[700]">
                      Get YouTube Music Premium
                    </h1>
                    <p className="text-[1.1rem] font-[400]">
                      Over 100M ad-free songs, music videos, remixes, playlist,
                      and more
                    </p>
                  </div>
                  <div className="w-[10%] flex justify-center items-center">
                    <button className="bg-[#3361ce] px-[20px] py-[5px] rounded-full font-[500]">
                      1 month free
                    </button>
                  </div>
                </div>
              </div>

              {/* videos */}
              <div className="grid xl:grid-cols-5 gap-[15px] mt-[30px] mx-[30px]">
                {/* 1st */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                      <img
                        src={Thumbnail1}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@eduardo62762">
                      <img
                        src={Thumbnail1Profile}
                        alt=""
                        className="w-[90px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=86ZkbwYi1PI">
                        <span className="font-[500] text-[1.1rem]">
                          Best Soft Songs 2024 - Top 30 Acoustic Soft Songs 2024
                          - Soft Music Playlist
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@eduardo62762">
                        <p className="text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Music Express
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        805K views | Streamed 1 months ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                      <img
                        src={Thumbnail2}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@shroud">
                      <img
                        src={ShroudProfile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Dw9OLSGhPec">
                        <span className="font-[500] text-[1.1rem]">
                          The Biggest Issue in PUBG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@shroud">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Shroud <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        104K views | 8 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                      <img
                        src={Thumbnail3}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                      <img
                        src={Thumbnail3Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=tBFOfE5p5FQ">
                        <span className="font-[500] text-[1.1rem]">
                          Shroud dominates in Apex Legends - 24 Kills
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@whitemixmotovlog6959">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          WhiteMix MotoVlog
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        2.6K views | 1 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                      <img
                        src={Thumbnail4}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=ODLEeV_LGuY">
                        <span className="font-[500] text-[1.1rem]">
                          Bugoy Drilon, Moophs perform "Tied" LIVE on Wish 107.5
                          Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        163K views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                      <img
                        src={Thumbnail5}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@WishFM1075official">
                      <img
                        src={WishProfile}
                        alt=""
                        className="w-[80px] h-[40px] rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=p2FXQgtmPDw">
                        <span className="font-[500] text-[1.1rem]">
                          Morissette performs "Akin Ka Na Lang" LIVE on Wish
                          107.5 Bus
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@WishFM1075official">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Wish 107.5 <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        172M views | 6 years ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                      <img
                        src={Thumbnail6}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@ryan">
                      <img
                        src={Thumbnail6Profile}
                        alt=""
                        className="w-[50px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=Cb1Dv565f2I">
                        <span className="font-[500] text-[1.1rem]">
                          I Survived 50 Hours in Apple Vision Pro
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@ryan">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Ryan Trahan <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.3M views | 2 days ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=VO2VFCEv_Fg">
                      <img
                        src={Thumbnail7}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@KaiCenat">
                      <img
                        src={Thumbnail7Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <span className="font-[500] text-[1.1rem]">
                        Living With SPEED For 24 Hours!
                      </span>
                      <Link to="https://www.youtube.com/@KaiCenat">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Kai Cenat <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.1M views | 1 year ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 8th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                      <img
                        src={Thumbnail8}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@stevie.knight">
                      <img
                        src={Thumbnail8Profile}
                        alt=""
                        className="w-[60px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=92EOMbZteiY">
                        <span className="font-[500] text-[1.1rem]">
                          EZ MIL IS DIFFERENT! - FREEZE - REACTION
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@stevie.knight">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Stevie Knight <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        44M views | 20 hours ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                      <img
                        src={Thumbnail9}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@IShowSpeed">
                      <img
                        src={Thumbnail9Profile}
                        alt=""
                        className="w-[40px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=5UDNT9ZCGsU">
                        <span className="font-[500] text-[1.1rem]">
                          KSI IS HERE EVERYBODY WRONG
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@IShowSpeed">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          IShowSpeed <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        1.8M views | Streamed 1 month ago
                      </p>
                    </div>
                  </div>
                </div>

                {/* 10th */}
                <div className="p-[5px]">
                  <div>
                    <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                      <img
                        src={Thumbnail10}
                        alt=""
                        className="rounded-lg cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <Link to="https://www.youtube.com/@AdinRoss">
                      <img
                        src={Thumbnail10Profile}
                        alt=""
                        className="w-[100px] h-[40px]  rounded-full"
                      />
                    </Link>
                    <div className="flex flex-col cursor-pointer">
                      <Link to="https://www.youtube.com/watch?v=-m7GWmtxNDY">
                        <span className="font-[500] text-[1.1rem]">
                          Prime & NLE Choppa Friend get into a HEATED ARGUMENT
                          On Adin Ross Stream!
                        </span>
                      </Link>
                      <Link to="https://www.youtube.com/@AdinRoss">
                        <p className="flex items-center gap-[10px] text-stone-400 text-[.9rem] font-[500] hover:text-white cursor-pointer duration-300">
                          Adin Live <FaCheckCircle />
                        </p>
                      </Link>
                      <p className="text-stone-400 text-[.9rem] font-[500]">
                        6.6M views | 2 years ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homeComponent;
