---
layout: layouts/catalog-page
title: Location Fix Type Enum
---

## Enum `LocationFixType`

Represents current GPS fix quality/state.

- `OFFLINE = 0`: Receiver is offline or not producing usable output.
- `NONE = 1`: Receiver is on but does not yet have a fix.
- `FIX_2D = 2`: Two-dimensional fix (latitude/longitude).
- `FIX_3D = 3`: Three-dimensional fix (latitude/longitude/altitude).

## Used by

- Rib:bit GPS Namespace: [Rib:bit GPS Namespace](../namespace_ribbitgps/)
