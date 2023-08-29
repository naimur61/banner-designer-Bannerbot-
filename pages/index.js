import CanvasComponent from '@/components/canvasComponent';
import ElementForm from '@/components/elementForm';
import { useState } from 'react';

const BannerDesigner = () => {
   const [elements, setElements] = useState([]);

   const addElement = (element) => {
      setElements([...elements, element]);
   };

   return (
      <div>
         <h1>Banner Designer</h1>
         <ElementForm addElement={addElement} />
         <CanvasComponent elements={elements} />
      </div>
   );
};

export default BannerDesigner;
