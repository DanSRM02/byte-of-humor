export function modifyPositionElement(element: string) {
  const nodeElement: HTMLElement | null = document.querySelector(element);

  interface maxOffsets {
    maxOffsetX: number;
    maxOffsetY: number;
  }

  function defaultPosition() {
    const transitionValue = "transform .2s ease";
    if (nodeElement) {
      nodeElement.style.transform = `translate(0, 0)`;
      nodeElement.style.transition = transitionValue;
    }
  }

  function changePosition({ maxOffsetX, maxOffsetY }: maxOffsets) {
    const { x, y } = handleBounds({ maxOffsetX, maxOffsetY });
    const translateValue = `translate(${y}vh, ${x}vw)`;
    const transitionValue = "transform .2s ease";

    if (nodeElement) {
      nodeElement.style.transform = translateValue;
      nodeElement.style.transition = transitionValue;
    }
  }

  const handleBounds = ({ maxOffsetX, maxOffsetY }: maxOffsets) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const elWidth = nodeElement?.offsetWidth ?? 100;
    const elHeight = nodeElement?.offsetHeight ?? 100;

    let x = Math.random() * maxOffsetX;
    let y = Math.random() * maxOffsetY;

    const pxX = (x / 100) * viewportWidth;
    const pxY = (y / 100) * viewportHeight;

    if (pxX + elWidth > viewportWidth)
      x = ((viewportWidth - elWidth) / viewportWidth) * 100;
    if (pxY + elHeight > viewportHeight)
      y = ((viewportHeight - elHeight) / viewportHeight) * 100;

    return { x, y };
  };

  return {
    changePosition,
    defaultPosition,
  };
}
