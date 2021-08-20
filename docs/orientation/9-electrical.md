# Electrical

## General

The electrical system has been designed to ensure trouble free operation. Wiring and connections are kept as high in the interior of the yacht as practicable, reducing the possibility of exposure to water. The main switch panels are located to protect them from the elements. The electrical circuits are numbered at convenient locations at the panels and throughout the yacht. A numbering scheme and diagram is located in this manual for your convenience.

## Energy Storage

The foundation of the electrical system is the batteries. The system is sized large enough (26 kWh / 1020 Ah) to support over 4 full days of energy (5-6 kWh or 234 Ah per day) usuage without any charging or a full week with typical solar of 2-4.5 kWh per day. Several hours of engine charging is necessary each week. A typical week of energy usage is around 30-40 kWh.

### House Bank - 25.6 V Lithium

If comparing to a 12 V AGM bank the bank is equivalent to roughly 3,000 Ah. The bank supports the DC to AC Inverter(s) and all other major loads. It is comprised of 40 x EVE LiFePO4 280Ah 3.2 V 5250g cells wired to create 5 independent, parallel strings of 8 cells in series for a 25.6 V (8S5P) nominal service. The battery bank weighs around the same amount as 8 golf cart batteries at 225kg. The rated capacity is 35 kWh but is configured to provide 26 usable kWh before starting to shed loads.

Each string of 8 cells has a dedicated cell voltage monitoring (accurate to +/- 1 mV) and balancing (47 Ohm shunt - 68 mA / 1.6 Ah per day) module. This precision allows detecting internal cell issues or problems with poor fitting connections. Each of the 5 monitoring modules include 3 temperature sensors and communicate over CAN Bus to the rest of the electrical control network. The BMS controller is capable of disconnecting the entire pack, a single string, specific discharge loads, all discharge loads, specific charge loads, or all charge sources. The BMS controller also sets charge target voltage and current settings for all charge sources. Cells are compressed and expansion is motitored with compression load cells.

Even though rated capacity is 1400 Ah the SOC config in the BMS is set to 1250 Ah. Charge efficiency is currently 98%. Peukert ratio is 1.05

175mm (6.9") wide, 72mm thick, 210mm (8.3") high.
Each string of 8 is 600mm. 2ft.
String of 11 is 800mm. 2ft 7 and 1/4".

### Buffer / Starting Battery - 12.8 V Lithium

The buffer battery is 4 x EVE LiFePO4 280Ah 3.2 V 5250g cells wired 4 in series for a 12.8 V service. The primary function is to provide reserve capacity to run engine starter/controls, diaphram bilge pump, VHF radio, and deck-level navigation lights if the house bank fails.

## Charging / Power Generation

Keep SOC above 32% to allow around a day worth of emergency use before reaching recommended minimum voltage. Keep SOC 40-70% during normal use.

### Charging Technical Specifications

Per series string:

* Recommended Max Current 0.5CA C/2 (140 Amps)
* Recommended Max Charge: 0.5CA C/2 (140 Amps)
* Recommended Max Discharge: 0.33CA (92.4 Amps)
* low temp cutoff: 5°C
* Max charge temp: 40°C
* High temp alarm: 45°C
* High temp off: 55°C
* High voltage cutoff 3640 mV per cell (29.1 V) 0.05C (14 amps)

