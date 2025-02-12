
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from "tiptap-extension-resize-image"
import { useEditorStore } from '@/store/use-editor-store'
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import Text from '@tiptap/extension-text'
import Highlight from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { FontSizeExtension } from '@/extentions/font-size'
import { LineHeightExtension } from '@/extentions/line-height'
import { Ruler } from './Ruler'
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { Threads } from './threads'
import { useStorage } from '@liveblocks/react'
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins'

interface EditorProps {
  initialContent?: string | undefined
}

export default function Editor({initialContent}:EditorProps) {
  const leftMargin = useStorage((root)=> root.leftmargin)
  const rightMargin = useStorage((root)=> root.rightMargin)
  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental:true
  });
const {setEditor} = useEditorStore()

   const editor = useEditor({
    autofocus:true,
    onCreate({editor}){
   setEditor(editor)
    },
    onDestroy(){
   setEditor(null)
    },
    onUpdate({editor}){
      setEditor(editor)
       },
    onSelectionUpdate({editor}){
      setEditor(editor)
       },
    onTransaction({editor}){
      setEditor(editor)
       },
    onFocus({editor}){
      setEditor(editor)
       },
    onBlur({editor}){
      setEditor(editor)
       },
    onContentError({editor}){
      setEditor(editor)
       },
    editorProps:{
        attributes:{
            style: 
            `padding-left:${leftMargin ?? LEFT_MARGIN_DEFAULT}px; padding-right:${rightMargin ?? RIGHT_MARGIN_DEFAULT}px`,
            class:"focus:outline-none print:border-0 bg-white border-[#c7c7c7] border flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
        }

    },
    extensions: [
        StarterKit.configure({
          history: false
        }),
        liveblocks,
        FontSizeExtension,
        LineHeightExtension.configure({
          types: ["heading", "paragraph"],
          defaultLineHeight: "normal"
        }),
        FontFamily,
        TextStyle,
        Text,
        Color,
        Table,
        TextAlign.configure({
          types: ["heading", "paragraph"]
        }),
        Link.configure({
          openOnClick: false,
          autolink:true,
          defaultProtocol: "https"
        }),
        Highlight.configure({
          multicolor: true
        }),
        TableCell,
        TableHeader,
        TableRow,
        Image,
        ImageResize,
        Underline,
        TaskItem.configure({
            nested: true
        }),
        TaskList
    ],
    immediatelyRender:false,
  })

  return (
    <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
        <Ruler/>
        <div className='min-w-max flex justify-center w-[816px] py-6 print:py-0 mx-auto print:w-full print:min-w-0
        '>
        <EditorContent editor={editor} />
        <Threads editor={editor}/>
        </div>
    </div>
  )
}
