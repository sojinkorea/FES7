const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

function handleDragOver(event) {
  event.preventDefault();
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItems = dropTarget.querySelectorAll(".drag-item:not(.dragging)");

  const nextItem = notDraggingItems.find((item) => {});
}

dropTarget.addEventListener("dragover", handleDragOver);
dropTarget.addEventListener("dragover", handleDragOver);
