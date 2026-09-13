import React from 'react'

function Sidebar() {
  return (
   <aside className='flex h-full w-60 flex-col border-r border-gray-200 bg-white'>

<div className='flex h-16 items-center border-b border-gray-200 px-5'>
    <div className='text-lg font-bold text-gray-900'>
       <h1 className='text-lg font-bold text-gray-900'>

PDF AI
       </h1>
    </div>

{/* navigation  */}

<nav className='flex-1 px-3 py5'>
<p className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400'>
Menu 
</p>

<div className='space-y-1'>
<button className='flex w-full items-center gap-3 rounded-lg bg-gray-100 px-3 py2.5 text-sm font-medium text-gray-900'>
 <span>⌂</span>
            Dashboard
</button>

<button className='flex w-full items-center gap-3 rounded-lg bg-gray-100 px-3 py2.5 text-sm font-medium text-gray-900'>
 <span>⌂</span>
            Documents 
</button>
</div>



{/* Recents documents  */}

<div className='mt-8'>
    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Recent Documents
    </p>

<div className='space-y-1'>

<button className='w-full truncate rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50'>
React  Notes 
</button>


<button className='w-full truncate rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50'>
Javascript  Notes 
</button>

<button className='w-full truncate rounded-lg px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50'>
Jast  Notes 
</button>

</div>


</div>

</nav>


{/* bottom  */}

<div className='border-t border-gray-200 p-3'>

<button className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm  text-gray-600 hover:bg-gray-50'>
    <span>⚙️</span>
          Settings
</button>

 <div className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold">
            M
          </div>

          <div>
            <p className='text-sm font-medium text-gray-800'>User</p>
 <p className="text-xs text-gray-400">
              Free Plan
            </p>
          </div>
          </div>
</div>

</div>
   </aside>
  )
}

export default Sidebar