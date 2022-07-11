import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor(props) {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  const init = {
    height: 400,
    menubar: true,
    plugins: [
      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
      'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | ' +
      'bold italic forecolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent |' +
      'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  }

  const initialValue = props.value ? props.value : ''
  
  return (
    <>
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={initialValue}
        init={init}
      />
    </>
  )}
