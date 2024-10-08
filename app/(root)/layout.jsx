import Header from "@/components/common/Header/Header";
export const metadata = {
  title: "eraShop",
  description: "shopping",
};
const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-[70px]">{children}</main>
    </>
  );
};

export default layout;
