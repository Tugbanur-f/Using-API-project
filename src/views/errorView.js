export const createErrorContainer = () => {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.id = 'error';
    return errorDiv;
}
