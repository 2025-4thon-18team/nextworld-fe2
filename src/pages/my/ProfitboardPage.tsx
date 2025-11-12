import React, { useState } from "react";
import Header from "@/components/Header";
import MySidebar from "@/components/MySidebar";

const MProfitPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "history">(
    "dashboard"
  );

  // 예시 데이터
  const dashboardData = {
    totalSales: 213,
    totalRevenue: 100000,
    platformFee: 20000,
    authorFee: 10000,
  };

  const historyData = Array(7).fill({
    title: "창작물명 창작물명 창작물명 창작물명",
    buyer: "@naounng",
    amount: "+100",
    date: "2025.10.23",
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex flex-1 mx-auto w-full max-w-screen-xl px-6 mt-10">
        {/* ✅ 사이드바 */}
        <MySidebar point={2000} />

        {/* ✅ 본문 */}
        <section className="flex-1 pl-10">
          <h2 className="text-base font-semibold mb-6">수익 현황</h2>

          {/* ✅ 탭 메뉴 */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "dashboard"
                  ? "text-white bg-purple-500 rounded-t-md"
                  : "text-gray-500 bg-gray-100"
              }`}
            >
              대시보드
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-6 py-2 text-sm font-medium ml-1 ${
                activeTab === "history"
                  ? "text-white bg-purple-500 rounded-t-md"
                  : "text-gray-500 bg-gray-100"
              }`}
            >
              판매 내역
            </button>
          </div>

          {/* ✅ 대시보드 탭 */}
          {activeTab === "dashboard" && (
            <div className="text-sm text-gray-700">
              <div className="space-y-2 border-b border-gray-100 pb-4">
                <div className="flex justify-between">
                  <span>판매 작품수</span>
                  <span>{dashboardData.totalSales} 개</span>
                </div>
                <div className="flex justify-between">
                  <span>총 수익 금액</span>
                  <span>₩ {dashboardData.totalRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>원저작 수수료</span>
                  <span>₩ {dashboardData.platformFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>플랫폼 수수료</span>
                  <span>₩ {dashboardData.authorFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-purple-600 font-medium">
                  총 수익 금액
                </span>
                <span className="text-purple-600 font-bold text-lg">
                  ₩{" "}
                  {(
                    dashboardData.totalRevenue -
                    dashboardData.platformFee -
                    dashboardData.authorFee
                  ).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-center mt-10">
                <button className="bg-purple-500 text-white text-sm font-medium px-10 py-2 rounded-md hover:bg-purple-600 transition-colors">
                  정산하기
                </button>
              </div>
            </div>
          )}

          {/* ✅ 판매 내역 탭 */}
          {activeTab === "history" && (
            <div className="mt-4 space-y-4 text-sm text-gray-700">
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-100 pb-3"
                >
                  <div>
                    <p>{item.title}</p>
                    <p className="text-xs text-gray-400">{item.buyer} 구매</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-600 font-medium">
                      {item.amount} P
                    </p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default MProfitPage;
