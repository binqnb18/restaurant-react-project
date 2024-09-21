import React, { memo } from 'react';
import hambuger from '../assets/img/hambuger.png';
import pizza from '../assets/img/pizza.png';
import potato from '../assets/img/potato.png';
import chicken from '../assets/img/chicken.png';
import cake from '../assets/img/cake.png';

// Component memoized để tối ưu render
const BlogPost = memo(({ title, imgSrc, date, description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {description && <p className="text-gray-700 mb-4">{description}</p>}
    </div>
  </div>
));

const Blog = () => {
  // Dữ liệu mẫu cho các bài viết
  const blogPosts = [
    {
      id: 1,
      title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
      imgSrc: hambuger,
      date: "January 3, 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elitlitim sempet adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.",
    },
    {
      id: 2,
      title: "How to prepare the perfect french fries in an air fryer",
      imgSrc: potato,
      date: "January 3, 2023",
    },
    {
      id: 3,
      title: "How to prepare delicious chicken tenders",
      imgSrc: chicken,
      date: "January 3, 2023",
    },
    {
      id: 4,
      title: "7 delicious cheesecake recipes you can prepare",
      imgSrc: cake,
      date: "January 3, 2023",
    },
    {
      id: 5,
      title: "5 great pizza restaurants you should visit this city",
      imgSrc: pizza,
      date: "January 3, 2023",
    },
  ];

  return (
    <div className="bg-white py-16 px-8 lg:px-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Our Blog & Articles</h2>
        <a href="#" className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700">
          Read All Articles
        </a>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bài viết lớn đầu tiên */}
        <div className="lg:col-span-2">
          <BlogPost
            title={blogPosts[0].title}
            imgSrc={blogPosts[0].imgSrc}
            date={blogPosts[0].date}
            description={blogPosts[0].description}
          />
        </div>

        {/* Các bài viết nhỏ hơn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {blogPosts.slice(1).map((post) => (
            <BlogPost key={post.id} title={post.title} imgSrc={post.imgSrc} date={post.date} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
