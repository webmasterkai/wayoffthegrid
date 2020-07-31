# Electrical

https://docs.google.com/spreadsheets/d/1zKmRMYi2S-eSKwpNTjMEjhHrCRgV90-noGWMQVKzqVE/edit?usp=sharing

## General

The electrical system has been designed to ensure trouble free operation. Wiring and connections are kept as high in the interior of the yacht as practicable, reducing the possibility of exposure to water. The main switch panels are located to protect them from the elements. The electrical circuits are numbered at convenient locations at the panels and throughout the yacht. A numbering scheme and diagram is located in this manual for your convenience.

## Energy Storage

The foundation of the electrical system is the batteries. The system is sized large enough (26 kWh) to support 5 full days of energy (5.2 kWh) usuage without charging of any kind.

### House Bank - 25.6 V Lithium

If comparing to a 12 V AGM bank this bank is equivalent to over 3,000 Ah. The bank supports the DC to AC Inverter and all other major loads. It is comprised of 40 x EVE LiFePO4 280Ah 3.2 V 5250g cells wired to create 5 parallel strings of 8 in series cells for a 25.6 V nominal service. It weighs around the same amount as 8 golf cart batteries at 225kg. The rated capacity is 35 kWh but is confnigured to provide 26 usable kWh before starting to shed loads. Each cell has dedicated monitoring. Each of the 5 strings of cells can be disconnected from the bank.

### Buffer / Starting Battery - 12.8 V Lithium

The buffer battery is 4 x EVE LiFePO4 280Ah 3.2 V 5250g cells wired 4 in series for 12.8 V service. The primary function is to provide reserve capacity to run a bilge pump, VHF radio, and navigation lights if the house bank fails. It's also used to start the Aux Diesel Engine. Each cell has dedicated monitoring.

## Power Generation

### [Alternators](/orientation/propulsion/#Alternators)

Energy Storage is replenished the quickest by running the engine. A 5 kW American Power HPI-185-EXT alternator provides 185 A at 28 A to the House Bank. You should see at least 3 kW @ 1,100 Engine RPM. It will take 6 to 9 hours to fully charge a completely drained House Bank. The alternator has a networked alternator regulator.

A 2nd alternator will be installed soon to double this capacity.

185 HPI has 8 pole pairs

We plan on an averaged of 1.7 kWh (15-30 minutes) per day production from the engine. Generally 3-4 hours per week is sufficient.

### Solar Array

We currently have 820 W of solar. Monitoring is available via Victron GX and online VRM Portal. On top of the bimini are 4x glass Kyocera KC 80W solar panels. Mounted on the radar arch are 2x glass Sunpower SPR-X20-250-BLK 250W solar panels. Each brand of panels connect to its own Victron SmartSolar MPPT Charger.

The full array generates an average of 3.5 kWh per day. It would take 8 average days to fully charge a depleted battery by solar with no loads applied to it.

### AC Charging

The Charger Inverter can supply up to 70 A or roughly 1.9 kW of power to the House Bank. It takes over 15 hours to charge the House Bank.

#### Using the shore power cord.

1. Switch off all AC breakers.
1. Switch off dock 30A 120V AC breaker.
2. Connect cord to shore power receptacle on shore first before connecting cord to inlet on the yacht.
3. Connect cord to boat.
4. Check polarity indicator on main panel. If lit, the polarity on shore power receptacle could be reversed, or there may be an open ground connection to shore. Disconnect from shore power immediately, a serious hazard may exist. Get help from Marina or an electrician before reconnecting to that dockside outlet again.
6. If polarity indicator is OK, then switch the "SHORE POWER" breaker on.
7. Turn on "CHARGER INVERTER" and "SHIPS POWER" breakerS. All power is routed through the inverter first.
9. Turn on remaining breakers as needed.

#### Charging batteries with shore power

