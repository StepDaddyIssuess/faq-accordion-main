function toggleContentVisibility(plusImage, content) {
    const isExpanded = plusImage.src.includes("icon-minus.svg");

    plusImage.src = isExpanded
    if (isExpanded) {
        plusImage.src = "/faq-accordion-main/assets/images/icon-plus.svg";
        content.style.display = "none";
    } else {
        plusImage.src = "/faq-accordion-main/assets/images/icon-minus.svg";
        content.style.display = "block";
    }
    
}

document.querySelector(".section").addEventListener("click", function (event) {
    const plusImage = event.target.closest(".plus-image");
    
    if (plusImage) {
        const contentId = plusImage.getAttribute("data-target");
        const content = document.getElementById(contentId);

        if (content) {
            toggleContentVisibility(plusImage, content);
        }
    }
});