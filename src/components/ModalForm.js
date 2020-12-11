import React,{useState} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function ModalForm({oldTask,setOldTask,editTask}){
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [text,setText]=useState(oldTask.text)
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const newTask={...oldTask,text:text}
    editTask(newTask.id,newTask.text)
    setOldTask(newTask)
    closeModal()
  }
 
    return (
      <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
       
          <form onSubmit={handleSubmit}>
            <input  type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button type="submit">confirm</button>
          </form>
        </Modal>
      </div>
    );
}

export default ModalForm;