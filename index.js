function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const expense = form.expense.value;
    const description = form.description.value;
    const category = form.category.value;

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = `${description} - $${expense} (${category})`;

    document.querySelector('#showcase ul').appendChild(listItem);
    
    form.reset();
}