| Cell mV | Pack V | SOC % | Min Charge Current | mV Drop | Charge Level  | ALERT                   | Notes                                               |
| ------- | ------ | ----- | ------------------ | ------- | ------------- | ----------------------- | --------------------------------------------------- |
| 3650    | 29.20  |       | 94 / 470           | 25      | Bulk          | HIGH VOLTAGE DISCONNECT | C/3 13.75 KW. Test Max. Remove charger immediately! |
| 3645    | 29.12  |       | 70 / 350           | 19      | Bulk          | HIGH VOLTAGE ALARM      | C/4 10 kW.                                          |
| 3633    | 29.06  |       | 40 / 200           |         | Bulk          | CHARGER DISCONNECT      | C/7 5.0 kW.                                         |
| 3625    | 29.00  |       | 28 / 140           | 8       | Bulk          | CHARGER DISCONNECT      | C/10 3.5 kW.                                        |
| 3600    | 28.80  |       | 14 / 70            | 4       | Bulk          | CAUTION 4               | C/20 2.0 kW - Top balance to C/50 6A or 3hrs yr     |
| 3550    | 28.40  |       | 9.4 / 47           | 3       | Bulk          | CAUTION 3               | C/30 1.3 kW - 30 Min Max Hold                       |
| 3500    | 28.00  | 100   | 5.6 / 28           | 2       | Bulk LOW      | CAUTION 2               | C/50 0.8 kW (0 A 30 min rest for memory reset 6/mo) |
| 3482    | 27.86  | 99.9  | 4 / 20             |         | Absorb        | CHARGING                | C/70 Avg tested 100% SOC rest open circuit          |
| 3450    | 27.60  | 99.8  | 3.1 / 16           |         | Absorb        |                         | C/90 Slow charge top balance.                       |
| 3420    | 27.36  | 99.7  | 2 / 10             |         |               |                         | C/130 Possible to over charge! < 4 hr hold.         |
| 3405    | 27.24  | 99    | 1 / 5              |         |               | Almost full             | C/280 Possible to over charge! < 6 hr hold.         |
| 3400    | 27.20  | 98    |                    |         | Float*        |                         | Typical max resting with loads < 4 A                |
| 3395    | 27.16  | 92    | 0                  |         |               |                         |                                                     |
| 3385    | 27.08  | 88    |                    |         |               |                         |                                                     |
| 3375    | 27.00  | 87    |                    |         |               |                         |                                                     |
| 3350    | 26.80  | 85    |                    |         |               |                         |                                                     |
| 3330    | 26.64  | 83    |                    |         |               |                         |                                                     |
| 3325    | 26.59  | 80    |                    |         |               |                         |                                                     |
| 3314    | 26.57  | 77    |                    |         |               |                         |                                                     |
| 3314    | 26.51  | 76    |                    |         |               |                         |                                                     |
| 3310    | 26.48  | 75    |                    |         |               |                         |                                                     |
| 3300    | 26.40  | 50-70 |                    |         | Float Storage |                         | Max storage. Typical under load                     |
| 3290    | 26.32  | 45    |                    |         |               |                         | Watermaker & Inverter for cooking min               |
| 3287    | 26.30  | 40    |                    |         |               |                         |                                                     |
| 3275    | 26.20  | 35    |                    |         |               |                         |                                                     |
| 3260    | 26.08  | 28    |                    |         |               |                         |                                                     |
| 3250    | 26.00  | 22    |                    |         |               |                         | Inverter Input Low Restart                          |
| 3238    | 25.90  | 30    |                    |         |               |                         | Inverter low voltage ALARM                          |
| 3200    | 25.60  | 30    |                    |         |               | LOW VOLTAGE WARNING     | Nominal Voltage                                     |
| 3125    | 25.00  | 25    |                    |         |               | LOW VOLTAGE ALARM       | Inverter Low-Shutoff                                |
| 3000    | 24.0   | 15    |                    |         |               | LOAD SHED 1             | Lowest storage level                                |
| 2950    | 23.6   | 10    |                    |         |               | LOAD SHED 2             | Lowest recommended voltage                          |
| 2900    | 23.2   | 5     |                    |         |               | LOW VOLTAGE DISCONNECT  |                                                     |
| 2600    | 20.8   | 1     |                    |         |               |                         |                                                     |
| 2500    | 20     | 0     |                    |         |               |                         | Absolute Low Voltage Limit under C/2 or greater     |

### BMS Controlled Charger Settings

Max voltage is established by measuring charge current when max cell mV is below 3500. Check "Min Charge Current" for current levels and reference "Cell mV". For voltage to increase over 3500 mV per cell the current to the batteries must be greater than 28 A. If bank acceptance current is above 70 Amps (2 kW) highest cell voltage is allowed to climb to 3600 mV. If bank acceptance current is above 140 Amps voltage is allowed to climb to 3625 mV.

After full charge BMS switches to "storage" mode where battery discharge current is limited to 1 A until 3310 mV per cell is reached. Typically charger is removed/unavailble before 3310 mV level is reached.

### [Alternators](/orientation/propulsion/#Alternators)

Energy Storage is replenished the quickest by running the engine. Two 5 kW American Power HPI-185-EXT alternators provides up to 185 A at 28 V (each) to the House Bank. You should see at least 5 kW of power at a high idle of around 1,300 Engine RPM. Output starts high and slowly diminishes as the alternators heat up. It takes 4 to 6 hours to fully charge a completely drained House Bank. The alternators have networked alternator regulators. 45 minutes of battery charging at anchor will increase SOC around 10%. Typically the engine should be used to recharge the batteries when they reach 45% SOC. The engine should be run roughly 30 minutes. It's enough time for engine to reach operating temperature and bring SOC over 50%.

