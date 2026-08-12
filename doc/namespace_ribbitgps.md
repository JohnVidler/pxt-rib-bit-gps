---
layout: layouts/catalog-page
title: Rib:bit GPS Namespace
---

## Namespace `RibBitGPS`

Primary GPS namespace with control, event, and data access calls.

## Calls

### `has2DFix()`

- **Parameters:** None
- **Returns:** `boolean`
- **Description:** Reports whether the receiver currently has a 2D fix.

### `has3DFix()`

- **Parameters:** None
- **Returns:** `boolean`
- **Description:** Reports whether the receiver currently has a 3D fix.

### `satellites()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns the number of satellites currently being tracked.

### `toLongFloatString(v, precision = 8)`

- **Parameters:**
  - `v`: Number to convert.
  - `precision`: Number of decimal places.
- **Returns:** `string`
- **Description:** Formats a numeric value as a long decimal string.

### `switchGPS(state = RibBit.OnOff.On)`

- **Parameters:**
  - `state`: Desired GPS power state.
- **Returns:** `void`
- **Description:** Turns the GPS receiver on or off.

### `isGPSOn()`

- **Parameters:** None
- **Returns:** `boolean`
- **Description:** Reports whether GPS is currently powered on.

### `onPositionUpdate(cb)`

- **Parameters:**
  - `cb`: Callback for position updates.
- **Returns:** `void`
- **Description:** Registers a callback for position updates.

### `onNEMAData(cb)`

- **Parameters:**
  - `cb`: Callback for raw NMEA sentence input.
- **Returns:** `void`
- **Description:** Registers a callback for raw NMEA data.

### `getAccuracy()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns estimated horizontal accuracy.

### `getLatitude()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns current latitude.

### `getLongitude()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns current longitude.

### `getAltitude()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns current altitude.

### `onTimeUpdate(cb)`

- **Parameters:**
  - `cb`: Callback for time updates.
- **Returns:** `void`
- **Description:** Registers a callback for GPS time updates.

### `getTime()`

- **Parameters:** None
- **Returns:** `string`
- **Description:** Returns GPS time as a string.

### `getDate()`

- **Parameters:** None
- **Returns:** `string`
- **Description:** Returns GPS date as a string.

### `getHour()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns GPS hour component.

### `getMinute()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns GPS minute component.

### `getSecond()`

- **Parameters:** None
- **Returns:** `number`
- **Description:** Returns GPS second component.

### `saveGPSTime()`

- **Parameters:** None
- **Returns:** `void`
- **Description:** Saves current GPS time to the device workflow.

## Related types

- [Location Fix Type Enum](../enum_locationfixtype/)
