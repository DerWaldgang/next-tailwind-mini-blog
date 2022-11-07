import PageLayout from "../components/layout/PageLayout";
import FirstSection from "../components/sections/FirstSection";
import SecondSection from "../components/sections/SecondSection";
import ThirdSection from "../components/sections/ThirdSection";

export default function Home() {
  return (
    <PageLayout>
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
    </PageLayout>
  );
}
