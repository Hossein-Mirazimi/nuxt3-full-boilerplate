export function onAfterHydration(fn: () => void) {
  if (typeof window === "undefined") return;
  // @ts-ignore this is for checking if application is already mounted or not
  return window.__mounted ? fn() : onMounted(fn);
}
