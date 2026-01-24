//% block="Rib:Bit GPS"
//% color="#0dcfae"
//% icon="\u26A0"
//% groups=[ "Time Functions","Spatial Functions" ]
namespace RibBitGPS {
    //% block="switch gps $state \u26A0"
    export function switchGPS(state: RibBit.OnOff = RibBit.OnOff.On): void {
        return
    }

    //% block="is GPS on? \u26A0"
    //% advanced="true"
    export function isGPSOn(): boolean {
        return false;
    }

    //% block="on a position update \u26A0"
    //% group="Spatial Functions"
    export function on2DPositionUpdate(cb: () => void): void {
        return
    }

    //% block="accuracy \u26A0"
    //% group="Spatial Functions"
    export function getAccuracy(): number {
        return 10;
    }

    //% block="latitude \u26A0"
    //% group="Spatial Functions"
    export function getLatitude(): number {
        return 0;
    }

    //% block="longitude \u26A0"
    //% group="Spatial Functions"
    export function getLongitude(): number {
        return 0;
    }

    //% block="altitude \u26A0"
    //% group="Spatial Functions"
    export function getAltitude(): number {
        return 0;
    }

    //% block="on a time update \u26A0"
    //% group="Time Functions"
    export function onTimeUpdate(cb: () => void): void {
        return
    }

    //% block="the current time \u26A0"
    //% group="Time Functions"
    export function getTime(): string {
        return "hh:mm:ss";
    }

    //% block="the current date \u26A0"
    //% group="Time Functions"
    export function getDate(): string {
        return "YYYY:MM:DD";
    }

    //% block="the hour \u26A0"
    //% group="Time Functions"
    //% advanced="true"
    export function getHour(): number {
        return 0;
    }

    //% block="the minute \u26A0"
    //% group="Time Functions"
    //% advanced="true"
    export function getMinute(): number {
        return 0;
    }

    //% block="the second \u26A0"
    //% group="Time Functions"
    //% advanced="true"
    export function getSecond(): number {
        return 0;
    }

    //% block="save GPS time \u26A0"
    //% group="Time Functions"
    export function saveGPSTime(): void {
        return;
    }
}