The 185 HPI has 8 pole pairs.

We plan on an average of 2 kWh (25 minutes) per day of energy production from the engine. Generally 3-4 hours of engine running (12-20 kWh) per week is sufficient to keep charged. 1 liter of fuel makes 2.5-3 kWh. At $2/liter it's $0.67-0.80 kWh plus another $1 per kWh in engine depreciation.

### Solar Array Charging

We currently have 820 W of solar. Monitoring is available via the Victron GX console and online [VRM Portal](https://vrm.victronenergy.com/installation/12853/share/0889a143). The full array generates an average of 2.2 kWh in fall/winter and 3.5 kWh per day in summer. It would take 8-16 days to fully charge a depleted battery by solar with no loads applied to it.

On top of the bimini are 4x glass Kyocera KC 80W solar panels. These provide 320 W, are wired 2S2P with 10 AWG, and controlled with a Victron SmartSolar MPPT 100/30 in the lazarette. Average current from the controller is under 12 ampers, max current is 18 amperes. Fused at 30 ampers.

Mounted on the radar arch are 2x glass Sunpower SPR-X20-250-BLK 250W solar panels wired 2P with 10 AWG, and controlled with a Victron SmartSolar MPPT 100/50 controller mounted in the lazarette. Average current from the controller is under 20 ampers, max current is 30 amperes. Fused at 50 ampers.

### AC Charging

The Charger Inverter can supply up to 70 A or roughly 1.9 kW of power to the House Bank. It takes over 15 hours to charge the House Bank. The inverter/charger will slow down if it gets too hot and the internal fan is unable to cool it sufficiently. This uses around 18 of the available 24 amps of incoming AC power when connected to a 30 amp circuit breaker.

#### Using the shore power cord.

1. Switch off all AC breakers.
1. Switch off dock 30A 120V AC breaker.
2. Connect cord to shore power receptacle on shore first before connecting cord to inlet on the yacht.
3. Connect cord to yacht.
4. Check polarity indicator on main panel. If lit, the polarity on shore power receptacle could be reversed, or there may be an open ground connection to shore. Disconnect from shore power immediately, a serious hazard may exist. Get help from Marina or an electrician before reconnecting to that dockside outlet again.
6. If polarity indicator is OK, then switch the "SHORE POWER" breaker on.
7. Turn on "CHARGER INVERTER" and "SHIPS POWER" breakers. All AC power is routed through the inverter first.
9. Turn on remaining breakers as needed.

#### Charging batteries with shore power

1. Follow steps for connecting to shore power.
1. Use mounted iPad at nav station or any device connected to the TWIG wireless network to visit the [Victron Venus](http://beaglebone.lan) website.
1. Select "MultiPlus 24 V / 3000 W" from the Device List. (If necessary push the return key and/or use the left arrow first.)
1. Select "Switch" and change to "Charger Only" or "On" (inverter + charger).
2. There is a built in delay. Battery charging will begin about 20 seconds after activated.
3. When the inverter is operating in battery charging mode, DC is being supplied to your batteries and also to run any DC loads at the same time. Battery voltage and charging amperage being supplied by the unit is indicated on the overview page viewable by pushing "esc".

## Inverter operation:

Inverter should not be turned on if SOC is below 45%.

The inverter converts DC energy from the batteries into 120 volt AC household type current for operation of small appliances. Small TVs, radios, blenders, mixers are usually fine. Except for brief periods, operation of the microwave, air conditioning, heat gun, water heater and other high load devices is only recommended when engine or portable generator is running. Their loads are extremely high and rapid discharge of the batteries will result.

The system is set-up so that the air conditioning and hot water tank will function when the inverter is being used. This will allow the inverter to supply power when there is excess solar. See the inverter owners manual supplied for detailed instructions and other cautions.

1. Use mounted iPad at nav station or any device connected to the TWIG wireless network to visit the [Victron Venus](http://venus.twig) website.
1. If connected to dockside power turning off "SHORE POWER" and "CHARGER INVERTER" breaker switches. Leave on if connected to generator.
1. Select "MultiPlus 12/3000/120-50 120V" from the Device List. (If necessary push the return key and/or use the left arrow first.)
1. Select "Switch" and change to "On".
6. Select AC load as desired. Note: there must be a load on the inverter for 120V to indicate on the AC meter.

## Courtesy lights

The courtesy floor lights are powered directly from the batteries and protected by a separate fuse located under aft cabin berth. When the main battery power switch is turned off, the courtesy lights will still have power available so that as you enter the boat you can turn the courtesy lights on for a safe lighted entry before turning on the main battery switch. There are two switches to control the lights, one near the companionway and another in the master stateroom. A red light will be installed near the cockpit engine panel to indicate if courtesy lights have inadvertently been left on. Be sure to check it before leaving the boat for long periods.

## Electric Winch

Fitted with an electric-powered self-tailing winch for hoisting and reefing the mainsail. It must be used with special care. Personal injury and damage to the boat can result from improper operation. Do not allow children to operate. Only properly instructed adults should be allowed to operate it. Do not wear loose clothing which could possibly be tangled in the mechanism when operating or standing nearby.
While very handy and a big energy saver, it is difficult for an operator to judge just how much pressure is being applied to the line on the winch. The winch is powerful enough to rip the headboard out of a sail. Therefore we recommend that the electric power be operated for all but the last couple inches and then switch to manual power with a conventional handle to "sweat up" the last inches.
To operate the winch, set the breaker on the main panel to ON to supply 12V to the winch relays. The winch is a two speed unit. The switches for each speed are mounted on the cabin house. The winch motor is fused by a 130A breaker located in line and an overload breaker in the aft cabin. For safety reasons, the electric motor is automatically deactivated whenever a winch handle is inserted
in the winch socket.

The electric cockpit winch requires the "Windlass & Winch" circuit to be active and the circuit breaker located in the aft cockpit (just below the ceiling) must have the flap pushed up to the horizontal position. Power to the windlass motor is disabled electronically with a Victron Battery Protect 65A when voltage drops below 24v for 90 seconds or when the circuit that powers the solenoid relay box is off/open. A low voltage piezo electric alarm is not installed yet. There is also a 100A fuse located in the electrical distribution compartment under the aft cabin berth.

## Electric Windlass

An electric anchor windlass is installed. Mounted on the foredeck, the two foot switches control up and down direction as indicated on switch under the covers. Red is down. Black is up. The same cautions mentioned above for the electric winch (Sec. 9-9) apply to the windlass.

To operate the windlass, the digital switch marked "Windlass & Winch" under "Vessel Management" must be on. It supplies 24V DC to the switches, remotes, and solenoid relays. There is also a physical "Emergency Off" switch located in the forepeak that must be in the "ON" position.

If CZone gives a circuit overload warning it is because something there is a short within the switch wiring. It does not give a warning if the primary fuse, circuit breaker, or battery protect has disconnected power from the motor. To test if the fault is within the windlass switch wiring flip the "Emergency Off" switch in the forepeak to the "OFF" position. If the overload warning remains the issue is with the electric winch switches. The most likely culprit is the handheld chain counter mounted on the foredeck.

The windlass is protected by a 150A fuse in the battery compartment under the aft berth. Another inline circuit breaker, relay switch box and a Victron Battery Protect is located high in the forepeak. If the supply voltage is below 24v a buzzer will sound. If voltage remains low for over 90 seconds the power to the windlass motor will turn off completely. The House Bank must be charged to continue.

Do not use the windlass to "break-out" an anchor. Transfer the anchor rode load to a mooring cleat and use the engine power to break out. Always transfer anchor load to a cleat whenever anchored. DO NOT use the anchor windlass as a cleat or bollard.

See the windlass instructions for details on proper operation. Chain gypsy size is for 5/16" G43. Proper matching of rope, chain and gypsy is critical for safe effective operation.

## Buttons / Switches

### Galley Buttons

1. AC Inverter
2. Freshwater Pump

### Chart Table Buttons

1. Night Anchored Mode
2. Weigh Anchor Mode
3. Day Anchored Mode
4. MFD Radar
5. Secondary High Flow Bilge Pump
6. Weigh Anchor

### Chart Table Button Pad

1. Courtesy Floor Lights
2. Cabin Lights
3. Deck Lights
4. Anchor Light at Masthead
5. Nav Lights
6. Flood lights (spots over transom)
7. Freshwater Pump
8. Electronics
9. AC Inverter
10. DC USB Outlets
11. Washdown
12. Winch / Windlass

### Future Button Pad

1. Fans
2. HotWater Heater

### Cockpit Buttons

1. Winch / Windlass
2. Freshwater Pump
3. Transom Spot Lights
4. Ignition (bottom left)
5. Engine Start
6. Engine Stop

## C-Zone

### COI Aft Cabin Signal Input

1. Fuel Tank Aft
2. Fuel Tank Fwd
3. No Oil Pressure
4. Engine Over Temp
5. Watermaker Feed Pressure
6. Watermaker Seawater Pump Temp

### Button Wires

1. White/Orange - (+) led backlight
2. Orange - Throw B [-] switch 2
3. White/Green - Not used.
4. Blue - led (-) Negative / Ground
5. White/Blue - Not used.
6. Green - (+) circuit power on
7. White/Brown [-] Throw A - switch 1
8. Brown - (+) Switch Power

### Stationary State

- Compass light: off
- Deck Wash Pump - Foredeck: off
- Nav Light Aft: off
- Nav Light Fwd: off
- Steaming Light: off
- Tri-Sail Light: off

### Underway State

- Anchor light - aft: off
- Anchor light - mast: off
- Deck Lights: off timer(on:5 if on:120)
- Deck Wash Pump - Foredeck: off timer(on:300 if on:120)
- Freshwater Pump - Domestic: off timer(on:300 if on:120)
- Locker lights: on
- Stern Spotlights: off timer(on:10 if on:120)

### Day

- Anchor light - aft: off
- Anchor light - mast: off
- Backlight zone: on
- Compass Light: off
- Deck Lights: off timer(on:5 if on:120)
- Locker lights: on
- Nav Light Aft: off
- Nav Light Fwd: off
- Steaming Light: off
- Stern Spotlights: off
- Tri-Sail Light: off
- Deck Wash Pump - Foredeck: off timer(on:300 if on:120)
- Freshwater Pump - Domestic: off timer(on:300 if on:120)

### Night

- Floor lights - red: on(5%)
- Backlight zone: on(10%)
- Locker lights: off (on:120m if on:30min)

## 24 V House Bank Details

300 x 760 area to mount controllers

Solar Controller: 130 x 186
Solar Controller: 130 x 186
24v to 13v 70a buck: 88 x 195
24v to 13v 70a buck: 88 x 195
24v to 13v 70a buck: 88 x 195
12v to 24v boost: 88 x 195
Venus GX:   143 x 96
RaspberryPi: 100 x 100
2x MRBF Block: 51 x 190

**Future**

House BMV low voltage relay provides cutoff for chargers.
Buffer BMV high voltage relay switches between boost/buck.

### Positive Bus

Location: Battery cell compartment
Each battery string (5 total) has its own 150A MRBF Terminal Fuse.

1. String Positive Post (x5)
2. MRBF Terminal Fuse (x5)
3. 5 Stud Busbar (1A: BMV Volt Sense)
4. Class T 500A Fuse
5. 500A ML-RBS Remote Battery Disconnect
6. ANL Fuses with busbar links

#### 24 V ANL Fuse Block

0. [DC] 30A: _YDCC-1-4_ 10 AWG - 24v to 13v 25 A buck - 400 W DC Buck Voltage Reducer (25 A) Always On

1. [CHG] 80A: Solar Block (100A Battery Protect for solar shutoff)
2. [CHG] 300-400A: Alternator/Engine Start
3. [INV/CHG] 300A: 3kW 120 V 60 Hz - Inverter/Charger (2/0 AWG) (aux input pins enable/disable)
4. [INV/CHG] 300A: 3kW 230 V 50 Hz - Inverter/Charger (2/0 AWG) (aux input pins enable/disable)

1. [LD] 175A: Load House Power Bus 24 V
2. [LD] 175A: Windlass (75 A Circuit Breaker & 100 A Battery Protect)
3. [LD] 150-175A: Winch (75 Amp Circuit Breaker & 100 A Battery Protect)
4. [LD] 200A: Engine Start DC-DC Converters

#### Sub Fuse Blocks

**24V 1. Solar Block**
1. 50A MIDI: SunPower Victron 100-50 SmartSolar Controller
2. 40A MIDI: Kyocera Victron 100-30 SmartSolar Controller

**24V 2. Alternators MRBF Block**

1. 200A: Alternator 1
2. 200A: Alternator 2
3. 200A: DC-DC Converters for Engine Start?

**24V 3. Engine Start**

1. 50A: _eng start_ 6 AWG - 24v to 13v 70 A buck input - 1000 W DC Buck Voltage Reducer
1. 50A: _eng start_ 6 AWG - 24v to 13v 70 A buck input - 1000 W DC Buck Voltage Reducer
1. 50A: _eng start_ 6 AWG - 24v to 13v 70 A buck input - 1000 W DC Buck Voltage Reducer

**24V 4. Load House Power Bus**

AMI(Bussmann)/MIDI(Littlefuse) Fuses

1. 30A: Fwd Cabin CZone
2. 30A: CZone MOI - Ballast Pump
3. 70A: Chart Table CZone
4. 70A: Aft Cabin CZone
5. 40A: 24h 24 V - Always On ATO/ATC
6. 30A: Watermaker Fuse Block (65 A Battery Protect)
7. 30A: Main Head Fuse Block (65 A Battery Protect)
8. 30A: SSB 24V - 12V Converter

**24V 4-5. 24h 24 V - Always On ATO/ATC Fuses**

1. 10A: 24 V High-Flow High-Water Bilge Pump Auto Switch
2. 2A: _YDCC-1-3_ AIS + Splitter
3. 1A: (3.2 W) Venus GX + USB-C Charger for rPi
4. 1A: Cell Modem (USB Power)
5. 1A: Propane LPG Sensor & Valve
6. 1A: WiFi Booster
7. 20A: Alternator Controllers (65 A Battery Protect + Inline 15A Fuses)

**24V 4-6. Watermaker Fuse Block - ST Blade 4 Circuit**

Fuse Block 3 -> 24 V Feed -> Battery Protect -> Fuseblock

1. 20A: (200 mA resting) Pressure Pump Controller
2. 5A: Boost Pump Controller
3. 1A: 24 V buck 5 V Sensors
4. 1A: Freshwater Flush Valve
5. 2A: 12 V Pump Fan?

**24V 4-7. Main Head 24v - 5025 ST Blade 6 Circuit w/ Neg Bus**

Battery Protect -> Fuseblock

1. 20A: 24v to 12v Converter
2. 10A: Toilet Macerator Pump Relay
3. 10A: Sink Discharge Pump
4. 10A: _future_ Toilet Intake Pump
5. 10A: _future_ Shower Discharge Pump
6. 2A: Toothbrush USB Charger

**12V 4-7-1. Main Head 24 to 12 V converter output**

12v DC Output -> Mega Fuse + Inline Fuse
30A Mega Fuse -> Electroscan
10A Inline Fuse -> Switch Buttons
Switch Buttons -> Macerator Relay
Switch Buttons -> Intake Pump

**24V 6. Alternator Block**
1. 225A: Alternator 1 Power Output (2/0 AWG)
2. 225A: Alternator 2 Power Output (2/0 AWG)
3. 30A: _YDCC-1-4_ 10 AWG - 24v to 13v 25 A buck - 400 W DC Buck Voltage Reducer (25 A) Always On

### Negative Post

1. Battery Negative busbar
2. Current Sense Shunt
3. Negative busbar

#### Negative Busbar

1. Cockpit Negative
2. CZone COI
3. Engine Starter

## 12v Buffer/Starter

### Positive Branch

1. 250A MRBF
2. ML-RBS
3. Engine Starter & MRBF 200A -> 12 V Charger / Power Bus

#### 12V 1. Charge / Power Bus

1. 40A: 12V IN (24-12 Buck Charger)
2. 40A: Engine Control CZone
3. 40A: 12 V 24h Fuse Block
4. 50A: Battery Backup?

#### 12v 1-2. 24h Fuse Block

Power Bus -> Battery Protect 65

12 circuit ATC/ATO fuse block

1. 15A: Diaphragm Primary 12 V Bilge Pump
2. 2A: NMEA 2000 CAN1-A Primary (Feeds YDCC)
3. 2A: (350 mA) Battery BMS Feed
4. 15A: _YDCC-1-2_ VHF Radio
5. 2A: _YDCC-1-1_ NMEA 2000 CAN1-B CZone + 24h
6. 1A: WiFi Router / ESP Home devices _switched?_
7. 1A: _switch 2_ Motorized Water Tank Valves
8. 15A: _need switch?_ Oil Pump
9. 5A: Power for Simrad GO5 _need to identify wire_ (Combine with CAN1-B?)
10. 5A: _remove_ Saloon Heater Fan

## 120 V 60 Hz AC

* 30 Amps shorepower connection
* Main breaker
* Inverter/Charger

### Distribution

* Air Conditiong
* Microwave
* AC Outlets Port
* AC Outlets Starboard
