import { useState } from 'react';
import { FaImage, FaFont } from 'react-icons/fa';


const ElementForm = ({ addElement }) => {
   const [elementType, setElementType] = useState('text');
   const [text, setText] = useState('');
   const [imageURL, setImageURL] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (elementType === 'text') {
         addElement({ type: 'text', text });
      } else if (elementType === 'image') {
         addElement({ type: 'image', src: imageURL });
      }
      setText('');
      setImageURL('');
   };

   return (
      <form onSubmit={handleSubmit}>
         <select value={elementType} onChange={(e) => setElementType(e.target.value)}>
            <option value="text">Text</option>
            <option value="image">Image</option>
         </select>
         {elementType === 'text' ? (
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
         ) : (
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Enter image URL" />
         )}
         <button type="submit">Add Element {elementType === 'text' ? <FaFont /> : <FaImage />}</button>
      </form>
   );
};

export default ElementForm;
