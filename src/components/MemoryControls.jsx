const MemoryControls = ({
  allocateCount,
  setAllocateCount,
  allocateMemory,
  deallocateCount,
  setDeallocateCount,
  deallocateSome,
  deallocateAll,
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6 items-center">
     
      <div className="flex gap-2 items-center">
        <input
          type="number"
          value={allocateCount}
          onChange={(e) => setAllocateCount(e.target.value)}
          placeholder="Blocks to allocate"
          className="p-2 border border-gray-300 rounded w-40"
        />
        <button
          onClick={allocateMemory}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Allocate
        </button>
      </div>


      <div className="flex gap-2 items-center">
        <input
          type="number"
          value={deallocateCount}
          onChange={(e) => setDeallocateCount(e.target.value)}
          placeholder="Blocks to deallocate"
          className="p-2 border border-gray-300 rounded w-40"
        />
        <button
          onClick={deallocateSome}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Deallocate
        </button>
      </div>

     
      <button
        onClick={deallocateAll}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Deallocate All
      </button>
    </div>
  );
};

export default MemoryControls;
