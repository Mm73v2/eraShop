import "./globals.css";

export const metadata = {
  title: "eraShop",
  description: "ecommerce application",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
