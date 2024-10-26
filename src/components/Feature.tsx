import posts from "@/data/posts.json";

const Feature = () => {
  return (
    <div>
      <div>
        {posts.slice(0, 6).map((item, index) => (
          <div key={index}>{item.author}</div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
