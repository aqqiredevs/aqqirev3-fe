import React from "react";
import LineTabs from "../lineTabs/lineTabs";
import MarketForcesReportsTestData from "../lineTabs/lineTabsTestData/marketForcesReportsTestData";

const MarketForcesReports = () => {
  const itemsPerPage = 3;
  const data = MarketForcesReportsTestData;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // const mappedTabs = Array.from({length: pageCount}).map((_, pageIndex) => ({
  //   id: `page-${pageIndex}`,

  //   content: (
  //       <div className="flex flex-col gap-3">
  //           {data.slice(pageIndex * itemsPerPage)}

  //       </div>

  //   ),
  // }));

  return (
    <div>
      {/* <LineTabs items={mappedTabs} activePillId="marketForcesReportsTabs" /> */}
    </div>
  );
};

export default MarketForcesReports;
