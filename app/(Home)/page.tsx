import FeatBlogList from '@/components/FeatBlogList/BlogList';
import Hero from '@/components/Hero/Hero';
import { fetchFeaturedBlogs } from '@/lib/blogService';

const Home = async () => {
  const blogs = await fetchFeaturedBlogs();

  return (
    <>
      <Hero />
      <FeatBlogList blogs={blogs} />
    </>
  );
};

export default Home;
