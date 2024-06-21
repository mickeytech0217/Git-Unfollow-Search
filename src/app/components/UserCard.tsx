import React from "react";
import Image from "next/image";
import Link from "next/link";

interface User {
  login: string;
  avatar_url: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }: any) => {
  return (
    <div className="flex flex-col bg-lighterBlue p-2 border">
      <Link href={user.html_url} target="_blank" title={user.login}>
        <Image
          className="block w-20 h-20 md:w-36 md:h-36 mx-auto"
          src={user.avatar_url}
          alt={user.login}
          height={80}
          width={80}
        />
      </Link>
      <Link
        className="max-w-[80px] md:max-w-[144px] truncate"
        href={user.html_url}
        target="_blank"
      >
        <span className="text-blue-800 font-semibold text-xs md:text-sm mt-1">
          @{user.login}
        </span>
      </Link>
    </div>
  );
};

export default UserCard;
