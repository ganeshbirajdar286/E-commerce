import React, { useState } from 'react';
import '../QtBox/style.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from "react-icons/io";
import Button from '@mui/material/Button';

function QtBox() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="qtyBox mt-3 flex items-center relative w-[60px]">
      {/* Quantity input field (readOnly) */}
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-full h-[40px] text-[22px] font-medium text-center border border-black rounded-sm focus:outline-none"
      />

      {/* Up/Down buttons */}
      <div className="flex flex-col justify-between h-[40px] absolute right-0 top-0">
        <Button
          onClick={handleIncrease}
          className="!min-w-[20px] !h-[20px] !text-[#000] !p-0 !m-0"
        >
          <IoIosArrowUp />
        </Button>
        <Button
          onClick={handleDecrease}
          className="!min-w-[20px] !h-[20px] !text-[#000] !p-0 !m-0"
        >
          <IoIosArrowDown />
        </Button>
      </div>
    </div>
  );
}

export default QtBox;
