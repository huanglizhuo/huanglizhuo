import type { ShaderInstance } from "shaders/js";

/**
 * Decorative WebGPU shaders for elements marked `data-shader="<preset>"`.
 *
 * The shaders library (~570 KB brotli) is imported only when the page has such
 * an element and the browser has WebGPU, no reduced-motion and no save-data.
 * Otherwise nothing loads and the element's CSS background is the fallback.
 * Every shader plays continuously; the library drops offscreen canvases to
 * about 1fps on its own.
 */

type Layer = { type: string; id?: string; props?: Record<string, unknown> };
type Preset = {
  layers: () => Layer[];
  // Props re-applied, by layer id, when the theme changes.
  themed?: () => Record<string, Record<string, unknown>>;
};

const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

// The ASCII glyphs use the blog's self-hosted mono face. Astro gives it a
// hashed family name, which is not in the library's Google Fonts list, so
// nothing is fetched from Google.
const glyphFont = () =>
  token("--font-google-sans-code").split(",")[0].replace(/["']/g, "").trim();

const heroTone = () => ({
  tone: {
    colorA: token("--background"),
    colorB: token("--glyph"),
    colorC: token("--accent"),
  },
});

const lostTone = () => ({
  line: { colorA: token("--accent"), colorB: token("--accent") },
});

const PRESETS: Record<string, Preset> = {
  // Signals into text: drifting noise drawn as characters, rippled by the cursor.
  hero: {
    layers: () => [
      {
        type: "SimplexNoise",
        props: { scale: 1.1, speed: 0.18, contrast: 1.4, balance: 0.12 },
      },
      {
        type: "CursorRipples",
        props: { intensity: 8, decay: 7, radius: 0.32, chromaticSplit: 0 },
      },
      {
        type: "Ascii",
        props: {
          characters: "@%#*+=-:. ",
          cellSize: 14,
          fontFamily: glyphFont(),
          gamma: 0.9,
        },
      },
      {
        type: "Tritone",
        id: "tone",
        props: { ...heroTone().tone, blendMid: 0.32 },
      },
    ],
    themed: heroTone,
  },
  // 404: a flatlining signal on worn tape, on a transparent canvas.
  lost: {
    layers: () => [
      {
        type: "Waveform",
        id: "line",
        props: {
          ...lostTone().line,
          style: "line",
          amplitude: 0.25,
          frequency: 0.8,
          lineWidth: 0.008,
          speed: 0.8,
        },
      },
      { type: "VHS", props: { wobble: 2.5, scanlineNoise: 0.8, smear: 0.6 } },
    ],
    themed: lostTone,
  },
  // Podcast audio.
  echopod: {
    layers: () => [
      {
        type: "RadialGradient",
        props: {
          colorA: "#14524a",
          colorB: "#0b1220",
          center: { x: 0.25, y: 0.35 },
          radius: 1.1,
          colorSpace: "oklab",
        },
      },
      {
        type: "Waveform",
        props: {
          style: "bars",
          colorA: "#2dd4bf",
          colorB: "#a7f3d0",
          from: { x: 0.04, y: 0.3 },
          to: { x: 0.96, y: 0.3 },
          count: 64,
          barWidth: 0.5,
          height: 0.5,
          amplitude: 1.1,
          frequency: 1.1,
          speed: 0.9,
        },
      },
      { type: "Glow", props: { intensity: 1.6, threshold: 0.35, size: 22 } },
    ],
  },
  // Lines of code, counted on a terminal.
  octocounts: {
    layers: () => [
      { type: "SolidColor", props: { color: "#050806" } },
      {
        type: "FallingLines",
        props: {
          colorA: "#39ff88",
          colorB: "#39ff8800",
          speed: 0.55,
          speedVariance: 0.5,
          density: 30,
          trailLength: 0.42,
          strokeWidth: 0.1,
        },
      },
      {
        type: "CRTScreen",
        props: {
          colorShift: 1.2,
          scanlineIntensity: 0.35,
          scanlineFrequency: 320,
          vignetteIntensity: 0.7,
          vignetteRadius: 0.6,
        },
      },
    ],
  },
  // A frosted macOS panel over a wallpaper.
  fusebar: {
    layers: () => [
      {
        type: "MeshGradient",
        props: {
          stops: [
            { color: "#14306e", position: 0 },
            { color: "#2f62e8", position: 0.3 },
            { color: "#7fa6ff", position: 0.55 },
            { color: "#f4c3a1", position: 0.8 },
            { color: "#ee8a6a", position: 1 },
          ],
          speed: 0.45,
          swirl: 0.35,
          colorSpace: "oklab",
        },
      },
      {
        type: "Glass",
        props: {
          shape: JSON.stringify({
            type: "roundedRectSDF",
            radius: 0.44,
            height: 0.24,
            rounding: 0.05,
          }),
          center: { x: 0.33, y: 0.3 },
          refraction: 1.3,
          thickness: 0.55,
          blur: 8,
          aberration: 0.35,
          fresnel: 0.25,
          highlight: 0.35,
          tintIntensity: 0.12,
        },
      },
    ],
  },
  // Ninja smoke under a hand-sign detector.
  ketsuin: {
    layers: () => [
      { type: "SolidColor", props: { color: "#0a0806" } },
      {
        type: "Smoke",
        props: {
          colorA: "#ffc46b",
          colorB: "#c2410c",
          emitFrom: { x: 0.12, y: 1 },
          mouseInfluence: 0.8,
          mouseRadius: 0.16,
        },
      },
      {
        type: "ObjectTracker",
        props: {
          threshold: 0.28,
          cellSize: 160,
          strokeColor: "#ffd27a",
          fillColor: "#ffb3470f",
          // Labels are off; an empty font skips the Google Fonts request.
          fontFamily: "",
        },
      },
    ],
  },
  // Speech turned into characters.
  qwenasr: {
    layers: () => [
      { type: "SolidColor", props: { color: "#0d1117" } },
      {
        type: "Waveform",
        props: {
          style: "wave",
          colorA: "#f74c00",
          colorB: "#ffb38a",
          from: { x: 0, y: 0.22 },
          to: { x: 1, y: 0.22 },
          height: 0.5,
          amplitude: 1.15,
          frequency: 1.3,
          speed: 1.1,
        },
      },
      {
        type: "Ascii",
        props: { cellSize: 11, fontFamily: glyphFont() },
      },
    ],
  },
};

type ShadersModule = typeof import("shaders/js");

let lib: Promise<ShadersModule> | undefined;
let live: { inst: ShaderInstance; preset: Preset }[] = [];
// Bumped on every navigation so late async work for an old page is dropped.
let generation = 0;

function canRun() {
  const { connection } = navigator as Navigator & {
    connection?: { saveData?: boolean };
  };
  return (
    "gpu" in navigator &&
    !connection?.saveData &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

async function mount(mod: ShadersModule, el: HTMLElement, gen: number) {
  const preset = PRESETS[el.dataset.shader ?? ""];
  const canvas = el.querySelector("canvas");
  if (!preset || !canvas) return;

  const inst = await mod.createShader(
    canvas,
    { components: preset.layers() },
    {
      disableTelemetry: true,
      onReady: () => el.classList.add("is-live"),
    }
  );
  if (gen !== generation) {
    inst.destroy();
    return;
  }
  live.push({ inst, preset });
}

async function mountAll() {
  const els = document.querySelectorAll<HTMLElement>("[data-shader]");
  if (els.length === 0 || !canRun()) return;

  const gen = generation;
  const mod = await (lib ??= import("shaders/js")).catch(() => {
    lib = undefined; // retry on the next page
  });
  if (!mod || gen !== generation || !mod.isWebGPUSupported()) return;

  await document.fonts.load(`14px "${glyphFont()}"`).catch(() => {});
  if (gen !== generation) return;
  // Decorative: a shader that fails to start leaves its CSS fallback in place.
  els.forEach(el => void mount(mod, el, gen).catch(() => {}));
}

document.addEventListener("astro:page-load", () => {
  const run = () => void mountAll();
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 200);
  }
});

document.addEventListener("astro:before-swap", () => {
  generation++;
  live.forEach(({ inst }) => inst.destroy());
  live = [];
});

// Keep theme-coloured shaders in step with the light/dark toggle.
new MutationObserver(() => {
  for (const { inst, preset } of live) {
    for (const [id, props] of Object.entries(preset.themed?.() ?? {})) {
      inst.update(id, props);
    }
  }
}).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"],
});
