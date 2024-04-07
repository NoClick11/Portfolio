const ButtonShowProjects = (document.querySelector('.btn-show-projects'));
const InactiveProjects = (document.querySelectorAll('.project:not(.active)'))

ButtonShowProjects.addEventListener('click', () => {
        showmoreobjects()
        removeButton();
    })

function removeButton() {
    ButtonShowProjects.classList.add("remove");
}

function showmoreobjects() {
    InactiveProjects.forEach(InactiveProjects => {
        InactiveProjects.classList.add('active')}) 
    }