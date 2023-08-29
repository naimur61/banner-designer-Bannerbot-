import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const CanvasComponent = ({ elements }) => {
   const canvasRef = useRef(null);
   const [canvas, setCanvas] = useState(null);

   useEffect(() => {
      const newCanvas = new fabric.Canvas(canvasRef.current);
      setCanvas(newCanvas);

      return () => {
         newCanvas.dispose();
      };
   }, []);

   useEffect(() => {
      if (canvas) {
         canvas.clear();
         elements.forEach((element) => {
            if (element.type === 'text') {
               canvas.add(new fabric.Text(element.text, element));
            } else if (element.type === 'image') {
               fabric.Image.fromURL(element.src, (img) => {
                  img.set(element);
                  canvas.add(img);
               });
            }
         });
      }
   }, [canvas, elements]);

   return <canvas ref={canvasRef} />;
};

export default CanvasComponent;
