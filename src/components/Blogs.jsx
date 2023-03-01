import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
const [blogs, setBlogs] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [filter, setFilter] = useState('all');

useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get('https://brand-q646.onrender.com/api/v1/blogs/');
const blogsData = response.data.data.blogs;
setBlogs(blogsData);
setIsLoading(false);
} catch (error) {
console.error(error);
setIsLoading(false);
}
};
fetchData();
}, []);

const filterBlogs = (category) => {
setFilter(category);
};

return (
<section className="main-contents">
    <section data-aos="zoom-in-up" className="block container block-domain">
        <h2 className="page-title">Blogs</h2>
        <div className="input-group">
            <input aria-label="Domain" type="text" className="input" placeholder="Enter text here to search..." />
            <button className="btn btn--primary btn--learnmore btn--search">
                <svg className="icon icon--white">
                    <use href="images/sprite.svg#search"></use>
                </svg>
                Search
            </button>
        </div>
        <div>
            <div id="myBtnContainer" className="filterBtns">
                <button className={`btn btn--outline btn--stretched ${filter==='all' ? 'active' : '' }`} onClick={()=>
                    filterBlogs('all')}
                    >
                    ALL
                </button>
                <button className={`btn btn--outline btn--stretched ${filter==='design' ? 'active' : '' }`}
                    onClick={()=> filterBlogs('design')}
                    >
                    Design
                </button>
                <button className={`btn btn--outline btn--stretched ${filter==='web' ? 'active' : '' }`} onClick={()=>
                    filterBlogs('web')}
                    >
                    Web
                </button>
                <button className={`btn btn--outline btn--stretched ${filter==='tech' ? 'active' : '' }`} onClick={()=>
                    filterBlogs('tech')}
                    >
                    Tech
                </button>
                <button className={`btn btn--outline btn--stretched ${filter==='news' ? 'active' : '' }`} onClick={()=>
                    filterBlogs('news')}
                    >
                    News
                </button>
                <button className={`btn btn--outline btn--stretched ${filter==='others' ? 'active' : '' }`}
                    onClick={()=> filterBlogs('others')}
                    >
                    Others
                </button>
            </div>
        </div>
    </section>
    <div>
      {isLoading && <div className="preload">Loading...</div>}
      {!isLoading && blogs.length === 0 && <div>No blogs found.</div>}
      {!isLoading && blogs.length > 0 && (
        <section>
          <ul className="blog" id="blogs">
            {blogs.map((blog) => (
              <li className="relative" key={blog._id}>
                <div className="blog-item">
                  <a href={`/article.html#${blog._id}`}>
                    <img
                      src={blog.imageCover}
                      alt="Blog cover"
                      className="blog-image"
                    />
                    <p className="blog-title">{blog.title}</p>
                  </a>
                  <span className="blog-icons">
                    <img
                      className="blog-icon"
                      src="/icons/like.svg"
                      alt="like icon"
                    />
                    <img
                      className="blog-icon"
                      src="/icons/comment.svg"
                      alt="comment icon"
                    />
                    <img
                      className="blog-icon"
                      src="/icons/share.svg"
                      alt="share icon"
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
</section>
)
            }

export default Blogs;
