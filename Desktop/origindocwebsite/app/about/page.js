"use client";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Title from "@/components/Title";
import React from "react";

function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col gap-8 p-10">
        <FadeIn>
          <Title title={"私たちのビジョンと使命"} />
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="">
              私たちのビジョンは、未来をより良くするための革新的な変革を実現
              することです。私たちは、技術の力と共に、世界をより持続可能で
              効率的な場所に変え、人々の生活に革新的な価値を提供します。
              <br />
              私たちの使命は、お客様、パートナー、そして会社に対する責任を全うし、持続可能
              な未来を築くことです。私たちは次のことを約束します。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="">
              私たちは社会への貢献を大切にし、教育、環境、健康など、多くの分野で
              支援活動を展開します。私たちは共に社会を良くしていく一翼を担います。
              私たちのビジョンと使命は、私たちの行動と製品に反映されています。
              私たちが提供するすべてのソリューションは、持続可能性、革新、そして
              価値創造に焦点を当てています。
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="">
              パートナーシップと共感：
              お客様、パートナー、社員、そしてコミュニティとの強力なパートナーシップを築きます。
              私たちは共感し、共に成長し、成功を共有します。
            </p>
            <p className="">
              革新的なソリューションの提供：
              常に最新のテクノロジーと知識を活用し、お客様に最高品質の製品とサービスを提供します。
              私たちは確信を維持し、業界の基準を高めます。
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

export default AboutPage;
