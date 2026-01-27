//% block="Rib:Bit GPS"
//% color="#0dcfae"
//% icon="\u26A0"
//% groups=[ "Time Functions","Spatial Functions" ]
namespace RibBitGPS {
    export enum LocationFixType {
        //% block="Offline"
        OFFLINE = 0,

        //% block="No Fix"
        NONE = 1,

        //% block="2D Fix"
        FIX_2D = 2,

        //% block="3D Fix"
        FIX_3D = 3
    };

    let location = {
        datetime: {
            hour: 0,
            minute: 0,
            second: 0,
            year: 0,
            month: 0,
            day: 0
        },
        latitude: 0,
        longitude: 0,
        altitude: 0,
        speedOverGround: 0,
        courseOverGround: 0,
        fixType: LocationFixType.NONE,
        satellites: 0
    }

    let gpsState = false;
    let autoUpdateTime = false;

    let _nmeaDataHandler: (line: string) => void = () => {}
    let _updateHandler: () => void = () => {};

    let inputBuffer = "";
    RibBit.__nmeaString = ( fragment: string ) => {
        inputBuffer = inputBuffer + fragment;
        if( inputBuffer.indexOf('\n') > -1 ) {
            parseNMEA( inputBuffer.split('\n', 2)[0] );
        }
        return;
    }
    
    function parseNMEA(input: string): void {
        try { _nmeaDataHandler(input); } catch (err) { /* ... */ }
        let msg = input.split(",");
        switch (msg[0]) {
            case "$GPGGA":
            case "$GNGGA":
                parseGPGGA(msg);
                try { _updateHandler(); } catch (err) { /* ... */ }
                break;

            case "$GPGSA":
            case "$GNGSA":
                location.fixType = parseInt(msg[2]);
                break;

            case "$GPRMC":
            case "$GNRMC":
                parseGPRMC(msg);
                try { _updateHandler(); } catch (err) { /* ... */ }
                break;

            default:
            // Skip
        }
    }

    function parseGPRMC(msg: string[]): void {
        if (msg[2] == 'A') {
            location.datetime.hour = parseInt(msg[1].slice(0, 2));
            location.datetime.minute = parseInt(msg[1].slice(2, 4));
            location.datetime.second = parseInt(msg[1].slice(4));
            location.datetime.year = parseInt(msg[9].slice(4, 6));
            location.datetime.month = parseInt(msg[9].slice(2, 4));
            location.datetime.day = parseInt(msg[9].slice(0, 2));

            location.speedOverGround = parseFloat(msg[7]) * 0.514444;
            location.courseOverGround = parseFloat(msg[8]);
            return;
        }
        location.datetime.hour = 0;
        location.datetime.minute = 0;
        location.datetime.second = 0;
        location.datetime.year = 0;
        location.datetime.month = 0;
        location.datetime.day = 0;

        location.speedOverGround = 0;
        location.courseOverGround = 0;
    }

    function parseGPGGA(msg: string[]): void {
        if (msg.length != 15)
            return;

        location.latitude = computeLatitude(msg[2], msg[3]);
        location.longitude = computeLongitude(msg[4], msg[5]);
        location.altitude = parseFloat(msg[9]);

        // Catch NaN's so we don't blow up folks code later...
        if (location.latitude == NaN)
            location.latitude = 0;
        if (location.longitude == NaN)
            location.longitude = 0;
        if (location.altitude == NaN)
            location.altitude = 0;

        location.satellites = parseInt(msg[7]);
    }

    function computeLatitude(input: string, ns: string): number {
        if (input.length < 4)
            return 0;
        let d = parseInt(input.slice(0, 2));
        let m = parseFloat(input.slice(2)) / 60.0;
        if (ns.toUpperCase() == "S")
            return (d + m) * -1.0;
        return (d + m);
    }

    function computeLongitude(input: string, ew: string): number {
        if (input.length < 4)
            return 0;
        let d = parseInt(input.slice(0, 3));
        let m = parseFloat(input.slice(3)) / 60.0;
        if (ew.toUpperCase() == "W")
            return (d + m) * -1.0;
        return (d + m);
    }

    // ===== //

    //% block="$v as long float number, to $precision decimal places"
    //% advanced="true"
    export function toLongFloatString(v: number, precision: number = 8): string {
        let buffer = `${Math.floor(v)}.`
        let remainder = v - Math.floor(v);
        for (let i = 0; i < precision; i++) {
            buffer += `${Math.floor(remainder * 10)}`;
            remainder = (remainder * 10) - Math.floor(remainder * 10);
        }
        return buffer;
    }

    //% block="switch gps $state \u26A0"
    export function switchGPS(state: RibBit.OnOff = RibBit.OnOff.On): void {
        if( state == RibBit.OnOff.On ) {
            RibBit.ribbit_cmd( RibBit.Device.GPS, RibBit.Command.POWER_ENABLE );
            gpsState = true;
        } else {
            RibBit.ribbit_cmd( RibBit.Device.GPS, RibBit.Command.POWER_DISABLE );
            gpsState = false;
        }
    }

    //% block="is GPS on? \u26A0"
    //% advanced="true"
    export function isGPSOn(): boolean {
        return gpsState;
    }

    //% block="on a position update"
    //% group="Spatial Functions"
    export function onPositionUpdate(cb: () => void): void {
        _updateHandler = cb;
    }

    //% block="on a NMEA event"
    //% group="Spatial Functions"
    export function onNEMAData(cb: (nmea: string) => void): void {
        _nmeaDataHandler = cb;
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