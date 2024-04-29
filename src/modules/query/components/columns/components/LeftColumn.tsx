'use client';

import BreaklineDashed from '@/common/components/elements/BreaklineDashed';
import { usePaperOrScholarSelected } from '@/common/hooks/useIsPaperOrScholarSelected';
import React, { useEffect, useState } from 'react';
import { ScholarItem, usePersonInfo, usePaperInfo, PaperItem } from '@/common/hooks/useInfo';

interface LeftColumnProps {
  className: string;
}

const RadioItem: React.FC<{val?: any, name: keyof ScholarItem | keyof PaperItem, type: 'scholar' | 'paper'}> = ({name, type, val}) => {
  const [isClicked, setIsClicked] = useState(false);
  const {setFilteredList} = type === 'scholar' ? usePersonInfo() : usePaperInfo()
  useEffect(() => {
    // @ts-ignore
    isClicked && type === 'scholar' && setFilteredList(name, val)
  }, [isClicked]);
  return (
    <div
      className="flex cursor-pointer items-center gap-[0.5vh]"
      onClick={() => setIsClicked(!isClicked)}
    >
      <button
        className={`h-[1.3vh] w-[1.3vh] rounded-[0.5vh] border-2 border-gray-100 ${isClicked ? 'bg-red-800' : 'bg-white'}`}
      ></button>
      <p className="text-[1.3vh] text-gray-500">{val || '选项1'}</p>
    </div>
  );
};

const LeftColumn: React.FC<LeftColumnProps> = ({ className }) => {
  const { PaperOrScholarSelected } = usePaperOrScholarSelected();
  const {filterChoiceList} = usePersonInfo()

  const columnItemStyle =
    'flex w-full flex-col items-center pt-[1.5vh] gap-[1.5vh]';

  return (
    <div className={className}>
      {PaperOrScholarSelected === '论文' && (
        <>
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">日期</p>
            <div className="flex h-[3vh] w-full justify-center gap-[2%]">
              <button className="w-[30%] rounded-[0.5vh] bg-gray-100 pl-[5%] text-left text-[1.2vh] text-gray-500">
                选择
              </button>
              <BreaklineDashed className="w-[10%] border-b-2" />
              <button className="w-[30%] rounded-[0.5vh] bg-gray-100 pl-[5%] text-left text-[1.2vh] text-gray-500">
                选择
              </button>
            </div>
          </div>
          <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">学科</p>
            <div className="h-[15vh] w-[75%] rounded-[0.5vh] bg-gray-100 p-[1vh]">
              <div className="flex flex-col gap-[0.5vh]">
                <p className="text-[1.3vh] text-gray-800">医学（9）</p>
                <p className="text-[1.3vh] text-gray-800">理学（9）</p>
                <p className="text-[1.3vh] text-gray-800">工学（9）</p>
              </div>
            </div>
          </div>
          <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
          <div className={columnItemStyle}>
            <p className="text-[1.8vh] font-semibold text-blue-800">期刊</p>
            <div className="grid w-[75%] grid-cols-2 grid-rows-2">
              {filterChoiceList['belong_db']?.map((item) => <RadioItem name='belong_db' val={item} type='paper'></RadioItem>)}
            </div>
          </div>
        </>
      )}
      {PaperOrScholarSelected === '专家' && (
        <div className={columnItemStyle}>
          <p className="text-[1.8vh] font-semibold text-blue-800">职称</p>
          <div className="grid w-[75%] grid-cols-2 grid-rows-2">
            {filterChoiceList['job_title']?.map((item) => <RadioItem name='job_title' val={item} type='scholar'></RadioItem>)}
          </div>
        </div>
      )}
      <BreaklineDashed className="mb-0 w-[80%] border-b-2" />
      <div className={columnItemStyle}>
        <p className="text-[1.8vh] font-semibold text-blue-800">机构</p>
        <div className="grid w-[75%] grid-cols-2 grid-rows-1">
          {filterChoiceList['work_organization']?.map((item) => <RadioItem name='work_organization' type='scholar' val={item}></RadioItem>)}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
