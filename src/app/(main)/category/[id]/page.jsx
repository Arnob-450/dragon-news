import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategory } from "@/lib/data";



const NewsCategoryPage = async ({params}) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategory(id);
    return (
         <div className=" grid grid-cols-12 gap-4  container mx-auto my-[60px]">
      <div className="font-bold col-span-3">
        <LeftSidebar categories={categories} activeId={id}></LeftSidebar>
      </div>

      <div className=" col-span-6">
         <h2 className="font-bold text-lg">News by category</h2>
        <div className='space-y-4 mt-6'>
          {news.length > 0 ? (
            news.map((n) => (
              <NewsCard key={n._id} news={n} />
            ))
          ) : (
            <p>No news found for this category.</p>
          )}
        </div>

      </div>
      <div className=" col-span-3">
        <RightSidebar></RightSidebar>
      </div>

    </div>
    );
};

export default NewsCategoryPage;