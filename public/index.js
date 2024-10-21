// This function increments numbers from 0 to the specified target
function incrementCounter(element, target) {
    let currentNumber = 0;
    const increment = Math.ceil(target / 100); // Adjust speed of count
    const interval = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= target) {
            currentNumber = target;
            clearInterval(interval);
        }
        element.innerText = currentNumber + "+";
    }, 10); // Adjust the speed of the count
}

// Example usage with multiple counters
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter span.count');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); // Get target number from attribute
        incrementCounter(counter, target);
    });
});