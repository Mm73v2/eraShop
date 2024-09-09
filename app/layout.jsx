import Header from "./_common/Header";
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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
