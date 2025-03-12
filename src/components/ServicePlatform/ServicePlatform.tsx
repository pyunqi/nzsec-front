import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ServicePlatform = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="mx-auto mt-6 md:pt-0 lg:w-8/12 lg:pt-0 "
      style={{ border: "#fff 0px solid" }}
    >
      {/* SecondTitle -- Team Staff */}

      <div className="pt-2 md:pt-4" style={{ border: "#fff 0px solid" }}>
        <SectionTitle
          title="Service Platform Introduction"
          paragraph=""
          mb="0px"
        />
      </div>
      <a
        href="#"
        className="hover:text-blue-500 block border-2 border-transparent p-4 text-gray-100 transition-all duration-300 hover:rounded-lg hover:border-blue"
      >
        <div className="mb-2 flex items-center space-x-4 border-0 border-gray-300 p-8 pl-2 pr-2 md:py-8 lg:py-8">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src="/images/ServicePlatform/zzh.jpeg"
              alt="member1-image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-normalgray">
            <span className="font-medium text-blue">
              ZZU(郑州大学) New Zealand Education Exchange Center
            </span>
            <span className="text-gray block indent-6 leading-relaxed">
              The ZZU-New Zealand Education Exchange Center (ZZU-NZEEC) was
              established in 2021, making it the first overseas educational
              institution founded by a Chinese "Double First-Class" university
              in New Zealand. It is a key division of the New Zealand Education
              and Culture Center. As the only official overseas representative
              and independent institution of Zhengzhou University, ZZU-NZEEC is
              dedicated to developing high-quality educational resources,
              serving as a bridge for international exchange and collaboration
              between New Zealand’s higher education institutions and Zhengzhou
              University, and continuously expanding international education
              exchange opportunities. The center aims to enhance Zhengzhou
              University’s global partnerships and strengthen its international
              competitiveness.
            </span>
          </div>
        </div>
      </a>

      <a
        href="#"
        className="hover:text-blue-500 block border-2 border-transparent p-4 text-gray-100 transition-all duration-300 hover:rounded-lg hover:border-blue"
      >
        <div className="mb-2 flex items-center space-x-4 border-0 border-gray-300 p-8 pl-2 pr-2 md:py-8 lg:py-8">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src="/images/ServicePlatform/bailie.jpg"
              alt="member1-image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-normalgray">
            <span className="font-medium text-blue">
              New Zealand Bailie Training Base Limited
            </span>
            <span className="text-gray block indent-6 leading-relaxed">
              New Zealand Bailie Training Base was registered in New Zealand in
              November 2019. It was established to promote the international
              spirit of great love embodied by Rewi Alley and to carry forward
              his educational philosophy of "combining hands and mind, creating
              and analyzing." The base aims to implement the Implementation Plan
              for National Vocational Education Reform, advance the
              internationalization of China’s vocational education, support
              China’s industries in moving up the global value chain, and
              further deepen cooperation between China and New Zealand in the
              field of vocational education.
            </span>
          </div>
        </div>
      </a>

      <a
        href="#"
        className="hover:text-blue-500 block border-2 border-transparent p-4 text-gray-100 transition-all duration-300 hover:rounded-lg hover:border-blue"
      >
        <div className="mb-2 flex items-center space-x-4 border-0 border-gray-300 p-8 pl-2 pr-2 md:py-8 lg:py-8">
          <div className="relative h-[100px] w-[100px]">
            <Image
              src="/images/ServicePlatform/OIP.jpeg"
              alt="member1-image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-normalgray">
            <span className="font-medium text-blue">The University of Waikato China Education Centre</span>
            <span className="text-gray block indent-6 leading-relaxed">
              In 1994, China began exploring the introduction of international
              vocational qualification certificates. In 1998, the former
              Ministry of Labor and Social Security issued the Notice on
              Strengthening the Management of Introducing Foreign Vocational
              Qualification Certificates (Lao She Bu Fa [1998] No. 18),
              requiring qualification review and registration of foreign
              certificates and issuing bodies from 1999 onwards. The Notice
              mandated collaboration with domestic institutions, prohibiting
              foreign bodies from independently conducting exams or issuing
              certificates in China.In 2004, the Occupational Skill Testing
              Authority released the Implementation Rules for the Registration
              and Management of Foreign Vocational Qualification Certificates
              (Trial), detailing procedures and requirements for introducing
              these certificates.
            </span>
          </div>
        </div>
      </a>
    </section>
  );
};

export default ServicePlatform;
