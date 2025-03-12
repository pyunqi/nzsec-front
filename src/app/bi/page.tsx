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
        pageName="B.I."
        description="这里需要业务的总结性说明."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {BIData.map((bi) => (
              <div
                key={bi.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/4"
              >
                <SingleBi blog={bi} />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  )
};

export default Blog;
