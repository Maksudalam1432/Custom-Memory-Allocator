const MemoryBlock = ({ block }) => {
  return (
    <div
      className={`w-16 h-16 flex items-center justify-center rounded text-white font-bold ${
        block.status === "Free" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {block.status === "Free" ? "Free" : block.id}
    </div>
  );
};

export default MemoryBlock;
