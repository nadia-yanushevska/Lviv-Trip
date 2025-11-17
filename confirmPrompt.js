// Custom confirmation dialog for image downloads
document.addEventListener('DOMContentLoaded', function() {
    const downloadLinks = document.querySelectorAll('.img-download');
    const modal = document.getElementById('confirmModal');
    const message = document.getElementById('confirmMessage');
    const yesBtn = document.getElementById('confirmYes');
    const noBtn = document.getElementById('confirmNo');
    
    let currentLink = null;
    
    function showModal(fileName) {
        message.textContent = `Завантажити зображення "${fileName}"?`;
        modal.style.display = 'flex';
    }
    
    function hideModal() {
        modal.style.display = 'none';
        currentLink = null;
    }
    
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentLink = this;
            const fileName = this.getAttribute('download');
            showModal(fileName);
        });
    });
    
    yesBtn.addEventListener('click', function() {
        if (currentLink) {
            const link = document.createElement('a');
            link.href = currentLink.href;
            link.download = currentLink.getAttribute('download');
            link.click();
        }
        hideModal();
    });
    
    noBtn.addEventListener('click', hideModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) hideModal();
    });
});