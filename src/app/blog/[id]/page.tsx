"use client";

import posts from "@/data/posts.json";
import { use } from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section className="lg:mx-10 mx-3 lg:px-14">
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={postDetail.image_url}
          width={800}
          height={800}
          alt="post-img"
          className="w-full lg:h-[500px] h-[400px] rounded-lg"
        />
      </motion.div>

      <motion.div
        className="lg:px-8"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <div className="mt-8 flex justify-between lg:flex-row flex-col">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold">
              {postDetail.title}
            </h1>
            <div className="my-5 flex lg:gap-x-10 gap-3 flex-wrap">
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
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-slate-200 w-14 flex justify-center items-center h-14 rounded-full px-2 py-2">
              <Heart size={36} className="text-red-500 fill-red-500" />
            </div>
            <p className="absolute -bottom-6 left-5 lg:relative font-bold text-sm">
              32
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="lg:text-4xl text-3xl font-bold">
            What is Lorem Ipsum?
          </h1>
          <p className="lg:text-2xl mt-8">
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
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="lg:text-4xl text-3xl font-bold">Why do we use it?</h1>
          <p className="lg:text-2xl mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum will uncover many web sites
            still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </motion.div>
        {/* Additional content animations */}
      </motion.div>

      {/* Comment section with animation */}
      <motion.div
        className="mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
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
      </motion.div>

      {/* Display Comments */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <motion.div
              key={index}
              className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex gap-x-10 mb-8 items-center">
                <p className="font-bold text-xl text-gray-800">
                  {comment.user}
                </p>
                <p className="text-gray-500">
                  {date}-{monthName[month]}-{year}
                </p>
              </div>
              <p>{comment.content}</p>
            </motion.div>
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
