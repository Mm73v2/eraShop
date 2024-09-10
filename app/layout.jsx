import Header from "./_common/Header/Header";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";

export const metadata = {
  title: "eraShop",
  description: "ecommerce application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <ReduxProvider>
          <main className="pt-[70px]">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
