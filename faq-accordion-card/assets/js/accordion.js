export default function Accordion() {
    let _container, items, _transitionClass;

    function eventHandler(clickEvent) {
        if (
            clickEvent.target.parentElement.hasAttribute('data-accordion-item')
        ) {
            toggleItem(clickEvent.target.parentElement);
        } else if (
            clickEvent.target.parentElement.parentElement.hasAttribute(
                'data-accordion-item'
            )
        ) {
            toggleItem(clickEvent.target.parentElement.parentElement);
        } else if (
            clickEvent.target.parentElement.parentElement.parentElement.hasAttribute(
                'data-accordion-item'
            )
        ) {
            toggleItem(
                clickEvent.target.parentElement.parentElement.parentElement
            );
        }
    }

    function toggleItem(item) {
        closeAllExcept(item);
        item.toggleAttribute('data-active');
    }

    function closeAllExcept(item) {
        items.forEach((itemToHide) => {
            if (itemToHide !== item)
                itemToHide.removeAttribute('data-active');
        });
    }

    return {
        init(container, transitionClass) {
            _container = container;
            _transitionClass = transitionClass;

            items = [..._container.querySelectorAll('[data-accordion-item]')];
            this.transitionClass = transitionClass;

            _container.addEventListener('click', eventHandler);
        },

        set transitionClass(transitionClass) {
            items.forEach((item) => item.classList.add(transitionClass));
        },
    };
}
