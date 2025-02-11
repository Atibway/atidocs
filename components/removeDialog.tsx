"use client"

import { Id } from "@/convex/_generated/dataModel"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"

  
interface RemoveDialogProps {
    documentId: Id<"documents">
    children: React.ReactNode;
}
  
  export default function RemoveDialog({
documentId,
children
  }:RemoveDialogProps) {
    const remove = useMutation(api.documents.removeById)
    const [isRemoving, setIsRemoving]= useState(false)
    const { toast } = useToast()

    return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
        {children}
        </AlertDialogTrigger>
        <AlertDialogContent onClick={(e) => e.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your document.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={(e)=> e.stopPropagation()}>Cancel</AlertDialogCancel>
            <AlertDialogAction
            disabled={isRemoving}
            onClick={(e)=> {
  e.stopPropagation();
  setIsRemoving(true)
  remove({id: documentId})
  .then(()=> toast({
    variant: "default",
    title: "Document Removed"
  }))
  .catch(()=>  toast({
    variant: "destructive",
    title: "Uh oh! Something went wrong.",
    description: "Your not Authorized To Do This Action"
  }))
  .finally(()=> setIsRemoving(false))
            }}
            >
                Delete
                </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    )
  }
  