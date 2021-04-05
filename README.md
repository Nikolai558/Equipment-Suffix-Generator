# [Equipment-Suffix-Generator](https://nikolai558.github.io/Equipment-Suffix-Generator/)

Find the appropriate FAA Equipment Suffix Code for your aircraft for flight on flight-sim networks like VATSIM.

<hr>

## [Equipment Reference Table](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_1.html)

For many reasons, ATC needs to know what your RVSM, Navigation and Transponder capabilities are. Thankfully we have a system that tells ATC all of that information with a simple code. That code is a suffix code. It is designated as a “Suffix Code” because that code is placed after your aircraft type code in the flight plan.
<br>Example: B738/L = A Boeing 737-800 aircraft that is RVSM, GNSS capable and it has a Mode C transponder. The equipment suffix code is /L.

| Suffix Code |      Transponder       |    Navigation    | RVSM |
|:-----------:|:----------------------:|:----------------:|:----:|
|      /W     |         Mode C         | No GNSS, No RNAV |  YES |
|      /Z     |         Mode C         |   RNAV, No GNSS  |  YES |
|      /L     |         Mode C         |       GNSS       |  YES |
|      /X     |     No Transponder     |      No DME      |  NO  |
|      /T     | Transponder, No Mode C |      No DME      |  NO  |
|      /U     |         Mode C         |      No DME      |  NO  |
|      /D     |     No Transponder     |        DME       |  NO  |
|      /B     | Transponder, No Mode C |        DME       |  NO  |
|      /A     |         Mode C         |        DME       |  NO  |
|      /M     |     No Transponder     |       TACAN      |  NO  |
|      /N     | Transponder, No Mode C |       TACAN      |  NO  |
|      /P     |         Mode C         |       TACAN      |  NO  |
|      /Y     |     No Transponder     |   RNAV, No GNSS  |  NO  |
|      /C     | Transponder, No Mode C |   RNAV, No GNSS  |  NO  |
|      /I     |         Mode C         |   RNAV, No GNSS  |  NO  |
|      /V     |     No Transponder     |       GNSS       |  NO  |
|      /S     | Transponder, No Mode C |       GNSS       |  NO  |
|      /G     |         Mode C         |       GNSS       |  NO  |
