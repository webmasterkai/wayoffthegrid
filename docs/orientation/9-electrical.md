# Electrical

https://docs.google.com/spreadsheets/d/1zKmRMYi2S-eSKwpNTjMEjhHrCRgV90-noGWMQVKzqVE/edit?usp=sharing

## General

The electrical system has been designed to ensure trouble free operation. Wiring and connections are kept as high in the interior of the yacht as practicable, reducing the possibility of exposure to water. The main switch panels are located to protect them from the elements. The electrical circuits are numbered at convenient locations at the panel and throughout the yacht. A numbering scheme and diagram is located in this manual for your convenience.

The main panel contains 120V AC breaker switches for both dockside power and inverter.

## Using the shore power cord.

1. Switch off all AC breakers.
1. Switch off dock 30A 120V AC breaker.
2. Connect cord to shore power receptacle on shore first before connecting cord to inlet on the yacht.
3. Connect cord to boat.
4. Check polarity indicator on main panel. If lit, the polarity on shore power receptacle could be reversed, or there may be an open ground connection to shore. Disconnect from shore power immediately, a serious hazard may exist. Get help from Marina or an electrician before reconnecting to that dockside outlet again.
6. If polarity indicator is OK, then switch the "SHORE POWER" breaker on.
7. Turn on "CHARGER INVERTER" and "SHIPS POWER" breakerS. All power is routed through the inverter first.
9. Turn on remaining breakers as needed.

## Charging batteries with shore power

