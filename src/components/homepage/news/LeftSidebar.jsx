import Link from "next/link";


const LeftSidebar = ({ categories,activeId }) => {
    return (
        <div>

            <h2 className="text-lg">All Categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map((category, index) => {
                        return <li key={index} className={`${activeId === category.category_id ?'bg-slate-100' : ''}  rounded-md font-bold text-center text-md `}>
                            <Link href={`/category/${category.category_id}`} className="block p-2 hover:bg-slate-100">{category.category_name} </Link>
                            </li>
                    })
                }
            </ul>

        </div>
    );
};

export default LeftSidebar;