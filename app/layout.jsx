import Header from "@/components/common/Header/Header";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata = {
  title: "eraShop",
  description: "ecommerce application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <main className="pt-[70px]">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
