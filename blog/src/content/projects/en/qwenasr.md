---
title: QwenASR
tagline: A fast, pure-Rust, CPU-only inference engine for Qwen3-ASR speech-to-text, tuned for Apple Silicon.
url: https://github.com/huanglizhuo/QwenASR
domain: github.com/huanglizhuo/QwenASR
order: 5
facts:
  - label: Tech stack
    value: Pure Rust, CPU-only — no Python, no GPU, no tensor framework, only libc
  - label: Optimization
    value: Hand-written NEON / Accelerate / AMX-aware kernels for Apple Silicon
  - label: Performance
    value: Transcribes a 28-second clip in 613 ms on an M5 Pro (46× realtime)
  - label: Features
    value: Offline & streaming transcription, live capture with VAD, SRT/VTT subtitles, structured JSON, forced alignment
  - label: Install
    value: cargo install qwen-asr-cli
faq:
  - question: Do I need a GPU or Python to run QwenASR?
    answer: No. It is a pure-Rust, CPU-only inference engine — no Python, no GPU, no tensor framework, only libc.
  - question: How fast is it?
    answer: It transcribes a 28-second clip in 613 ms on an M5 Pro (46× realtime), beating GPU-based MLX implementations.
---

QwenASR is a fast, pure-Rust, CPU-only inference engine for Qwen3-ASR speech-to-text, tuned for Apple Silicon with hand-written NEON / Accelerate / AMX-aware kernels.

## Performance

It transcribes a 28-second clip in 613 ms on an M5 Pro (46× realtime), beating GPU-based MLX implementations.

## Features

- Offline and streaming transcription
- Live capture with VAD
- SRT/VTT subtitles
- Structured JSON output
- Forced alignment

## Install

```sh
cargo install qwen-asr-cli
```
