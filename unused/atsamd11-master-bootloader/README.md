# SAMD11C14A Arduino-Compatible Bootloader

**fair warning**
>Use of the arduino bootloader *does* assume that your circuit has a USB port available.


## Setup

Arduino compatible bootloaders for SAMD11 and SAMD21 can be found
[here](https://github.com/mattairtech/ArduinoCore-samd/tree/master/bootloaders/zero/binaries). The
SAMD11C14 bootloader is already in this directory for you. The docs are
[here](https://github.com/mattairtech/ArduinoCore-samd/blob/master/bootloaders/zero/README.md).

We need to write this file into the micro's memory. I have been using the `Serial Wire Debug`
interface, which is enabled by default on the D11 hardware. `SWCLK` is on `PA30` and `SWDIO` is on
`PA31`. JTAG is also available, but requires an enable pin pulled low somewhere *I think*. An Atmel
ICE debugger should be able to handle either.

From here on out there are three options for burning the bootloader to your board (documented here
anyway): OpenOCD, the Arduino IDE, and Atmel Studio.


## OpenOCD

To get set up with OpenOCD, see the docs
[here](https://gitlab.cba.mit.edu/pub/hello-world/tools/tree/master/openocd).

Once that's done, you should just need to navigate to this directory and run `openocd`. The
configuration file here has all the relevant commands inside it. If all goes well you'll see
something like this, and then `openocd` will immediately exit.

```
Eriks-MacBook-Pro-3:bootloader erik$ openocd
Open On-Chip Debugger 0.10.0
Licensed under GNU GPL v2
For bug reports, read
	http://openocd.org/doc/doxygen/bugs.html
Info : auto-selecting first available session transport "swd". To override use 'transport select <transport>'.
none separate
adapter speed: 400 kHz
cortex_m reset_config sysresetreq
Info : CMSIS-DAP: SWD  Supported
Info : CMSIS-DAP: JTAG Supported
Info : CMSIS-DAP: Interface Initialised (SWD)
Info : CMSIS-DAP: FW Version = 1.0
Info : SWCLK/TCK = 1 SWDIO/TMS = 1 TDI = 1 TDO = 1 nTRST = 0 nRESET = 1
Info : CMSIS-DAP: Interface ready
Info : clock speed 400 kHz
Info : SWD DPIDR 0x0bc11477
Info : at91samd11c14a.cpu: hardware has 4 breakpoints, 2 watchpoints
    TargetName         Type       Endian TapName            State       
--  ------------------ ---------- ------ ------------------ ------------
 0* at91samd11c14a.cpu cortex_m   little at91samd11c14a.cpu running
target halted due to debug-request, current mode: Thread
xPSR: 0x81000000 pc: 0x000004a0 msp: 0x20000ffc
target halted due to debug-request, current mode: Thread
xPSR: 0x81000000 pc: 0x000004a0 msp: 0x20000ffc
** Programming Started **
auto erase enabled
Info : SAMD MCU: SAMD11C14A (16KB Flash, 4KB RAM)
wrote 4096 bytes from file sam_ba_Generic_D11C14A_SAMD11C14A.bin in 0.703033s (5.690 KiB/s)
** Programming Finished **
** Verify Started **
verified 3904 bytes in 0.388889s (9.804 KiB/s)
** Verified OK **
shutdown command invoked
```

Note that once the bootloader is on your board, OpenOCD will complain if you try to overwrite it
with something else. This happens because the bootloader is protected. To disable this protection,
run `openocd -f unprotect_bootloader.cfg`. Then you can overwrite it without any issues.

## Arduino IDE

If you're going to eventually program your board from the Arduino IDE, this is probably the easiest
option. First, install the MattairTech board cores as described in the "Programming with the Arduino
IDE" section below. Then in the Tools menu, select your board, set your programmer to ATMEL SAM-ICE,
and click Burn Bootloader.

Original docs on this are
[here](https://github.com/mattairtech/ArduinoCore-samd/blob/master/bootloaders/zero/README.md)
(search "Bootloader Firmware Installation").

## Atmel Studio

I haven't tried this yet, but you should be able to do the same thing Jake did for the
[SAMD51](https://gitlab.cba.mit.edu/pub/hello-world/atsamd51/tree/master/bootloader).


# Programming with the Arduino IDE

You have to do a little setup to get the Arduino IDE to talk to your board.

1. Go to Arduino > Preferences, and click on the button next to "Additional Boards Manager URLs"
2. Add `https://www.mattairtech.com/software/arduino/package_MattairTech_index.json`
3. Go to Tools > Board > Boards Manager
4. Search for "Mattair", and install the "MattairTech SAM D|L|C Core for Arduino" package

That's all the installation necessary. To talk with your board, make sure you select the right board
from the boards menu (`GenericD11C14A`), and USBtinyISP for the programmer.

The original documentation is available here
[source](https://github.com/mattairtech/ArduinoCore-samd/blob/master/README.md) (scroll way down, or
seearch for "Installation").
