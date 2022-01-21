const deletebtn = document.getElementById("deletebtn");
const resid = window.location.pathname.split("/restaurants/")[1]

deletebtn.addEventListener("click", async () => {
    const response = await fetch(`/restaurants/${resid}`, {method: "delete"})
    window.location.assign("/restaurants")
})