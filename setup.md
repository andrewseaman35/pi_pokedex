# Raspberry Pi Setup Notes #

## Enable SSH on pi ##

`sudo raspi-config`
`--> Interface Options --> SSH`

Get IP from within Pi: `sudo ifconfig | grep "inet 192"`
Get IP from outside of PI: `arp -a | grep raspberry`

`ssh 192.168.86.25 -l pi`

## Run on boot ##

```bash
sudo systemctl --force --full edit pokedex.service
```

```
[Unit]
Description=Pokedex
After=graphical.target

[Service]
User=pi
WorkingDirectory=/home/pi/repos/pi_pokedex/pi_pokedex
Environment=DISPLAY=:0
ExecStart=/home/pi/repos/pi_pokedex/start.sh

[Install]
WantedBy=graphical.target
```

```bash
sudo systemctl enable pokedex.service
sudo systemctl reboot
```

## /boot/config.txt ##

```
# For more options and information see
# http://rpf.io/configtxt
# Some settings may impact device functionality. See link above for details

# uncomment if you get no picture on HDMI for a default "safe" mode
#hdmi_safe=1

# uncomment this if your display has a black border of unused pixels visible
# and your display can output without overscan
#disable_overscan=1

# uncomment the following to adjust overscan. Use positive numbers if console
# goes off screen, and negative if there is too much border
overscan_left=-12
overscan_right=-48
overscan_top=-24
overscan_bottom=-24

# uncomment to force a console size. By default it will be display's size minus
# overscan.
framebuffer_width=320
framebuffer_height=240

# uncomment if hdmi display is not detected and composite is being output
#hdmi_force_hotplug=1

# uncomment to disable hdmi output
#hdmi_ignore_hotplug=1

# uncomment to force a specific HDMI mode (this will force VGA)
hdmi_group=1
hdmi_mode=1

# uncomment to force a HDMI mode rather than DVI. This can make audio work in
# DMT (computer monitor) modes
#hdmi_drive=2

# uncomment to increase signal to HDMI, if you have interference, blanking, or
# no display
#config_hdmi_boost=4

# uncomment for composite PAL
sdtv_mode=2

#uncomment to overclock the arm. 700 MHz is the default.
#arm_freq=800

# Uncomment some or all of these to enable the optional hardware interfaces
#dtparam=i2c_arm=on
#dtparam=i2s=on
#dtparam=spi=on

# Uncomment this to enable infrared communication.
#dtoverlay=gpio-ir,gpio_pin=17
#dtoverlay=gpio-ir-tx,gpio_pin=18

# Additional overlays and parameters are documented /boot/overlays/README

# Enable audio (loads snd_bcm2835)
dtparam=audio=on

[pi4]
# Enable DRM VC4 V3D driver on top of the dispmanx display stack
dtoverlay=vc4-fkms-v3d
max_framebuffers=2

[all]
#dtoverlay=vc4-fkms-v3d
```