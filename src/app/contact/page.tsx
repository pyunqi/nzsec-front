import Contact from "@/components/Contact/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is Contact Page for SEC",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default AboutPage;
