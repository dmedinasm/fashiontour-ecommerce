const ProductSkeleton = () => {
  return (
      <div className='flex flex-col justify-center items-center bg-gray-50 mb-10 w-full animate-pulse rounded-lg'>
        <div className=' h-[200px] bg-gray-50 animate-pulse'>
          {/* Placeholder for image */}
        </div>
        <div className='flex justify-between items-center bg-gray-50 p-3 mt-3 rounded-md w-full h-24 animate-pulse'>
          <div className='p-3'>
            <div className='h-5 bg-gray-50 rounded animate-pulse'></div>
            <div className='mt-2 h-4 bg-gray-50 rounded animate-pulse'></div>
          </div>
          <div className='h-5 bg-gray-50 rounded animate-pulse'></div>
        </div>
      </div>
  )
}

export default ProductSkeleton
