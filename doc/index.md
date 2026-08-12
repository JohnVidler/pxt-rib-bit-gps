---
layout: layouts/catalog-page
title: Rib:bit GPS Support
mfn:
    - hwidx.org/2/1/1.0
    - hwidx.org/2/1/2.0
hero: rib-bit-hero.png
info: >-
    Rib:bit GPS adds GPS position, time, and receiver-control blocks for Rib:bit projects, with live fix tracking, satellite counts, and NMEA event hooks.
plugins:
    - ts-to-blocks
tags:
    - software
    - api
    - makecode
    - blocks
---

## Overview

Rib:bit GPS helps you add location and time awareness to Rib:bit projects using beginner-friendly blocks.

This page is the learner-first starting point. If you are new, begin with blocks and only jump into TypeScript when you need deeper control.

## What you can build

- GPS trackers and breadcrumb maps
- Position-aware displays
- Outdoor data loggers with timestamps
- Classroom projects that explore coordinates and satellite fixes

## Learning path

- Start with blocks: [Rib:bit GPS Blocks Guide](blocks/)
- Use TypeScript when ready: [Rib:bit GPS TypeScript Reference](typescript/)
- Browse the full API structure: [Rib:bit GPS API Index](api/)

## Example

This example powers GPS on and handles updates when new position data arrives.

```ts
RibBitGPS.switchGPS(RibBit.OnOff.On)

RibBitGPS.onPositionUpdate(function () {
    let lat = RibBitGPS.getLatitude()
    let lon = RibBitGPS.getLongitude()
    let fix = RibBitGPS.has3DFix()

    console.log(`GPS fix: ${fix}, lat: ${lat}, lon: ${lon}`)
})
```

## More resources

- TypeScript namespace docs: [Rib:bit GPS Namespace](namespace_ribbitgps/)
- TypeScript enum docs: [Location Fix Type Enum](enum_locationfixtype/)