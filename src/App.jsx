import Uppy from '@uppy/core'
import Webcam from '@uppy/webcam'
import XHRUpload from '@uppy/xhr-upload'
import { Dashboard, useUppy } from '@uppy/react'

export default function App() {
  const uppy = useUppy(() => {
    return new Uppy().use(Webcam).use(XHRUpload, {
      endpoint: 'http://localhost:5000/image',
      fieldName: 'photo',
      formData: true,
    })
  })

  uppy.on('complete', result => {
    const url = result.successful[0].uploadURL
    console.log(result)
    console.log(url)
  })

  return (
    <div>
      <Dashboard uppy={uppy} plugins={['Webcam']} />
    </div>
  )
}
