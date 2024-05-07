const ProductSkeleton = () => {
  return (
      <div className='flex flex-col justify-center items-center border w-full'>
        <div className='rounded-t-lg h-[200px] bg-gray-200 animate-pulse'>
          {/* Placeholder for image */}
        </div>
        <div className='flex justify-between items-center bg-gray-200 p-3 mt-3 rounded-md w-full h-24 animate-pulse'>
          <div className='p-3'>
            <div className='h-5 bg-gray-200 rounded animate-pulse'></div>
            <div className='mt-2 h-4 bg-gray-200 rounded animate-pulse'></div>
          </div>
          <div className='h-5 bg-gray-200 rounded animate-pulse'></div>
        </div>
      </div>
  )
}

export default ProductSkeleton
