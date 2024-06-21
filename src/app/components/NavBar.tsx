import Link from "next/link";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import millify from "millify";
import axios from "axios";

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const repoUrl = process.env.NEXT_PUBLIC_GIT_REPO_URL || "";
const repoStarUrl = process.env.NEXT_PUBLIC_GIT_REPO_STAR_URL || "";
const repoInfoUrl = process.env.NEXT_PUBLIC_GIT_REPO_INFO_URL || "";

const NavBar = () => {
  const [starCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const getRepoInfo = async () => {
      const [repoInfo] = await Promise.all([axios.get(repoInfoUrl, config)]);
      const repoStars = await repoInfo.data;
      setStarCount(repoStars.stargazers_count);
    };
    getRepoInfo();
  }, [starCount]);

  return (
    <div className="flex z-10 fixed max-w-5xl w-full px-4 py-2 items-center justify-between bg-bgSecondary shadow-sm">
      <h1 className="text-4xl font-bold text-textPrimary">
        <Link href="https://gittrack.vercel.app">GitTrack</Link>
      </h1>
      <div className="flex gap-2">
        <Link href={repoUrl} target="_blank">
          <AiFillGithub className="text-5xl hover:rounded-full h-10 w-10 p-1 transition-all duration-300 ease-in-out hover:bg-lighterBlue hover:bg-opacity-80" />
        </Link>
        <Link
          href={repoStarUrl}
          target="_blank"
          className="flex items-center h-10 p-1 rounded-full transition-all duration-300 ease-in-out hover:bg-lighterBlue"
        >
          <AiOutlineStar className="text-5xl hover:rounded-full h-10 w-10 py-1  hover:bg-opacity-80" />
          <span className="mr-2 text-lg">{millify(starCount)}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
