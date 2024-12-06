function showElementsById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden')
}

function hideElementsById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}

