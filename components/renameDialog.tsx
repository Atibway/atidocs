"use client"

import { Id } from "@/convex/_generated/dataModel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
  
interface RenameDialogProps {
    documentId: Id<"documents">
    initialTitle: string;
    children: React.ReactNode;
}
  
  export default function RenameDialog({
documentId,
initialTitle,
children
  }:RenameDialogProps) {
    const update = useMutation(api.documents.updateById)
    const [isUpdating, setIsUpdating]= useState(false)
     const [title, setTitle] = useState(initialTitle);
     const [open, setOpen] = useState(false);
     const { toast } = useToast()

     const onSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
setIsUpdating(true)

update({id: documentId, title: title.trim() || "Untitled"})
.then(()=> toast({
  variant: "default",
  title: "Document Rename"
}))
.catch(()=>  toast({
  variant: "destructive",
  title: "Uh oh! Something went wrong.",
  description: "Your not Authorized To Do This Action"
}))
.finally(()=> {
  setIsUpdating(false)
  setOpen(false)
})
     }

    return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent onClick={(e)=> e.stopPropagation()}>
<DialogTitle>
  Rename Document
<DialogDescription>
  Enter a new name for this documnet
</DialogDescription>
</DialogTitle>
        <form onSubmit={onSubmit} >
<div className="my-4">
<Input
value={title}
onChange={(e)=> setTitle(e.target.value)}
placeholder="Document name"
onClick={(e)=> e.stopPropagation()}
/>
</div>
<DialogFooter>
  <Button 
  type="button"
  disabled={isUpdating}
  onClick={(e)=> {
    e.stopPropagation();
    setOpen(false)
  }}
  variant={"ghost"}
  >
    Cancel
  </Button>
  <Button
  type="submit"
  disabled={isUpdating}
  onClick={(e)=>e.stopPropagation()
  }
  >
    Save
  </Button>
</DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
      
    )
  }
  