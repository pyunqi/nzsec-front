import SingleBi from "@/components/BI/SingleBI";
import BIData from "@/components/BI/BIData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NZSEC | University | New Zealand | 教科文",
  description: "This is Page for NZSEC B.I.",
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="NZ S.E.C News"
        description="说明下目前新闻都在公众号，主要是没有英文新闻目前（以后有英文新闻内容需求的时候，需要增加CMS功能，以后再说）"
      />
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <p>这里应该是个二维码</p>
          </div>
        </div>
      </section>
    </>
  )
};

export default Blog;
