const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.getAttribute("data-target"));

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.textContent = Math.ceil(count);

            setTimeout(updateCounter, 20);

        } else {

            counter.textContent = target;

        }

    };

    updateCounter();

});