"use client";

import posts from "@/data/posts.json";
import { use } from "react";
import Image from "next/image";
import { useState } from "react";

import { Clock, Heart, Eye } from "lucide-react";

type posts = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image_url: string;
};

type Comment = {
  user: string;
  content: string;
};

const today = new Date();

const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const monthName = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const postId = parseInt(id);
  const postDetail = posts.find((e: posts) => e.id === postId);

  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState("");
  const [commentContent, setCommentContent] = useState("");

  if (!postDetail) {
    return <p className="text-center text-red-600">Post not found</p>;
  }

  const handleAddComment = () => {
    if (user.trim() && commentContent.trim()) {
      const newComment: Comment = {
        user,
        content: commentContent,
      };
      setComments([...comments, newComment]);
      setUser("");
      setCommentContent("");
    }
  };

  return (
    <section className="mx-10 px-14">
      <div className="flex justify-center mt-10">
        <Image
          src={postDetail.image_url}
          width={800}
          height={800}
          alt="post-img"
          className="w-full h-[500px] rounded-lg"
        />
      </div>
      <div className="px-8">
        <div className="mt-8 flex justify-between">
          <div>
            <h1 className="text-5xl font-semibold">{postDetail.title}</h1>
            <div className="my-5 flex gap-x-10">
              <div className="flex gap-x-4 items-center">
                <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
                <p className="uppercase font-bold">{postDetail.author}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Clock size={20} />
                <p className="text-sm font-bold">{postDetail.date}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <Eye size={20} />
                <p className="text-sm font-bold">4.4k reads.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-slate-200 rounded-full px-2 py-2">
              <Heart size={36} className="text-red-500 fill-red-500" />
            </div>
            <p className="text-center font-bold mt-2 text-sm">32</p>
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-4xl font-bold">What is Lorem Ipsum?</h1>
          <p className="text-2xl mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex justify-center gap-x-16 mt-8">
            <div className="bg-slate-200 w-1/3 h-96"></div>
            <div className="w-3/4">
              <h1 className="text-4xl font-bold">Why do we use it?</h1>
              <p className="text-2xl mt-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-bold my-10">Where does it come from?</h1>
          <p className="text-2xl mt-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
            amet.., comes from a line in section 1.10.32.
          </p>
          <p className="text-2xl mt-8">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from de
            Finibus Bonorum et Malorum by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Leave a Comment</h2>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Your Comment"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md h-24"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>

      {/* Display Comments */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="flex gap-x-10 mb-8 items-center">
                <p className="font-bold text-xl text-gray-800">
                  {comment.user}
                </p>
                <p className=" text-gray-500">
                  {date}-{monthName[month]}-{year}
                </p>
              </div>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </section>
  );
};

export default Page;
