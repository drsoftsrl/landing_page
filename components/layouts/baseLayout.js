import Seo from "@/components/seo";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function BaseLayout({ children, seo }) {
  return (
    <>
      <Seo seo={seo} />

      <Navbar />

      <div className="w-full min-h-full">{children}</div>

      <Footer />
    </>
  );
}
