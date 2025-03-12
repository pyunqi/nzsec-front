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
        pageName="B.I.details"
        description="这里需要具体的业务的说明，可能是如何合作的细节吧"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <p>细节细节内容</p>
          </div>

          
        </div>
      </section>
    </>
  )
};

export default Blog;
