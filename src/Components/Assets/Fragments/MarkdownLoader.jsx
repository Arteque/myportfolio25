import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
const MarkdownLoader = ({mdsrc}) => {

    const [md, setMd] = useState('')

    useEffect(() => {
        if(!mdsrc) return
        fetch(mdsrc)
        .then((res) => res.text())
        .then(setMd)
        .catch((err) => console.log("Ooops:" + err))
    }, [mdsrc])

  return (
    <ReactMarkdown>{md}</ReactMarkdown>
  )
}

export default MarkdownLoader