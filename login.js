const label = document.querySelectorAll('form-control input');

labels.forEach(label =>{
    label.innerHTML = label.innerHTML.split('')
    .map((letter, idx) => `<span style="transition.delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})