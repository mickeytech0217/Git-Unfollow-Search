import Image from "next/image";
import Link from "next/link";

export default function DisplayUser({ user }: any) {
  const name =
    user.name !== undefined && user.name !== null && user.name !== ""
      ? user.name
      : "Not Found";
  const bio =
    user.bio !== undefined && user.bio !== null && user.bio !== ""
      ? user.bio
      : "Not Found";
  const blog =
    user.blog !== undefined && user.blog !== null && user.blog !== ""
      ? user.blog
      : "Not Found";
  const email =
    user.email !== undefined && user.email !== null && user.email !== ""
      ? user.email
      : "Not Found";
  const location =
    user.location !== undefined &&
    user.location !== null &&
    user.location !== ""
      ? user.location
      : "Not Found";
  const followers =
    user.followers !== undefined &&
    user.followers !== null &&
    user.followers !== ""
      ? user.followers
      : "Not Found";
  const following =
    user.following !== undefined &&
    user.following !== null &&
    user.following !== ""
      ? user.following
      : "Not Found";
  const publicRepos =
    user.public_repos !== undefined &&
    user.public_repos !== null &&
    user.public_repos !== ""
      ? user.public_repos
      : "Not Found";
  const privateRepos =
    user.total_private_repos !== undefined &&
    user.total_private_repos !== null &&
    user.total_private_repos !== ""
      ? user.total_private_repos
      : "Not Found";
  const twitter =
    user.twitter_username !== undefined &&
    user.twitter_username !== null &&
    user.twitter_username !== ""
      ? user.twitter_username
      : "Not Found";

  const isUndefined = (value: string | number | undefined | null): boolean =>
    value === undefined || value === null || value === "";

  return (
    <div className="flex w-full flex-col md:max-h-72 md:flex-row gap-4 p-4 items-center justify-between border border-lightBlue mb-12">
      <Image
        className="w-auto h-60"
        src={user.avatar_url}
        height="300"
        width="300"
        alt=""
      />
      <div className="flex w-full flex-1 flex-col border border-t-4 border-x-0 border-b-0 md:border-4 md:border-y-0 md:border-r-0 pt-4 md:pt-0 md:pl-4 border-l-lightBlue border-t-lightBlue">
        <h2 className="font-semibold">
          Name:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.name) ? "italic opacity-50" : ""
            }`}
          >
            {name}
          </span>
        </h2>
        <h2 className="font-semibold">
          Bio:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.bio) ? "italic opacity-50" : ""
            }`}
          >
            {bio}
          </span>
        </h2>
        <h2 className="font-semibold">
          Website:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.blog) ? "italic opacity-50" : ""
            }`}
          >
            {isUndefined(user.blog) ? (
              "Not Found"
            ) : (
              <Link className="text-blue-500" href={blog} target="_blank">
                {blog}
              </Link>
            )}
          </span>
        </h2>
        <h2 className="font-semibold">
          Email:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.email) ? "italic opacity-50" : ""
            }`}
          >
            {email}
          </span>
        </h2>
        <h2 className="font-semibold">
          Location:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.location) ? "italic opacity-50" : ""
            }`}
          >
            {location}
          </span>
        </h2>
        <h2 className="font-semibold">
          Followers:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.followers) ? "italic opacity-50" : ""
            }`}
          >
            {followers}
          </span>
        </h2>
        <h2 className="font-semibold">
          Following:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.following) ? "italic opacity-50" : ""
            }`}
          >
            {following}
          </span>
        </h2>
        <h2 className="font-semibold">
          Public Repos:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.public_repos) ? "italic opacity-50" : ""
            }`}
          >
            {publicRepos}
          </span>
        </h2>
        <h2 className="font-semibold">
          Private Repos:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.total_private_repos) ? "italic opacity-50" : ""
            }`}
          >
            {privateRepos}
          </span>
        </h2>
        <h2 className="font-semibold">
          Twitter:{" "}
          <span
            className={`font-normal ${
              isUndefined(user.twitter_username) ? "italic opacity-50" : ""
            }`}
          >
            {!isUndefined(user.twitter_username) ? (
              <Link
                className="text-blue-500"
                href={`https://twitter.com/${twitter}`}
                target="_blank"
              >
                {`@${twitter}`}
              </Link>
            ) : (
              "Not Found"
            )}
          </span>
        </h2>
      </div>
    </div>
  );
}
