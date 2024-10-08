import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "eraShop",
  description: "ecommerce application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <main className="pt-[70px]">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