1. Follow steps above for connecting to shore power.
1. Use mounted iPad at nav station or any device connected to the TWIG wireless network to visit the [Victron Venus](http://beaglebone.lan) website.
1. Select "MultiPlus 12/3000/120-50 120V" from the Device List. (If necessary push the return key and/or use the left arrow first.)
1. Select "Switch" and change to "Charger Only" or "On" (inverter + charger).
2. There is a built in delay. Battery charging will begin about 20 seconds after activated.
3. When the inverter is operating in battery charging mode, DC is being supplied to your batteries and also to run any 12V DC loads at the same time. Battery voltage and charging amperage being supplied by the unit is indicated on the overview page viewable by pushing "esc".

**Caution**
Shut down battery charging before starting engine. Do not charge batteries using the inverter while the engine is running, as the engine alternator is charging the batteries at this time.

## Inverter operation:

The inverter converts 12 volt DC current from the batteries into 120 volt AC household type current for operation of small appliances. Small TVs, radios, blenders, mixers are usually fine. Except for brief periods, operation of the microwave, air conditioning, heat gun, water heater and other high load devices is only recommended when engine or portable generator is running. Their loads are extremely high and rapid discharge of the batteries will result.

The system is set-up so that the air conditioning and hot water tank will function when the inverter is being used. This will allow the inverter to supply power when there is excess solar. See the inverter owners manual supplied for detailed instructions and other cautions.

1. Use mounted iPad at nav station or any device connected to the TWIG wireless network to visit the [Victron Venus](http://venus.twig) website.
1. If connected to dockside power turning off "SHORE POWER" and "CHARGER INVERTER" breaker switches. Leave on if connected to generator.
1. Select "MultiPlus 12/3000/120-50 120V" from the Device List. (If necessary push the return key and/or use the left arrow first.)
1. Select "Switch" and change to "On".
6. Select AC load as desired. Note: there must be a load on the inverter for 120V to indicate on the AC meter.

## Courtesy lights

The courtesy floor lights are powered directly from the batteries and protected by a separate fuse located under aft cabin berth. When the main battery power switch is turned off, the courtesy lights will still have power available so that as you enter the boat you can turn the courtesy lights on for a safe lighted entry before turning on the main battery switch. There are two switches to control the lights, one near the companionway and another in the master stateroom. A red light will be installed near the cockpit engine panel to indicate if courtesy lights have inadvertently been left on. Be sure to check it before leaving the boat for long periods.

## Batteries

The standard equipment was two gel-cell 4D batteries for "house" service and a single #27 gel-cell battery for engine starting purposes.

Never try to charge the batteries from two sources, i.g 120 Volt charger and alternator. By doing this you could damage one of the units.

### House Bank (24v)

The main "house" battery bank is comprised of 8x Trojan T-105 6v Deep Cycle Batteries wired for 24v service. 28kg each. 224kg total. ~ 200Ah usable at **24v** 4.5kwh. Switching to lithium will result in about 50% weight savings. Solar, alternators, inverter, and other chargers are tied directly to the battery and can not be turned off. Also always on unswitched side is the bilge pumps and floor lights.

### Buffer / Starting Battery (12v)

The buffer or **"starting"** battery is a Outback NanoCarbon battery and has a Victron BMV-712 for monitoring via Bluetooth using the Victron connect app. The “starter” voltage input is the voltage of the DC-DC voltage converter. There is a battery protect between the 12v buffer battery and the 12v house rail.

### [Alternators](/orientation/propulsion/#Alternators)

There is a BMV-712 relay that turns on the 12v-to-24v charger when the voltage of the buffer battery goes above 12.9v for 30 seconds. It imidiately turns off when voltage drops below 12.7v. It’s configured this way to take advantage of the 12v alternator presently installed.

HPI is 8 pole pairs

## Electric Winch

Fitted with an electric-powered self-tailing winch for hoisting and reefing the mainsail. It must be used with special care. Personal injury and damage to the boat can result from improper operation. Do not allow children to operate. Only properly instructed adults should be allowed to operate it. Do not wear loose clothing which could possibly be tangled in the mechanism when operating or standing nearby.
While very handy and a big energy saver, it is difficult for an operator to judge just how much pressure is being applied to the line on the winch. The winch is powerful enough to rip the headboard out of a sail. Therefore we recommend that the electric power be operated for all but the last couple inches and then switch to manual power with a conventional handle to "sweat up" the last inches.
To operate the winch, set the breaker on the main panel to ON to supply 12V to the winch relays. The winch is a two speed unit. The switches for each speed are mounted on the cabin house. The winch motor is fused by a 130A breaker located in line and an overload breaker in the aft cabin. For safety reasons, the electric motor is automatically deactivated whenever a winch handle is inserted
in the winch socket.

The electric cockpit winch requires the "Windlass & Winch" circuit to be active and the circuit breaker located in the aft cockpit (just below the ceiling) must have the flap pushed up to the horizontal position. Power to the windlass motor is disabled electronically with a Victron Battery Protect 65A when voltage drops below 24v for 90 seconds or when the circuit that powers the solenoid relay box is off/open. A low voltage piezo electric alarm is not installed yet. There is also a 100A fuse located in the electrical distribution compartment under the aft cabin berth.

## Electric Windlass

An electric anchor windlass is installed. Mounted on the foredeck, the two foot switches control up and down direction as indicated on switch under the covers. Red is down. Black is up. The same cautions mentioned above for the electric winch (Sec. 9-9) apply to the windlass.

To operate the windlass, the digital switch marked "Windlass & Winch" under "Vessel Management" must be on. It supplies 24V DC to the switches, remotes, and solenoid relays. The windlass is protected by a 150A fuse in line, mounted under the aft berth and an "Emergency Off" switch located in the forepeak. The relay switch box and a Victron Battery Protect is located high in the forepeak. Because of the high DC load it is desirable to operate the windlass only with the engine running. If the supply voltage is below 24v a buzzer will sound. If voltage remains low for over 90 seconds the power to the windlass motor will turn off completely. The engine must be turned on to continue.

Do not use the windlass to "break-out" an anchor. Transfer the anchor rode load to a mooring cleat and use the engine power to break out. Always transfer anchor load to a cleat whenever anchored. DO NOT use the anchor windlass as a cleat or bollard.

See the windlass instructions for details on proper operation and selection of rope and chain sizes to fit the gypsy. Proper matching of rope, chain and gypsy is critical for safe effective operation.

## C-Zone

### Buttons

1. White/Orange - (+) led backlight
2. Orange - Throw B [-] switch 2
3. White/Green - Not used.
4. Blue - led (-) Negative / Ground
5. White/Blue - Not used.
6. Green - (+) circuit power on
7. White/Brown [-] Throw A - switch 1
8. Brown - (+) Switch Power

### Stationary

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
