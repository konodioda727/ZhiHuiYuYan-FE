'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import Breakline from '@/common/components/elements/Breakline';
import BreaklineDashed from '@/common/components/elements/BreaklineDashed';

type ArticleItem = {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  readings: number;
};

type RecordItem = {
  id: number;
  type: string;
  value: number;
};

interface TabFocusProps {
  isFocusded: boolean;
  children: React.ReactNode;
}

interface ArticleItemProps {
  item: ArticleItem;
}

interface RecordItemProps {
  item: RecordItem;
}

const TAB_ITEMS = [
  { id: 1, value: '研究热点' },
  { id: 2, value: '时事新闻' },
];

const ARTICLE_ITEMS: ArticleItem[] = [
  {
    id: 1,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 2,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 3,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
  {
    id: 4,
    title: '标题',
    content: '内容',
    timestamp: '2024-03-30',
    readings: 999,
  },
];

const TabFocus: React.FC<TabFocusProps> = ({ isFocusded, children }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="-mr-10 flex w-[25%] cursor-pointer items-center justify-center gap-2"
    >
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-left.png"
          alt="main-bg"
          width={45}
          height={21}
        />
      )}
      {children}
      {isFocusded && (
        <Image
          src="/images/main/tab-focus-right.png"
          alt="main-bg"
          width={45}
          height={21}
        />
      )}
    </motion.div>
  );
};

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="flex h-[18vh] w-full cursor-pointer px-[7%] pt-[2vh]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex flex-[4] flex-col">
          <h3 className={`text-xl ${isHovered && 'underline'}`}>
            {item.title}
          </h3>
          <p className="pt-1 text-[#939393]">{item.content}</p>
          <span className="absolute bottom-0 flex text-sm text-[#9F9F9F]">
            <p>发布时间：{item.timestamp}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p>阅读量：{item.readings}</p>
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <Image
            src="/images/main/article-image.png"
            alt="main-bg"
            width={124}
            height={83}
            className={`h-full w-full select-none ${isHovered && 'blur-lg' && 'scale-110'}`}
          />
        </div>
      </motion.div>
      <Breakline className="w-[90%]" />
    </>
  );
};

const RecordItem: React.FC<RecordItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-4">
        <p className="text-[#AC6461]">{item.value}</p>
        <p className="font-bold text-[#0B489B]">{item.type}</p>
      </div>
      {item.id !== 3 && (
        <BreaklineDashed className="relative -bottom-5 border-r-2" />
      )}
    </>
  );
};

const ArticleColumn: React.FC = () => {
  const [focusedItem, setFocusedItem] = useState(1);

  return (
    <div className="flex flex-[2.5] flex-col">
      <div className="flex h-[8vh] items-center">
        {TAB_ITEMS.map((item) => (
          <TabFocus key={item.id} isFocusded={focusedItem === item.id}>
            <p
              className="text-2xl font-bold text-[#9B361C]"
              onClick={() => {
                setFocusedItem(item.id);
              }}
            >
              {item.value}
            </p>
          </TabFocus>
        ))}
      </div>
      <div className="flex h-full flex-col items-center rounded-xl border border-[#BBBBBB]">
        {ARTICLE_ITEMS.map((item) => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ArticleColumn;