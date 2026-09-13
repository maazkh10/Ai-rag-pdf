import React from 'react'

function PdfViewer() {
  return (
    <div className='h-full w-full bg-gray-100 p-6'>
        <div className='flex h-full items-center  justify-center rounded-xl bg-white shadow-sm'>
<div className='text-center '>
         <div className="mb-3 text-4xl">📄</div>

<h2 className='text-lg font-semibold text-gray-800'>PDF Viewer</h2>
<p className="mt-1 text-sm text-gray-500">
            Your document will appear here
          </p>
</div>
        </div>

    </div>
  )
}

export default PdfViewer