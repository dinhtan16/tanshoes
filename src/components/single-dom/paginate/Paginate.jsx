import React from 'react'

const Paginate = ({totalPost,postPerPage,setCurrentPage}) => {

    let pages =[]
    for (let i = 1 ; i < Math.ceil(totalPost/postPerPage) ; i++){
        pages.push(i)
    }
    return (
        <div className='px-8 mt-4 border-t-2 pt-4'>{
            pages.map((page,i) => {
                console.log(page)
           
           return <button key={i} onClick={() => setCurrentPage(page)} className='hover:bg-black hover:text-white border border-black px-3 py-1 ml-2'>{page}</button>
            
        })
        }</div>
  )
}

export default Paginate