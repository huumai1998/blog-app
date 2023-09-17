import { Featured, CategoryList, CardList, Menu } from "@/components";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Featured />
        <CategoryList />
        <div className="page-content">
          <CardList />
          <Menu />
        </div>
      </div>
    </>
  );
}
