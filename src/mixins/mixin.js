let mixins = {
    methods: {
        scrollToResults:function(containerClass) {
            let element = document.getElementsByClassName(`.${containerClass}`)[0];
            if (element)
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
        }
    }
}
export default mixins;