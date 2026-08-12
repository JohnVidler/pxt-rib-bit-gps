---
layout: layouts/catalog-page
title: Rib:bit GPS TypeScript Reference
---

## Overview

This page documents the TypeScript-facing API for Rib:bit GPS.

If you are learning, start with [Rib:bit GPS Support](../) and [Rib:bit GPS Blocks Guide](../blocks/).

## Quick call summary

- Power and events: `switchGPS()`, `isGPSOn()`, `onPositionUpdate()`, `onNEMAData()`, `onTimeUpdate()`
- Position and fix status: `has2DFix()`, `has3DFix()`, `satellites()`, `getAccuracy()`, `getLatitude()`, `getLongitude()`, `getAltitude()`
- Time and date: `getTime()`, `getDate()`, `getHour()`, `getMinute()`, `getSecond()`, `saveGPSTime()`
- Utility: `toLongFloatString()`

## Example

```ts
RibBitGPS.switchGPS(RibBit.OnOff.On)

RibBitGPS.onPositionUpdate(function () {
    let lat = RibBitGPS.getLatitude()
    let lon = RibBitGPS.getLongitude()
    let fix = RibBitGPS.has3DFix()

    console.log(`GPS fix: ${fix}, lat: ${lat}, lon: ${lon}`)
})
```

## API details

- API index: [Rib:bit GPS API Index](../api/)
- Namespace details: [Rib:bit GPS Namespace](../namespace_ribbitgps/)
- Enum details: [Location Fix Type Enum](../enum_locationfixtype/)
