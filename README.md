# Notes on Fab Things

## Programming your Homemade In-Circuit Programmer


### 1: Download your debugger 

I use `openocd` which seems to work well on Macs. To install this on Mac you can run

```
brew install openocd
```

### 2: Connect your programmers

The board **doing** the programming is on the right and the board **getting programmed** is on the left.

<img width="700px" src="https://user-images.githubusercontent.com/27078897/192121960-7d66e5bf-eb74-4377-bf84-5426756aa9b0.png"/>

Make sure both are powered and power the **board being programmed first**! That means plug that board into the usb first.

<img width="700px" src="https://user-images.githubusercontent.com/27078897/192121961-2d7f4879-e009-4f0e-bc03-51aa3f67c834.png"/>

### 3: Download [free-dap](https://github.com/ataradov/free-dap)

You can find the binary with the openocd config file we'll need [here](https://github.com/leomcelroy/fab-notes/tree/main/free_dap).

### 4: Flash the firmware

Navigate to the directory you just downloaded. While in that directory run:

```
openocd
```

You should see a message which includes:

```
** Programming Started **
Info : SAMD MCU: SAMD11C14A (16KB Flash, 4KB RAM)
** Programming Finished **
** Verify Started **
** Verified OK **
```

That lets you know your flashing was successful.

## Resources

- http://pub.fabcloud.io/programmers/summary/
- https://mtm.cba.mit.edu/2021/2021-10_microcontroller-primer/openOCD/
- https://fabacademy.org/2020/labs/ulb/students/quentin-bolsee/projects/raspi_openocd/
