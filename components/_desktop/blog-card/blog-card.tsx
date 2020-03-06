import React from 'react';
import Link from 'next/link';

type BlogCardProps = {
  postData: {
    title: string;
    urlFriendlyTitle: string;
    imageUrl: string;
    caption?: string;
    author: string;
    postedDate: string;
    description: string;
    videoLink?: string;
  };
};
const BlogCard = ({ postData }: BlogCardProps) => {
  const {
    title,
    urlFriendlyTitle,
    imageUrl,
    caption = '',
    author,
    postedDate,
    description,
    videoLink = ''
  } = postData;
  return (
    <div className="mx-4 bg-white shadow pb-4 mb-4">
      <div className=" h-56 overflow-hidden">
        <img className="w-full h-56 object-cover object-top" src={imageUrl} />
      </div>
      <div className="">
        <h4 className="px-4 pt-3 text-2xl text-frost-blue font-extrabold leading-6 line-clamp">
          {title}
        </h4>
        <span className="px-4 block text-sm text-gray-700 font-semibold">
          Posted By {author}
        </span>
        <span className="px-4 block text-sm text-gray-600">{postedDate}</span>
        <p className="px-4 pt-3 text-md leading-tight"></p>
        <div className="text-center">
          <Link href={`/blog/${urlFriendlyTitle}`}>
            <a className="bg-frost-orange hover:bg-frost-dark-orange text-xl my-3 py-1 px-10 rounded-full text-white font-bold inline-block">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
