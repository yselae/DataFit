document.addEventListener("DOMContentLoaded", function () {
    var favoriteContainer = document.querySelector(".challenges-container");
    var activeContainer = document.querySelector(".challenges-container-actives");
    function updateIcon(icon, isFavorite) {
        icon.src = isFavorite ? "star.svg" : "unstar.svg";
        icon.dataset.favorite = isFavorite.toString();
    }
    function handleToggleFavorite(e) {
        var target = e.target;
        if (!target.classList.contains("favorite-toggle-icon"))
            return;
        var icon = target;
        var isFavorite = icon.dataset.favorite === "true";
        var card = icon.closest(".challenge-card");
        if (!card)
            return;
        // Mover el card al contenedor opuesto
        if (isFavorite) {
            // De favoritos a activos
            updateIcon(icon, false);
            activeContainer.appendChild(card);
        }
        else {
            // De activos a favoritos
            updateIcon(icon, true);
            favoriteContainer.appendChild(card);
        }
    }
    // Delegación de eventos
    document.body.addEventListener("click", handleToggleFavorite);
});
