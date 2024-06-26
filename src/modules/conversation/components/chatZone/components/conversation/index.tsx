'use client';

import { bubbleType, useChat } from '@/common/hooks/useChatStore';
import { genKey } from '@/common/utils/keyGen';

import { bubbleConfig } from './bubble.config';
import ConversationBubble from './conversationBubble';

const Conversation: React.FC = () => {
  const { chatRecords } = useChat();

  return (
    <>
      <div className="mt-12 flex h-[70vh] w-full flex-col overflow-auto px-[15vw]">
        {chatRecords.map((chat, index) => (
          <ConversationBubble
            key={genKey.next().value as number}
            last={index === chatRecords.length - 1}
            {...{ ...chat, ...bubbleConfig[chat.role as bubbleType] }}
          />
        ))}
      </div>
    </>
  );
};

export default Conversation;
