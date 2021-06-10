# Reverse Osmosis (RO) Water Maker

## Startup

1. Verify the seawater intake (seacock #9) is open at the through-hull.
* Switch **Sample Valve** under galley sink to right, labeled "Sink".
* Turn the **High Pressure Bypass Valve** (Stainless with Black Handle) to the OPEN POSITION. Rotate counterclockwise. Pointy end forward.
* FAILURE TO OPEN THE HIGH PRESSURE BYPASS VALVE COULD RESULT IN HYDRAULIC SHOCK TO THE SYSTEM.
* Push the watermaker "RUN" button.
* Turn on Watermaker Fuseblock using Home Assistant or Victron GX Console Relay 1.
* Turn on Seawater Pump boost switch using Home Assistant.
* Check that **Feed Pressure** reaches **1-4 bar (15-60 PSI)** on feed line. The boost pump takes seawater and pushes it through the 5 micron sediment filter located in the lazerette. As the filter becomes clogged the feed pressure is reduced. The boost pump also turns on an LED behind the filter to help illuminate the filter condition.
* Let run for 1-10 minutes to flush out any air bubbles and stinky stagnent water.
* Turn on "Pressure Pump" switch on the iPad within the WilhelmSK app or relay #1 on the Victron Venus GX remote console.
* Verify brine discharge is flowing into the sink and the sink drain is clear.
* Check that feed pressure remains above **0.7 bar (10 PSI)** at all times. If it drops below it's probably time to replace the pre-filter. Optimum pump performance and service life is obtained with 1.4 BAR (20 PSI) inlet pressure.
* Identify the titanium High Pressure Regulator with hex head. It is used to adjust membrane pressure. Slowly tighten screw (clockwise) atop the High Pressure Regulator to increase pressure or loosen in small increments to reduce pressure.
* Gradually turn the High Pressure Bypass Valve (Black Handle) to the CLOSED position. It will be vertical, pointing up. The feed pressure increase to the membrane should be less than 10psi(0.07 MPa) per second. That's a full 80 seconds to reach pressure. It's extremely difficult to achieve.
* **Flow Meter** should be between **19-27 LPH (5-7 GPH)**. Typical flow is around 25 liters per hour. If used in fresh or brackish water reduce pressure at High Pressure Regulator as necessary to achieve correct product flow. **FLOW MUST REAMIN BELOW 30 LPH (8 GPH) AT ALL TIMES.**
* High pressure **Membrane Gauge** should read between **55-58 bar (800-850PSI)** in typical salt water. **MUST REMAIN BELOW 62 bar (900PSI)**.
* Inspect all plumbing connections in the unit for leakage. Cold water temperature can cause condensation.
* Let product water run into sink for around 5 minutes. If the unit was filled with preservative storage solution, production must remain diverted AT LEAST 10 MINUTES to clear preservative solution from system.
* Check product water with hand-held TDS meter kept on the top shelf in the cabinet next to the sink.
* When PPM is below 250 in <22c water or 350 in >25c water and there is no smell or taste the quality is good.
* If quality is good, turn the Sample Valve under the sink over to the left in "Tank" direction.
* Below the under sink cabinet floor hatch are two blue & white valves that control the tank being filled. It is typically opposite the tank being used for consumption.
* Check the RO unit for feed (10-30PSI) and membrane pressure (800-850), water leakage periodically at the initial start-up. Observe Product Flow meter (5-8GPH). Monitor inline TDS meter.

## Shutdown

1. Turn valve under sink banck to "sink" position.
1. Gradually turn the **High Pressure Bypass Valve** (Stainless with Black Handle) to the OPEN POSITION. Rotate away and down. Pointy end up. This will release the high pressure within the RO membrane housing. Decreasing the system pressure from the 800 PSI set-point to about 150 PSI should take about 30 seconds.
2. Switch OFF "Pressure Pump" on iPad or Relay #1 on the VictronGX Remote Console.
3. Switch OFF "Watermaker Seawater Pump".
5. Turn on freshwater pump.
5. Turn on "Flush Valve" or Relay #2 for 45-90 seconds.
3. The RO unit may be left in this “stand by” condition with the seawater for a maximum of 20-24 hours. If the RO unit will be out of service for more than 20 hours please refer **Storage/Flush** instructions.

## Short Term Storage (Flush)

Flushing should happen every 1-3 days.

Currently the motorized valve is controlled from relay #2 of the Venus GX. When the switch is on the valve opens, allowing freshwater from the tank to flow through the prefilter and membrane housing. The house freshwater pump must be on. Turning off the switch will close the valve. The valve takes a few seconds to open or close.

1. Freshwater flush can happen after pressure and boost pumps are off.
2. Make sure High Pressure Bypass Valve (Stainless with Black Handle) at membrane is in the open position.
3. Turn on freshwater pump. Button at sink.
4. Turn on "Freshwater Flush Valve" on iPad within WilhelmSK or "Relay 2" on VenusGX Remote Console. Water will come out the seawater spigot at the sink, and filling a glass and taking readings with the TDS meter will show decreasing levels.
5. Let run for 1-2 minutes. Run until TDS meter shows under 700 PPM.
6. (Optional) Turn Cleaning Valve (3-way grey below high pressure gauge) to the circulate position. Turn the handle counter clockwise until it sticks up. This will discharge water out the feed side of the boost pump and push it out the stainer and out the seacock. Let it run for several seconds and return valve to sink position by moving clockwise until it sticks down.
7. Turn off "Freshwater Flush Valve" or Relay 2 to close it.
8. Repeat every 1-3 days.

_Next up on the list is automatic fresh water flush._

Use Propylene glycol (no ethyl esters alcohol) for long term storage.

## Long Term Storage

1. Perform Short Term Storage Flush. Make sure seacock is open and perform step 6 above but let run for 2 minutes to purge seawater from the system and leave in the circulate position.
2. Remove the pre-filter cartridge from the pre-filter housing located below the pressure pump inside the lazarette. There is a filter housing wrench hanging on the right side of the box that holds the pressure pump.
3. Empty housing and rinse the filter and housing. If the filter looks clean spray it down and save it for reuse.
4. Replace pre-filter with Sodium metabisulfite preservative chemical (#3 or Green Stripe if using VM product).
5. Fill housing with clean, unchlorinated drinking water and re-secure the housing, with the chemical cartridge now inside.
6. Activate Freshwater Flush Valve for several seconds to remove any air that remains in the pre-filter housing after install.
7. Close seacock
8. Turn on the boost pump. This is a button labeled "Sea Water" at the sink.
9. If there is pressure for some reason it can be released by temporarily changing the position of the Cleaning Valve.
10. Let the unit run in this "re-circulate mode" for 30 minutes.
11. After 30 minutes SHUT THE PUMP OFF
12. Remove chemical cartridge from housing. Reinstall pre-filter housing back without any filter in it.
13. The R.O unit is now preserved ("pickled") and may be left unattended, with no additional operation, or flushing, for a maximum of 4 months.
14. IF the R.O. unit is to be stored for longer than 4 months the above can be repeated using new chemical after flushing out old chemical.

To return the unit to NORMAL operation and UN-PRESERVCE, place a 5 micron filter in the pre-filter housing, put the cleaning valve in the NORMAL position (discharge to sink), open the raw water inlet sea cock, start the unit's low pressure pump and let unit run for 10 minutes with everything flushing down the sink. Next, start the unit's high-pressure pump. Then slowly bring the high pressure up to 800 psi. Let the unit run in this normal state for 30 minutes, with the product flow flushing down the sink. Then double check TDS meter and switch to tank if desired.

## Cleaning

The RO unit must be chemically cleaned when product water output drops below 85% of original production. The frequency of this occurring will vary greatly upon feed water and usage pattern. Fouling from the membrane will naturally occur through regular RO use.

Prior to cleaning the membranes, verify that any reduction in product output is not the result of a corresponding variation in raw water inlet temperature or salinity.

Use the alaki first at 50 grams per 4.5 litres water, circulate for 1/2 hour, stop circulation and let it soak for 1 hour, circulate for another 1/2 hour then flush out. Fill with acid at same dilution as alkali, circulate for 45 min - 1 hour then flush. Do not use soak for the acid.

## Membrane Replacement

* Keep elements moist at all times.

### Pressure Vessel Disassembly

* Disconnect high pressure intake on forward end of membrane housing.
* Disconnect wire from high pressure sensor.
* Disconnect permeate, cleaning circulation, and brine discharge tubes.
* Remove bolts holding the mounts onto the vertical wooden supports.
* Remove the pressure vessel from the lazerette and continue on a workbench or in cockpit.
* Remove the six fasteners and cap ring holding each end plug with an Allen wrench. Place a mark on each end plug to be removed, place a corresponding mark on each end collar. This will ensure proper orientation during assembly. Refer to Figure 6.2.
* Locate the screwdriver slots located on opposite ends of the pressure vessel end collar. Place an appropriate sized slot screwdriver in each slot. Twist both screwdrivers until the end plug breaks loose from the pressure vessel. The screwdrivers can now be placed between the end plug and collar. A prying motion on both sides of the end plug with the screwdrivers will quickly remove it. Use this procedure for both end caps.
* Push or pull the membrane element out of the pressure vessel tube.
* Note which end of the pressure vessel the brine seal was installed at. The brine seal is a black u-cup seal on the membrane outer diameter near one end (Refer to Figure 6.3). This is the feed end of the pressure vessel. When reinstalling the RO membrane the brine seal must be located at the feed end of the pressure vessel.
* NEVER FORCE A MEMBRANE OUT OF A PRESSURE VESSEL BY APPLYING PRESSURE ON THE PRODUCT WATER TUBE (CENTER TUBE), AS THIS WILL DAMAGE THE MEMBRANE. IF MEMBRANE IS DIFFICULT TO REMOVE, USE A 2” DIAMETER PLASTIC PIPE (PVC) TO APPLY PRESSURE ON THE PROTECTED END OF THE MEMBRANE.

* Permeate obtained from first two hours of operation should be discarded

## Notes
Measure the product water flow AND brine water flow and add them together at 800psi. That should match the rated output of your Hp Pump. If it doesn’t then you have a pump packing problem resulting in low flow and high ppm. The carbon filter and prefilters have nothing to do with your product water ppm. That’s governed by Flow Rate, Pressure, Sea water temp, salinity level and membrane surface area and health.

## Electrical

1. Fuse Block 2
2. Space "C" 25A
3. Battery Protect
4. Watermaker Fuse Block

### 24 V Fuse Block

1. 15A: Pressure Pump
2. 5A: Boost Pump
3. 1A: 12 V Buck Adapter -> 1A Inline Fuse -> Flush Valve & Pressure Valve
4. 1A: 5 V Buck -> 1A Inline Fuse -> Sensors & ESP32

### 12 V Valves

1. Flush Valve (Controlled with Venus GX)
2. Pressure Valve (Controlled with ESP-32 H-Bridge)
3. _future_ Brine Discharge Valve

### 5 V Devices

1. ESP-32 & H-Bridge
2. Boost Pump Pressure Sensor
3. Membrane Pressure Sensor
