const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder'); 

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}

function dragstart(event) {
    if(event.target.parentNode.classList.contains('start')){
        event.target.classList.add('hold', 'start');
    }else if(event.target.parentNode.classList.contains('progress')){
        event.target.classList.add('hold', 'progress');
    }else if(event.target.parentNode.classList.contains('done')){
        event.target.classList.add('hold', 'done');
    }
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);

}

function dragend(event) {
    event.target.className = 'item';

}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function drop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}



