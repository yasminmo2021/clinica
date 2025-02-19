import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Yasmin",
  description: "Pagina sobre o volei",
  charset: 'UTF-8',
  author: 'Yasmin Moreno',
  keywords: 'HTML, CSSC, JavaScript, React,Next.js'
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        { children }

      </body>
    </html>
  );
}
