
import { Button } from '@/components/ui/button'
import { Id } from '@/convex/_generated/dataModel'
import { ExternalLinkIcon, FilePenIcon, MoreVertical, TrashIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import RemoveDialog from '@/components/removeDialog'
import RenameDialog from '@/components/renameDialog'


interface DocumentsMenuProps {
  documentId: Id<"documents">
  title: string
  onNewTab:(id: Id<"documents">)=>void
}


export const DocumentMenu = ({
documentId,
title,
onNewTab
}: DocumentsMenuProps) => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Button variant={"ghost"} size={"icon"} className="rounded-full">
    <MoreVertical className='size-4'/>
</Button>  
  </DropdownMenuTrigger>
  <DropdownMenuContent>
  <RenameDialog documentId={documentId} initialTitle={title}>
    <DropdownMenuItem 
    onSelect={(e)=> e.preventDefault()}
    onClick={(e)=> e.stopPropagation()}
    >
  <FilePenIcon className='size-4 mr-2'/>
  Rename
    </DropdownMenuItem>
    </RenameDialog>
    <RemoveDialog documentId={documentId}>
    <DropdownMenuItem 
    onSelect={(e)=> e.preventDefault()}
    onClick={(e)=> e.stopPropagation()}
    >
  <TrashIcon className='size-4 mr-2'/>
  Remove
    </DropdownMenuItem>
    </RemoveDialog>
    <DropdownMenuItem 
    onClick={()=> onNewTab(documentId)}
    >
      <ExternalLinkIcon className='size-4 mr-2'/>
      Open in a new tab
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

     
  )
}
