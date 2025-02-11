"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { templates } from "@/constants/templates"
import { api } from "@/convex/_generated/api"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { useMutation } from "convex/react"
import { useRouter } from "next/navigation"
import { useState } from "react"




export const TemplatesGallery = () => {
  const  [isCreating, setIsCreating] = useState(false)
  const router = useRouter();
  const create = useMutation(api.documents.create);
  const { toast } = useToast()
  const onTemplateclick = (title: string, initialContent: string)=>{
setIsCreating(true)
create({title, initialContent})
.catch(()=>  toast({
  variant: "destructive",
  title: "Uh oh! Something went wrong.",
}))
.then((documentId)=> {
  toast({
    variant: "default",
    title: "Document Created"
  })
  router.push(`/documents/${documentId}`);
})
.finally(()=> {
  setIsCreating(false)
})
  }
  return (
    <div className="bg-[#F1F3F4]">
<div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-x-4">
<h3 className="font-medium">Start a new document</h3>
<Carousel>
  <CarouselContent>
    {templates.map((template)=> (
      <CarouselItem
      key={template.id}
      className="basic-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-[14.285714%] pl-4"
      >
        <div
        className={cn(
          "aspect-[3/4] flex flex-col gap-y-2.5",
          isCreating && "pointer-events-none opacity-50"
        )}
        >
<button
  disabled={isCreating}
  onClick={() => onTemplateclick(template.label, "")}
  style={{
    backgroundImage: `url(${template.imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="size-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
/>

  <p className="text-sm font-medium truncate">
    {template.label}
  </p>

        </div>

      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious/>
  <CarouselNext/>
</Carousel>
</div>
    </div>
  )
}
