import {blogEntries} from '../../blogEntries';
import BlogPost from '../BlogPost/BlogPost';

const BlogList = () => {
  return (
    <div>
      {
        blogEntries.map((blogs, i) => {
          return (
            <BlogPost
              key={i}
              id={blogEntries[i].id}
              name={blogEntries[i].name}
              date={blogEntries[i].date}
              title={blogEntries[i].title}
              content={blogEntries[i].content}
              />
          );
        })
      }
    </div>
  );
}

export default BlogList;