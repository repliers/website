window.addEventListener("load", () => {
  const trackLinks = document.querySelectorAll("a.track");

  trackLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const eventName = link.getAttribute("data-event");
      const attributes = link
        .getAttributeNames()
        .filter((d) => d.indexOf("data-") === 0 && d !== "data-event");
      const properties = Object.fromEntries(
        attributes.map((a) => [toCamelCase(a), link.getAttribute(a)])
      );

      let opened = false;
      const fallback = setTimeout(() => {
        if (!opened) {
          window.open(link.href, "_blank");
        }
      }, 1000);

      try {
        mixpanel.track(eventName, properties, () => {
          clearTimeout(fallback);
          opened = true;
          window.open(link.href, "_blank");
        });
      } catch (e) {
        clearTimeout(fallback);
        window.open(link.href, "_blank");
      }
    });
  });
});
