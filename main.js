
const taskModal = document.getElementById('taskModal');


function openModal() {
    taskModal.classList.remove('hidden');
}


function closeModal(modal) {
    modal.classList.add('hidden');
} 


window.addEventListener('click', (e) => {
    if (e.target === taskModal) {
        closeModal();
    }
});


document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    closeModal();  
});

document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    closeModal(taskModal);
});


document.getElementById('addMultipleForm').addEventListener('submit', (e) => {
    e.preventDefault();
   
    closeModal(addMultipleModal);
});