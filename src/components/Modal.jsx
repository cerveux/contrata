
function Modal({children, isOpen, closeModal}) {


  isOpen? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

  
     return ( 
        <article className={` absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 items-center justify-center ${isOpen? "flex":"hidden"}`} onClick={closeModal}>
  
        <div className="flex" onClick={(e)=>e.stopPropagation()}>
          
          {children}

        </div>
      </article>
     );
}

export default Modal;