"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullscreenLoader } from "@/components/fullscreen-loader";
import { toast } from "sonner"
import { getDocuments, getUsers } from "./actions";
import { Id } from "@/convex/_generated/dataModel";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margins";

type User = {
  id: string;
  name: string;
  avatar: string
}


export function Room({ children }: { children: ReactNode }) {
    const params = useParams()
    const [users, setusers] = useState<User[]>([])

    const fetchUsers = useMemo(
     ()=> async ()=> {
        try {
          const list = await getUsers()
          setusers(list)
        } catch (error) {
          toast.error("Failed to fetch users")
          console.log(error);
          
        }
     },
     []
    )

    useEffect(()=> {
      fetchUsers()
    }, [fetchUsers])

  return (
    <LiveblocksProvider
    throttle={16} 
    authEndpoint={async ()=> {
      const endpoint = "/api/liveblocks-auth"
      const room = params.documentId as string

      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({room})
      })

      return await response.json()
    }}
    resolveUsers={({userIds})=>{
 return userIds.map(
  (userid)=> users.find((user)=> user.id === userid) ?? undefined
 )
    }}
    resolveMentionSuggestions={({text})=> {
let filteredUsers = users;

if(text){
filteredUsers = users.filter((user)=> user.name.toLowerCase().includes(text.toLowerCase()))
}

return filteredUsers.map((user)=> user.id)
    }}
    resolveRoomsInfo={async({roomIds})=> {
      const documents = await getDocuments(roomIds as Id<"documents">[]);

      return documents.map((document)=> ({
        id: document.id,
        name: document.name
      }))
    }}
    >
      <RoomProvider 
      id={params.documentId as string} 
      initialStorage={{leftmargin: LEFT_MARGIN_DEFAULT, rightMargin: RIGHT_MARGIN_DEFAULT}}>
        <ClientSideSuspense fallback={<FullscreenLoader label="Room Loading..."/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}