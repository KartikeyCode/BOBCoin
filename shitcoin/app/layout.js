
import '@rainbow-me/rainbowkit/styles.css';
import { Inter } from "next/font/google";
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "$BOB",
  description: "BOBCoin get big money crypto BNB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers> {children} </Providers> 
        </body>
    </html>
  );
}
