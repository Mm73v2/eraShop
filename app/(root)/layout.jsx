import Header from "@/components/common/Header/Header";
export const metadata = {
  title: "eraShop",
  description: "shopping",
};
const layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default layout;
