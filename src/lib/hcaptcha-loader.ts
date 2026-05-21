// src/lib/hcaptcha-loader.ts
let loaded = false;

export function loadHCaptcha() {
  if (loaded) return;

  const script = document.createElement("script");
  script.src = "https://js.hcaptcha.com/1/api.js?render=explicit";
  script.async = true;
  document.head.appendChild(script);

  loaded = true;
}

export function waitForHCaptcha(): Promise<any> {
  return new Promise((resolve) => {
    const check = () => {
      if ((window as any).hcaptcha) resolve((window as any).hcaptcha);
      else setTimeout(check, 50);
    };
    check();
  });
}
