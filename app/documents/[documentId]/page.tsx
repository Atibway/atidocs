import { auth } from "@clerk/nextjs/server"
import { Documentpage } from "./documents"
import { Id } from "@/convex/_generated/dataModel"
import { preloadQuery } from "convex/nextjs"
import { api } from "@/convex/_generated/api"

interface DocumentIdpageProps {
  params: Promise<{documentId: Id<"documents">}>
}
const DocumentIdpage = async({params}: DocumentIdpageProps) => {
  const {documentId} = await params
   const {getToken} = await auth()
   const token = await getToken({template: "convex"}) ?? undefined

   if(!token){
throw new Error("Unauthorized");
   }

   const preloadedDocument = await preloadQuery(
    api.documents.getById,
    {id: documentId},
    {token}
   )

   if(!preloadedDocument){
    throw new Error("Unauthorized");
   }

  return <Documentpage preloadedDocument={preloadedDocument}/>
}

export default DocumentIdpage