import CategoryCard from "../../components/category-card";
import Layout from "../../components/layout";

const Search = () => {
  return (
    <Layout>
      <div className="w-full p-6 overflow-y-auto">
        <div className="mt-10 text-white font-bold text-2xl">모두 둘러보기</div>
        <div className="w-full mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <CategoryCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
