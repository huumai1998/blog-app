import { Featured, CategoryList, CardList, Menu } from "@/components";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <div className="page-container">
        <Featured />
        <CategoryList />
        <div className="page-content">
          <CardList page={page} />
          <Menu />
        </div>
      </div>
    </>
  );
}
