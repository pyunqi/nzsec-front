import { Feature } from "@/types/feature";
import { Float } from "@react-three/drei";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, infoitem1,infoitem2,infoitem3 } = feature;

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    // <div className="w-full" style = {{border: 'red 0px solid'}}>
    <div className="mb-0 border-b border-b-2 border-dotted border-b-gray-400 pb-6 pl-3 pr-3 pt-6 sm:pl-0 lg:pr-0">
      <div
        className="wow fadeInUp"
        data-wow-delay=".15s"
        style={{ border: "red 0px solid" }}
      >
        <div className="md: float-left flex h-[20px] w-[20px] w-[40px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary md:h-[40px] lg:h-[40px] lg:w-[40px]">
          {icon}
        </div>
        <h3
          style={{ border: "red 0px solid" }}
          className="lg:text-l mb-5 pl-2 indent-4 text-sm font-bold text-black dark:text-cblue md:pl-0 md:pt-2 md:text-2xl lg:pl-0 lg:pt-4 xl:text-xl"
        >
          {title}
        </h3>
        <p
          className="sm:text-l lg:text-l clear-both text-pretty pr-[10px] indent-8 text-sm font-light leading-relaxed text-body-color"
          style={{ border: "white 0px dotted" }}
        >
          {paragraph}
        </p>
        <div>
          <div
            className="mx-[0px] mt-6 flex flex-wrap"
            style={{ border: "#fff 0px solid" }}
          >
            <div
              className="w-full px-3 text-white"
              style={{ border: "green 0px solid", color: "gray" }}
            >
              <List text={infoitem1} />
              <List text="about science" />
              <List text="Point" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
