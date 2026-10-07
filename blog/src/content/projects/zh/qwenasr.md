---
title: QwenASR
tagline: 快速、纯 Rust、仅 CPU 的 Qwen3-ASR 语音转文字推理引擎，针对 Apple Silicon 优化。
url: https://github.com/huanglizhuo/QwenASR
domain: github.com/huanglizhuo/QwenASR
order: 5
facts:
  - label: 技术栈
    value: 纯 Rust、仅 CPU——无 Python、无 GPU、无张量框架，只依赖 libc
  - label: 优化
    value: 手写 NEON / Accelerate / AMX 感知内核，针对 Apple Silicon
  - label: 性能
    value: M5 Pro 上 613 毫秒转写 28 秒音频（46 倍实时速度）
  - label: 功能
    value: 离线与流式转写、带 VAD 的实时采集、SRT/VTT 字幕、结构化 JSON、强制对齐
  - label: 安装
    value: cargo install qwen-asr-cli
faq:
  - question: 运行 QwenASR 需要 GPU 或 Python 吗？
    answer: 不需要。它是纯 Rust、仅 CPU 的推理引擎——无 Python、无 GPU、无张量框架，只依赖 libc。
  - question: 速度怎么样？
    answer: 在 M5 Pro 上 613 毫秒转写 28 秒音频（46 倍实时速度），超过基于 GPU 的 MLX 实现。
---

QwenASR 是一个快速、纯 Rust、仅 CPU 的 Qwen3-ASR 语音转文字推理引擎，针对 Apple Silicon 优化，手写了 NEON / Accelerate / AMX 感知的内核。

## 性能

在 M5 Pro 上 613 毫秒转写 28 秒音频（46 倍实时速度），超过基于 GPU 的 MLX 实现。

## 功能

- 离线和流式转写
- 带 VAD 的实时采集
- SRT/VTT 字幕
- 结构化 JSON 输出
- 强制对齐

## 安装

```sh
cargo install qwen-asr-cli
```
