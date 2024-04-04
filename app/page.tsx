'use client'
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SuperflowsButton } from '@superflows/chat-ui-react';
import { SuperflowsChat } from '@superflows/chat-ui-react';

export default function Page() {
  return (
    <>
      <main>
      <SuperflowsChat
        superflowsApiKey='sfk-5f66990d-06b6-4251-a057-5d5828474aab'
        userDescription={"..."}
        userApiKey={"..."}
        AIname={"Kayacoach"}
      />
      </main>
      
    </>
  );
}
