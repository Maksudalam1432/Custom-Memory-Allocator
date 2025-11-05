import { useState } from "react";
import MemoryBlock from "./components/MemoryBlock";
import MemoryControls from "./components/MemoryControls";

function App() {
  const MEMORY_SIZE = 36;
  const [memory, setMemory] = useState(
    Array(MEMORY_SIZE).fill({ status: "Free", id: null })
  );
  const [nextID, setNextID] = useState(1);

  const [allocateCount, setAllocateCount] = useState("");
  const [deallocateCount, setDeallocateCount] = useState("");


  const allocateMemory = () => {
    const count = parseInt(allocateCount);
    if (isNaN(count) || count <= 0) {
      alert("Enter a valid number of blocks to allocate!");
      return;
    }

    const freeIndices = memory
      .map((block, idx) => (block.status === "Free" ? idx : -1))
      .filter((idx) => idx !== -1);

    if (freeIndices.length === 0) {
      alert("Memory full! Cannot allocate more.");
      return;
    }

    const blocksToAllocate = Math.min(count, freeIndices.length);
    const newMemory = [...memory];

    for (let i = 0; i < blocksToAllocate; i++) {
      newMemory[freeIndices[i]] = { status: "Used", id: nextID + i };
    }

    setMemory(newMemory);
    setNextID(nextID + blocksToAllocate);
    setAllocateCount(""); 
  };


  const deallocateSome = () => {
    const count = parseInt(deallocateCount);
    if (isNaN(count) || count <= 0) {
      alert("Enter a valid number of blocks to deallocate!");
      return;
    }

    const usedIndices = memory
      .map((block, idx) => (block.status === "Used" ? idx : -1))
      .filter((idx) => idx !== -1);

    if (usedIndices.length === 0) {
      alert("No allocated memory to deallocate!");
      return;
    }

    const blocksToFree = Math.min(count, usedIndices.length);
    const newMemory = [...memory];

    for (let i = 0; i < blocksToFree; i++) {
      const index = usedIndices[usedIndices.length - 1 - i];
      newMemory[index] = { status: "Free", id: null };
    }

    setMemory(newMemory);
    setDeallocateCount(""); 
  };

  const deallocateAll = () => {
    setMemory(Array(MEMORY_SIZE).fill({ status: "Free", id: null }));
    setNextID(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Custom Memory Allocator (30 Blocks)
      </h1>

      <MemoryControls
        allocateCount={allocateCount}
        setAllocateCount={setAllocateCount}
        allocateMemory={allocateMemory}
        deallocateCount={deallocateCount}
        setDeallocateCount={setDeallocateCount}
        deallocateSome={deallocateSome}
        deallocateAll={deallocateAll}
      />

      <div className="grid grid-cols-6 gap-4">
        {memory.map((block, index) => (
          <MemoryBlock key={index} block={block} />
        ))}
      </div>
    </div>
  );
}

export default App;
