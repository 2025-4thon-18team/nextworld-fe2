import React, { useState } from "react";
import Header from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import DummyCover from "@/assets/dummycover.png";

interface Work {
  id: number;
  title: string;
  thumbnail: string;
  author: string;
  genre: string;
  views: number;
  likes: number;
  price: number;
  date: string;
  description: string;
  rating: number;
  keywords: string[];
}

const mockWorks: Work[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "그녀가 웃던 마지막 봄날 2화",
  thumbnail: DummyCover,
  author: "작가명",
  genre: "로맨스",
  views: 44,
  likes: 4,
  price: 100,
  date: "2025.09.01",
  rating: 4.9,
  keywords: ["로맨스", "감성", "눈물주의"],
  description:
    "피폐해진 세상 속, 그리고 그곳의 마지막 기억이었다. —너의 세상에 사랑이라 불리는 것, ‘마지막 봄날’을 맞이할 자격은 누가 있을까?",
}));

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "new" | "favorite">("home");

  const tabs: { key: "home" | "new" | "favorite"; label: string }[] = [
    { key: "home", label: "홈" },
    { key: "new", label: "신규" },
    { key: "favorite", label: "관심" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-screen-xl px-6 mt-8">
        {/* 🔹 상단 탭 */}
        <div className="flex space-x-6 border-b border-gray-200 mb-6 text-gray-600 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 ${
                activeTab === tab.key
                  ? "text-purple-600 border-b-2 border-purple-600 font-semibold"
                  : "hover:text-purple-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🔹 탭 콘텐츠 */}
        <AnimatePresence mode="sync">
          {/* ✅ 홈 탭 (금주의 유니버스 + 인기 작품 + 인기 포스트) */}
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* 금주의 유니버스 */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold mb-4">금주의 유니버스</h2>
                <div className="grid grid-cols-5 gap-6">
                  {/* 대표 이미지 */}
                  <div className="col-span-2">
                    <img
                      src={mockWorks[0].thumbnail}
                      alt={mockWorks[0].title}
                      className="rounded-lg shadow-md w-full h-[350px] object-cover"
                    />
                  </div>

                  {/* 상세 카드 */}
                  <div className="col-span-3 grid grid-cols-2 gap-4">
                    {mockWorks.slice(0, 4).map((work) => (
                      <div
                        key={work.id}
                        className="border rounded-xl p-4 hover:shadow-md transition bg-white"
                      >
                        <h3 className="font-semibold text-sm mb-2 text-gray-800">
                          {work.title}
                        </h3>
                        <div className="flex justify-between text-xs text-gray-500 mb-2">
                          <span>{work.price} P 필요</span>
                          <span>⭐ {work.rating}</span>
                        </div>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                          {work.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {work.keywords.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-purple-100 text-purple-600 text-[11px] px-2 py-[2px] rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between text-[11px] text-gray-400">
                          <span>👁 {work.views}</span>
                          <span>💬 {work.likes}</span>
                          <span>{work.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 인기 작품 */}
              <section className="mb-12">
                <h2 className="text-lg font-semibold mb-4">인기 작품</h2>
                <div className="grid grid-cols-6 gap-4">
                  {mockWorks.map((work) => (
                    <div
                      key={work.id}
                      className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                    >
                      <img
                        src={work.thumbnail}
                        alt={work.title}
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-3 text-center text-sm">
                        <p className="font-semibold text-gray-800 line-clamp-1 mb-1">
                          {work.title}
                        </p>
                        <div className="flex justify-center gap-1 flex-wrap">
                          {work.keywords.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-500 text-[11px] px-2 py-[2px] rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 인기 포스트 */}
              <section>
                <h2 className="text-lg font-semibold mb-4">인기 포스트</h2>
                <div className="grid grid-cols-3 gap-6">
                  {mockWorks.slice(0, 6).map((work) => (
                    <div
                      key={work.id}
                      className="border rounded-xl p-5 hover:shadow-md transition bg-white"
                    >
                      <div className="flex gap-4">
                        <img
                          src={work.thumbnail}
                          alt={work.title}
                          className="w-24 h-32 rounded-md object-cover"
                        />
                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="font-semibold text-sm mb-1 text-gray-800">
                              {work.title}
                            </h3>
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                              <span>{work.price} P 필요</span>
                              <span>⭐ {work.rating}</span>
                            </div>
                            <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                              {work.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {work.keywords.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="bg-purple-100 text-purple-600 text-[11px] px-2 py-[2px] rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between text-[11px] text-gray-400">
                            <span>👁 {work.views}</span>
                            <span>💬 {work.likes}</span>
                            <span>{work.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* ✅ 신규 탭 (첫 번째 코드 결합) */}
          {activeTab === "new" && (
            <motion.div
              key="new"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <section className="mb-12">
                <h2 className="text-lg font-semibold mb-4">신규 작품</h2>
                <div className="grid grid-cols-2 gap-8">
                  {/* 왼쪽: 카드 3열 */}
                  <div className="grid grid-cols-3 gap-4">
                    {mockWorks.concat(mockWorks).map((work) => (
                      <div
                        key={work.id}
                        className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                      >
                        <img
                          src={work.thumbnail}
                          alt={work.title}
                          className="h-56 w-full object-cover"
                        />
                        <div className="p-3 text-center text-sm">
                          <p className="font-semibold text-gray-800 mb-1">[작품 제목]</p>
                          <div className="flex justify-center gap-1 flex-wrap">
                            {work.keywords.map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-500 text-[11px] px-2 py-[2px] rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 오른쪽: 신규 포스트 */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">신규 포스트</h2>
                    <div className="space-y-4">
                      {mockWorks.map((work) => (
                        <div
                          key={work.id}
                          className="border rounded-lg p-4 hover:shadow-sm transition bg-white"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <h3 className="font-medium text-sm text-gray-800 line-clamp-1">
                              {work.title}
                            </h3>
                            <span className="text-xs text-yellow-500 font-semibold">
                              {work.price} P
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                            {work.description}
                          </p>
                          <div className="flex justify-between text-[11px] text-gray-400">
                            <span>👁 {work.views}</span>
                            <span>💬 {work.likes}</span>
                            <span>{work.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* ✅ 관심 탭 (첫 번째 코드 결합) */}
          {activeTab === "favorite" && (
            <motion.div
              key="favorite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* 관심 작품 */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4">관심 작품</h2>
                <div className="grid grid-cols-4 gap-6">
                  {mockWorks.slice(0, 4).map((work, i) => (
                    <div
                      key={work.id + i}
                      className={`border rounded-lg p-2 shadow-sm hover:shadow-md transition ${
                        i === 0 ? "border-purple-400" : ""
                      }`}
                    >
                      <img
                        src={work.thumbnail}
                        alt={work.title}
                        className="rounded-md w-full h-[220px] object-cover"
                      />
                      <div className="p-2 text-center text-sm">
                        <p className="font-semibold text-gray-800 mb-1">
                          [작품 제목]
                        </p>
                        <span
                          className={`${
                            i === 0
                              ? "text-white bg-purple-500"
                              : "text-gray-500 bg-gray-100"
                          } text-[11px] px-2 py-[2px] rounded-full`}
                        >
                          {i === 0 ? "연재 중" : "완결"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 독서목록 */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4">독서목록</h2>
                <div className="border rounded-lg divide-y">
                  {mockWorks.slice(0, 4).map((work) => (
                    <div
                      key={work.id}
                      className="flex justify-between items-center p-3 text-sm"
                    >
                      <span className="text-gray-700">{work.title}</span>
                      <span className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{work.price} P</span>
                        <span>💬 {work.likes}</span>
                        <span>👁 {work.views}</span>
                        <span>{work.date}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 신규 포스트 */}
              <section className="mb-10">
                <h2 className="text-lg font-semibold mb-4">신규 포스트</h2>
                <div className="grid grid-cols-3 gap-4">
                  {mockWorks.slice(0, 3).map((work) => (
                    <div
                      key={work.id}
                      className="border rounded-lg p-4 hover:shadow-sm transition bg-white"
                    >
                      <h3 className="font-medium text-sm mb-2">
                        {work.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                        {work.description}
                      </p>
                      <div className="flex justify-between text-[11px] text-gray-400">
                        <span>👁 {work.views}</span>
                        <span>💬 {work.likes}</span>
                        <span>{work.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 신규 유니버스 작품 */}
              <section>
                <h2 className="text-lg font-semibold mb-4">신규 유니버스 작품</h2>
                <div className="grid grid-cols-6 gap-4">
                  {mockWorks.concat(mockWorks).map((work) => (
                    <div
                      key={work.id}
                      className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                    >
                      <img
                        src={work.thumbnail}
                        alt={work.title}
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-2 text-center text-sm">
                        <p className="font-medium text-gray-800 line-clamp-1">
                          [작품 제목]
                        </p>
                        <span className="text-xs text-gray-500">#{work.genre}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default HomePage;
