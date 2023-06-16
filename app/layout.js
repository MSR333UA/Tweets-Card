import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Image from "next/legacy/image";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tweets Cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="wrap">
          <Image
            src={"/pexels-suzy-hazelwood-1913226.jpg"}
            alt="bg photo"
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            blurDataURL={"/pexels-suzy-hazelwood-1913226.jpg"}
          />
        </div>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
