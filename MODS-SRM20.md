# How to use mods to mill circuits with the SRM-20

## Turn on the machine

## Go to [mods website](https://modsproject.org/)

![Screenshot 2023-10-12 at 11 48 42 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/3f954a14-607a-4216-8371-eeacd3f1046b)

## Right click to open the menu

![Screenshot 2023-10-12 at 11 51 51 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/ad3c8ed7-b7f3-4222-8038-d07be05f3434)

## Select `programs`

![Screenshot 2023-10-12 at 11 52 08 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/1aa82422-00e9-49a3-83a7-ab358ec54a00)

## Select `open program`

![Screenshot 2023-10-12 at 11 52 27 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/effcea90-3e9b-47e2-8cd8-1f2abb4f37a7)

## Select `SRM-20 mill` > `PCB`

![Screenshot 2023-10-12 at 11 52 47 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/cfeef2e3-6f43-49b2-8879-f551a18072ad)

That will open this view.

![Screenshot 2023-10-12 at 11 53 14 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/0ae87b14-7f27-416e-98dd-4045d245277b)

Now we're going to mill our traces

## Select your PNG

![Screenshot 2023-10-12 at 11 54 37 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/afbe51ae-0ced-42e4-bf33-3cdf25502194)

## Hit mill traces

![Screenshot 2023-10-12 at 11 54 49 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/33ee08a8-2884-44d5-91e3-0e79ee901a6d)

## Click `calculate`

Then wait for a moment as the toolpaths generate

![Screenshot 2023-10-12 at 11 55 13 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/df0ff696-663d-4aca-86c5-5458479ac3e8)


![Screenshot 2023-10-12 at 11 55 51 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/dab3cb97-359e-456b-929b-e3897a4920e5)

## Hit `Get Device`

![Screenshot 2023-10-12 at 11 56 10 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/e4691caf-cb1d-44ad-84e9-bed022e3d061)

## Select `SRM-20`

![Screenshot 2023-10-12 at 11 56 31 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/3383d8be-b16b-4bbc-b3c8-f206152e2b72)

## Insert the 1/64 in endmill

## Move to your desired x,y location at a safe z height (~50mm)

![Screenshot 2023-10-12 at 11 57 50 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/89a2c3b5-6ffc-4330-8667-ce331ab0733c)

Use `move to origin` to move the machine

## Drop the z-height down

![Screenshot 2023-10-12 at 11 58 23 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/b8f9244a-4d7a-4ab7-969c-e372ac9e9119)

## Loosen the endmill and lower it manually till it touches the copper plate then tighten it

## Hit `send file`

![Screenshot 2023-10-12 at 11 59 00 AM](https://github.com/leomcelroy/fab-notes/assets/27078897/ed8625a9-6684-497f-aed3-c6df2d5f2863)

## Repeat process for the outline

- upload your outline image
- select mill outline
- calculate the toolpath
- use a 1/32 endmill
- set the z-height appropriately with the endmill touching the top of the board
- run your job

## vacuum up after yourself

make sure you don't vacuum up your board