1. Follow steps for connecting to shore power.
1. Use mounted iPad at nav station or any device connected to the TWIG wireless network to visit the [Victron Venus](http://beaglebone.lan) website.
1. Select "MultiPlus 24 V / 3000 W" from the Device List. (If necessary push the return key and/or use the left arrow first.)
1. Select "Switch" and change to "Charger Only" or "On" (inverter + charger).
2. There is a built in delay. Battery charging will begin about 20 seconds after activated.
3. When the inverter is operating in battery charging mode, DC is being supplied to your batteries and also to run any DC loads at the same time. Battery voltage and charging amperage being supplied by the unit is indicated on the overview page viewable by pushing "esc".

## Inverter operation:

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

To operate the windlass, the digital switch marked "Windlass & Winch" under "Vessel Management" must be on. It supplies 24V DC to the switches, remotes, and solenoid relays. The windlass is protected by a 150A fuse in line, mounted under the aft berth and an "Emergency Off" switch located in the forepeak. The relay switch box and a Victron Battery Protect is located high in the forepeak. If the supply voltage is below 24v a buzzer will sound. If voltage remains low for over 90 seconds the power to the windlass motor will turn off completely. The House Bank must be charged to continue.

Do not use the windlass to "break-out" an anchor. Transfer the anchor rode load to a mooring cleat and use the engine power to break out. Always transfer anchor load to a cleat whenever anchored. DO NOT use the anchor windlass as a cleat or bollard.

See the windlass instructions for details on proper operation and selection of rope and chain sizes to fit the gypsy. Proper matching of rope, chain and gypsy is critical for safe effective operation.

## Buttons / Switches

### Chart Table Buttons

Freshwater
Seawater
Night Anchored
Day Anchored
MFD Radar
High Flow Bilge Pump
Weigh Anchor

### Cockpit Buttons

Winch / Windlass
Freshwater Pump
Ignition (bottom left)
Engine Start
Engine Stop

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

### Underway

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
- Locker lights: off(on:120m if on:30min)

## House Bank Details

300 x 760 area to mount controllers

Solar Controller: 130 x 186
Solar Controller: 130 x 186
24v to 13v 70a buck: 88 x 195
24v to 13v 70a buck: 88 x 195
12v to 24v boost: 88 x 195
Venus GX:   143 x 96
RaspberryPi: 100 x 100
2x MRBF Block: 51 x 190

### Positive Post

200A MRBF Terminal Fuse -> Remote Solenoid Switch, Manual Back-Up -> Busbar

### Positive Bus

1. 500A ML Remote Solenoid Switch - **Charge Bus**
2. 500A ML Remote Solenoid Switch - **House Power Bus**
3. 1A - Victron Voltage Sense
4. 1A - Shunt Voltage Sense
5. 2A - Batrium BMV Power

#### Charge Bus

Devices that enable charging the house bank. Located within the battery box section.

Busbar
1. ANL Fuse Block
2. MRBF Fuse Block

**ANL Block Fwd**
1. 300A: Inverter/Charger
2. 250A: 24v Alternator Output
3. (FUTURE _250A: Alternator Output_)

**MRBF Block Aft**
1. 50A: Solar Controller
2. 30A: Solar Controller
3. 40A: DC Converter 12v (9-18v) to 26.5v booster output

House BMV low voltage relay provides cutoff for chargers.
Buffer BMV high voltage relay switches between boost/buck.

#### House Power Bus

**Fuse Block 1 - SafetyHub 100 - Always ON**

Aft / battery box section

AMI/MIDI Fuses

1. 60A: 24v to 13v 70a buck input - 1000w DC Buck Voltage Reducer (50 Amps)
2. 60A: 24v to 13v 70a buck input - 1000w DC Buck Voltage Reducer (50 Amps)
3. _empty_

ATO/ATC Fuses

1. 1A: BMV House Voltage Sense
2. 1A: Batrium BMS Fuse Block _empty_
3. _broken_
4. 1A: Venus GX

**Fuse Block 2 - SafetyHub 150 - Always ON**

AMI(Bussmann)/MIDI(Littlefuse) Fuses

1. 150A: Windlass (Battery Protect)
2. 100A: Winch (Battery Protect)
3. 30A: Main Head Fuse Block
4. 30A: Watermaker Fuse Block

ATO/ATC Fuses

1. 10A: Bilge Pump Auto Switch
2. 10A: 185 HPI Alternator Controller (24v)
3. 10A: 150 PowerLine Alternator Controller (12v)
4. _empty_
5. _empty_
6. _empty_

**Fuse Block 3 - SafetyHub 150 - Switched**

Battery Protect -> SafetyHub 150

AMI Fuses

1. 50A: Aft Cabin CZone
2. 50A: Chart Table CZone
3. 30A: Fwd Cabin CZone
4. 25A: CZone MOI - Ballast Pump

ATO/ATC Fuses

1. 1A: IP Network Switch
2. 1A: LPG Valve
3. _empty_
4. _empty_
5. _empty_
6. _empty_

**Fuse Block 4 - Watermaker - ST Blade 4 Circuit**

Battery Protect -> Fuseblock

1. 20A: Pressure Pump Controller
2. 5A: Boost Pump Controller
3. 1A: 5 V Sensors
4. 1A: Freshwater Flush

**Fuse Block 5 - Main Head 24v - 5025 ST Blade 6 Circuit w/ Neg Bus**

1. 20A: 24v to 12v Converter
2. 10A: Toilet Macerator Pump Relay
3. 10A: Sink Discharge Pump
4. 10A: _future_ Toilet Intake Pump
5. 10A: _future_ Shower Discharge Pump
6. 2A: Toothbrush USB Charger

**Main Head 24 to 12 V converter**

12v DC Output -> Mega Fuse + Inline Fuse
30A Mega Fuse -> Electroscan
10A Inline Fuse -> Switch Buttons
Switch Buttons -> Macerator Relay
Switch Buttons -> Intake Pump

### Negative Post

1. Current Sense Shunt
2. Remote Battery Switches - ML-Remote Battery Switch EMERGENCY Disconnect All House.

## 12v Buffer/Starter

### Positive Post

1. 200A: Charger Bus
2. 200A: Starter / Power Bus

#### Charger Bus

2. 200A: _pending removal_ Alternator Ouput
3. 90A: Buck Charger 1
4. 90A: Buck Charger 2
5. 60A: Smart Buck Charger

#### Power Bus

1. 200A: Starter
1. 50A: Boost Charger
2. 50A: Engine Control CZone
3. 50A: 24h Fuse Block

#### 12v 24h Fuse Block

Controlled with Battery Protect 60

12 circuit ATC/ATO fuse block

1. 2A: NMEA 2000 CZone
2. 2A: AIS + Splitter
3. NMEA 2000 Transducers
4. 1A: _pending move_ Watermaker 5 V Sensors
5. 2A: 12v alternator controller _pending removal_
6. 1A: Motorized Water Tank Valves
7. _future_ Battery BMS Feed
8. 15A: Oil Pump
9. 10A: Main Head Greywater Pump _pending removal_
10. 15A: VHF Radio
11. 15A: Diaphragm Bilge Pump
12. 15A: Engine Running - Ignition Branch (Battery Protect 60)

#### Engine Control CZone

1. Engine Start
2. Engine Stop
3. Fuel Pump
4. Floor Lights
5. NMEA 2000 Cockpit Displays
6. Watermaker Boost Pump _future NMEA 2000 Transducers_

#### Aft COI

1. High water bilge pump
2. Freezer
3. Fridge
4. Autopilot
5. MFD/Radar
6.

#### Chart Table COI

#### Mast OI

1. Masthead Anchor Light
2. Masthead Tri-Color
3. Steaming Light
4. Deck Light
5. Heater Fan
6. Washdown Pump
