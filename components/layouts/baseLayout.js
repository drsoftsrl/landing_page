import Seo from "@/components/seo";
import Navbar from "@/components/navbar/navbar";
// import Footer from "@/components/footer/footer";

export default function BaseLayout({ children, seo, page }) {
  return (
    <>
      <Seo seo={seo} />

      <Navbar page={page} />

      <div className="w-full min-h-full">{children}</div>

      {/*<Footer />*/}
    </>
  );
}
