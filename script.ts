document.addEventListener("DOMContentLoaded", () => {
    const favoriteContainer = document.querySelector(".challenges-container") as HTMLElement;
    const activeContainer = document.querySelector(".challenges-container-actives") as HTMLElement;

    function updateIcon(icon: HTMLImageElement, isFavorite: boolean) {
        icon.src = isFavorite ? "star.svg" : "unstar.svg";
        icon.dataset.favorite = isFavorite.toString();
    }

    function handleToggleFavorite(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (!target.classList.contains("favorite-toggle-icon")) return;

        const icon = target as HTMLImageElement;
        const isFavorite = icon.dataset.favorite === "true";
        const card = icon.closest(".challenge-card") as HTMLElement;

        if (!card) return;

        // Mover el card al contenedor opuesto
        if (isFavorite) {
            // De favoritos a activos
            updateIcon(icon, false);
            activeContainer.appendChild(card);
        } else {
            // De activos a favoritos
            updateIcon(icon, true);
            favoriteContainer.appendChild(card);
        }
    }

    // Delegación de eventos
    document.body.addEventListener("click", handleToggleFavorite);
});