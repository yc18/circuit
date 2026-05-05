const products = [
  {
    id: "stm32f103-minimum-system",
    name: "STM32F103\u6700\u5C0F\u7CFB\u7EDF\u677F\u539F\u7406\u56FE+PCB\u6E90\u6587\u4EF6",
    nameEn: "STM32F103 Minimum System Board Schematic + PCB",
    description: "\u57FA\u4E8ESTM32F103C8T6\u7684\u6700\u5C0F\u7CFB\u7EDF\u677F\uFF0C\u5305\u542B\u5B8C\u6574\u539F\u7406\u56FE\u548C4\u5C42PCB\u8BBE\u8BA1\u3002\u82AF\u7247\u5DE5\u4F5C\u9891\u738772MHz\uFF0C\u5185\u7F6E\u4E30\u5BCC\u5916\u8BBE\u63A5\u53E3\u3002\u9002\u7528\u4E8E\u5B66\u4E60\u677F\u5F00\u53D1\u3001\u5D4C\u5165\u5F0F\u9879\u76EE\u7B49\u3002",
    descriptionEn: "STM32F103C8T6 based minimum system board with complete schematic and 4-layer PCB design. 72MHz operating frequency with rich peripheral interfaces. Ideal for learning boards and embedded projects.",
    price: 89,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=STM32+Min+System",
    category: "\u5FAE\u63A7\u5236\u5668\u5F00\u53D1\u677F",
    categoryEn: "Microcontroller Dev Board",
    formats: ["Altium Designer", "PDF", "Gerber"],
    specifications: {
      "\u4E3B\u82AF\u7247": "STM32F103C8T6",
      "\u5DE5\u4F5C\u7535\u538B": "3.3V",
      "\u6676\u632F\u9891\u7387": "8MHz",
      "PCB\u5C42\u6570": "4\u5C42",
      "\u677F\u8F7D\u8D44\u6E90": "LED\u3001\u6309\u952E\u3001\u4E32\u53E3\u63A5\u53E3",
      "\u5C3A\u5BF8": "45mm x 35mm"
    },
    specificationsEn: {
      "Main Chip": "STM32F103C8T6",
      "Operating Voltage": "3.3V",
      "Crystal": "8MHz",
      "PCB Layers": "4-layer",
      "Onboard Resources": "LED, Buttons, UART interface",
      "Dimensions": "45mm x 35mm"
    }
  },
  {
    id: "dcdc-buck-converter-5v",
    name: "DCDC\u964D\u538B\u7535\u6E90\u6A21\u5757\u8BBE\u8BA1\u56FE\uFF085V/3A\uFF09",
    nameEn: "DCDC Buck Converter Module Design (5V/3A)",
    description: "\u9AD8\u6548DCDC\u964D\u538B\u8F6C\u6362\u5668\u6A21\u5757\uFF0C\u8F93\u5165\u8303\u56F48-24V\uFF0C\u8F93\u51FA5V/3A\u3002\u6548\u7387\u9AD8\u8FBE95%\uFF0C\u91C7\u7528\u540C\u6B65\u6574\u6D41\u6280\u672F\u3002\u5305\u542B\u5B8C\u6574\u539F\u7406\u56FE\u548C2\u5C42PCB\u8BBE\u8BA1\u3002",
    descriptionEn: "High-efficiency DCDC buck converter module, input range 8-24V, output 5V/3A. Up to 95% efficiency with synchronous rectification. Complete schematic and 2-layer PCB design included.",
    price: 59,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=DCDC+Buck+5V",
    category: "\u7535\u6E90\u6A21\u5757",
    categoryEn: "Power Module",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF", "Gerber"],
    specifications: {
      "\u8F93\u5165\u7535\u538B": "8-24V",
      "\u8F93\u51FA\u7535\u538B": "5V",
      "\u8F93\u51FA\u7535\u6D41": "3A",
      "\u6548\u7387": "\u226595%",
      "PCB\u5C42\u6570": "2\u5C42",
      "\u5C3A\u5BF8": "25mm x 20mm"
    },
    specificationsEn: {
      "Input Voltage": "8-24V",
      "Output Voltage": "5V",
      "Output Current": "3A",
      "Efficiency": "\u226595%",
      "PCB Layers": "2-layer",
      "Dimensions": "25mm x 20mm"
    }
  },
  {
    id: "arduino-uno-shield",
    name: "Arduino UNO\u6269\u5C55\u677F\uFF08\u4F20\u611F\u5668\u63A5\u53E3\u677F\uFF09",
    nameEn: "Arduino UNO Shield (Sensor Interface Board)",
    description: "Arduino UNO\u901A\u7528\u6269\u5C55\u677F\uFF0C\u63D0\u4F9B\u6807\u51C6\u4F20\u611F\u5668\u63A5\u53E3\u3002\u5305\u542BI2C\u3001SPI\u3001UART\u3001GPIO\u6269\u5C55\u63A5\u53E3\u3002\u5E26\u7535\u6E90\u6307\u793A\u548C\u77ED\u8DEF\u4FDD\u62A4\u3002",
    descriptionEn: "Universal Arduino UNO shield with standard sensor interfaces. Includes I2C, SPI, UART, GPIO expansion ports. With power indicator and short-circuit protection.",
    price: 45,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Arduino+Shield",
    category: "Arduino\u6269\u5C55\u677F",
    categoryEn: "Arduino Shield",
    formats: ["Altium Designer", "Eagle", "Arduino Files", "PDF"],
    specifications: {
      "\u517C\u5BB9\u5E73\u53F0": "Arduino UNO R3",
      "\u63A5\u53E3\u7C7B\u578B": "XH2.54\u6392\u9488",
      "I2C\u63A5\u53E3": "4\u7EC4",
      "SPI\u63A5\u53E3": "1\u7EC4",
      "GPIO": "16\u8DEF",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Compatible Platform": "Arduino UNO R3",
      "Interface Type": "XH2.54 headers",
      "I2C Interfaces": "4 groups",
      "SPI Interfaces": "1 group",
      "GPIO": "16 channels",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "esp32-wifi-board",
    name: "ESP32 WiFi\u84DD\u7259\u5F00\u53D1\u677F\u539F\u7406\u56FE+PCB",
    nameEn: "ESP32 WiFi Bluetooth Dev Board Schematic + PCB",
    description: "\u57FA\u4E8EESP32-WROOM-32E\u6A21\u5757\u7684\u5F00\u53D1\u677F\uFF0C\u652F\u6301WiFi\u548C\u84DD\u7259\u53CC\u6A21\u3002\u677F\u8F7DUSB\u8F6C\u4E32\u53E3\u3001LED\u6307\u793A\u706F\u3001\u81EA\u5B9A\u4E49\u6309\u952E\u3002",
    descriptionEn: "ESP32-WROOM-32E module based development board with WiFi and Bluetooth dual-mode support. Onboard USB-to-serial, LED indicators, and custom buttons.",
    price: 69,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=ESP32+Dev+Board",
    category: "\u65E0\u7EBF\u901A\u4FE1\u6A21\u5757",
    categoryEn: "Wireless Module",
    formats: ["Altium Designer", "KiCad", "PDF", "Gerber"],
    specifications: {
      "\u65E0\u7EBF\u6A21\u5757": "ESP32-WROOM-32E",
      "\u5DE5\u4F5C\u7535\u538B": "3.3V",
      "WiFi\u6807\u51C6": "802.11 b/g/n",
      "\u84DD\u7259\u7248\u672C": "BLE 4.2",
      "USB\u63A5\u53E3": "USB-C",
      "PCB\u5C42\u6570": "4\u5C42"
    },
    specificationsEn: {
      "Wireless Module": "ESP32-WROOM-32E",
      "Operating Voltage": "3.3V",
      "WiFi Standard": "802.11 b/g/n",
      "Bluetooth": "BLE 4.2",
      "USB Interface": "USB-C",
      "PCB Layers": "4-layer"
    }
  },
  {
    id: "lora-radio-module",
    name: "LoRa\u65E0\u7EBF\u5C04\u9891\u6A21\u5757\u8BBE\u8BA1\u6587\u4EF6",
    nameEn: "LoRa Radio Module Design Files",
    description: "\u57FA\u4E8ESX1278\u82AF\u7247\u7684LoRa\u6A21\u5757\u8BBE\u8BA1\uFF0C\u9002\u7528\u4E8E\u8FDC\u8DDD\u79BB\u65E0\u7EBF\u901A\u4FE1\u3002\u7A7A\u65F7\u5730\u5E26\u901A\u4FE1\u8DDD\u79BB\u53EF\u8FBE5km\u3002\u5305\u542B\u5B8C\u6574\u539F\u7406\u56FE\u548CPCB\u8BBE\u8BA1\u3002",
    descriptionEn: "SX1278 chip based LoRa module design for long-range wireless communication. Communication distance up to 5km in open areas. Complete schematic and PCB design included.",
    price: 79,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=LoRa+Module",
    category: "\u65E0\u7EBF\u901A\u4FE1\u6A21\u5757",
    categoryEn: "Wireless Module",
    formats: ["Altium Designer", "Eagle", "PDF", "Gerber"],
    specifications: {
      "\u82AF\u7247\u65B9\u6848": "SEMTECH SX1278",
      "\u5DE5\u4F5C\u9891\u6BB5": "433MHz",
      "\u53D1\u5C04\u529F\u7387": "20dBm",
      "\u63A5\u6536\u7075\u654F\u5EA6": "-139dBm",
      "\u901A\u4FE1\u8DDD\u79BB": "5km\uFF08\u7A7A\u65F7\uFF09",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Chip": "SEMTECH SX1278",
      "Frequency": "433MHz",
      "TX Power": "20dBm",
      "RX Sensitivity": "-139dBm",
      "Range": "5km (open area)",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "bluetooth-audio-amplifier",
    name: "\u84DD\u7259\u97F3\u9891\u529F\u7387\u653E\u5927\u5668\uFF0850W+50W\uFF09",
    nameEn: "Bluetooth Audio Power Amplifier (50W+50W)",
    description: "Class D\u84DD\u7259\u97F3\u9891\u529F\u7387\u653E\u5927\u5668\uFF0C\u652F\u6301\u7ACB\u4F53\u58F0\u8F93\u51FA50W+50W\u3002\u91C7\u7528TPA3116\u82AF\u7247\uFF0C\u4F4E\u5931\u771F\u9AD8\u6548\u7387\u3002",
    descriptionEn: "Class D Bluetooth audio power amplifier with 50W+50W stereo output. TPA3116 chip based, low distortion and high efficiency.",
    price: 99,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Audio+Amplifier",
    category: "\u97F3\u9891\u8BBE\u5907",
    categoryEn: "Audio Equipment",
    formats: ["Altium Designer", "PDF", "Gerber"],
    specifications: {
      "\u529F\u653E\u82AF\u7247": "TPA3116D2",
      "\u8F93\u51FA\u529F\u7387": "50W x 2",
      "\u5DE5\u4F5C\u7535\u538B": "12-24V",
      "\u4FE1\u566A\u6BD4": ">90dB",
      "\u84DD\u7259\u7248\u672C": "Bluetooth 5.0",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Amplifier Chip": "TPA3116D2",
      "Output Power": "50W x 2",
      "Operating Voltage": "12-24V",
      "SNR": ">90dB",
      "Bluetooth": "Bluetooth 5.0",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "digital-power-meter",
    name: "\u667A\u80FD\u7535\u91CF\u76D1\u6D4B\u6A21\u5757\uFF08OLED\u663E\u793A\uFF09",
    nameEn: "Smart Power Monitoring Module (OLED Display)",
    description: "\u591A\u529F\u80FD\u7535\u91CF\u76D1\u6D4B\u6A21\u5757\uFF0C\u53EF\u5B9E\u65F6\u663E\u793A\u7535\u538B\u3001\u7535\u6D41\u3001\u529F\u7387\u3001\u5BB9\u91CF\u3002\u91C7\u7528I2C\u63A5\u53E3\uFF0C\u517C\u5BB9Arduino\u548CESP32\u3002",
    descriptionEn: "Multi-function power monitoring module with real-time voltage, current, power, and capacity display. I2C interface, compatible with Arduino and ESP32.",
    price: 55,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Power+Meter",
    category: "\u663E\u793A\u6A21\u5757",
    categoryEn: "Display Module",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF"],
    specifications: {
      "\u663E\u793A\u5C4F\u5E55": "0.96\u5BF8OLED",
      "\u7535\u538B\u8303\u56F4": "3.3-30V",
      "\u7535\u6D41\u8303\u56F4": "0-5A",
      "\u6D4B\u91CF\u7CBE\u5EA6": "1%",
      "\u901A\u4FE1\u63A5\u53E3": "I2C",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Display": "0.96 inch OLED",
      "Voltage Range": "3.3-30V",
      "Current Range": "0-5A",
      "Accuracy": "1%",
      "Interface": "I2C",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "raspberry-pi-pico-base",
    name: "Raspberry Pi Pico\u6269\u5C55\u677F\u5E95\u5EA7",
    nameEn: "Raspberry Pi Pico Base Board",
    description: "Raspberry Pi Pico\u4E13\u7528\u6269\u5C55\u677F\u5E95\u5EA7\uFF0C\u5F15\u51FA\u6240\u6709GPIO\u5F15\u811A\u3002\u677F\u8F7DUSB-C\u4F9B\u7535\u63A5\u53E3\u3001\u590D\u4F4D\u6309\u952E\u3001BOOT\u6309\u952E\u3002",
    descriptionEn: "Dedicated expansion base board for Raspberry Pi Pico with all GPIO pins breakout. Onboard USB-C power, reset button, and BOOT button.",
    price: 39,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Pico+Base+Board",
    category: "\u5355\u7247\u673A\u6269\u5C55\u677F",
    categoryEn: "MCU Extension Board",
    formats: ["Altium Designer", "KiCad", "PDF", "Gerber"],
    specifications: {
      "\u517C\u5BB9\u4E3B\u63A7": "Raspberry Pi Pico",
      "USB\u63A5\u53E3": "USB-C",
      "GPIO\u5F15\u51FA": "40Pin",
      "\u7535\u6E90\u8F93\u51FA": "5V/3A, 3.3V/1A",
      "\u5C3A\u5BF8": "65mm x 55mm",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Compatible MCU": "Raspberry Pi Pico",
      "USB Interface": "USB-C",
      "GPIO Pins": "40Pin",
      "Power Output": "5V/3A, 3.3V/1A",
      "Dimensions": "65mm x 55mm",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "smart-home-relay-board",
    name: "\u667A\u80FD\u5BB6\u5C45\u7EE7\u7535\u5668\u6A21\u5757\uFF084\u8DEF\uFF09",
    nameEn: "Smart Home Relay Module (4-Channel)",
    description: "4\u8DEF\u7EE7\u7535\u5668\u6A21\u5757\uFF0C\u652F\u6301\u9AD8\u4F4E\u7535\u5E73\u89E6\u53D1\u3002\u53EF\u7528\u4E8E\u667A\u80FD\u5BB6\u5C45\u63A7\u5236\u3001\u8BBE\u5907\u5F00\u5173\u7B49\u573A\u666F\u3002\u5E26\u5149\u8026\u9694\u79BB\u4FDD\u62A4\u3002",
    descriptionEn: "4-channel relay module with high/low level trigger options. Suitable for smart home control and device switching. With optocoupler isolation protection.",
    price: 49,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Relay+Module",
    category: "\u667A\u80FD\u5BB6\u5C45",
    categoryEn: "Smart Home",
    formats: ["Altium Designer", "Eagle", "PDF"],
    specifications: {
      "\u7EE7\u7535\u5668\u6570\u91CF": "4\u8DEF",
      "\u89E6\u70B9\u5BB9\u91CF": "10A/250VAC",
      "\u89E6\u53D1\u7535\u538B": "5V",
      "\u89E6\u53D1\u65B9\u5F0F": "\u9AD8\u4F4E\u7535\u5E73\u53EF\u9009",
      "\u9694\u79BB\u4FDD\u62A4": "\u5149\u8026\u9694\u79BB",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Relay Channels": "4",
      "Contact Capacity": "10A/250VAC",
      "Trigger Voltage": "5V",
      "Trigger Mode": "High/Low selectable",
      "Isolation": "Optocoupler",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "universal-pcb-footprint",
    name: "\u5E38\u7528\u7535\u5B50\u5143\u4EF6\u5C01\u88C5\u5E93\uFF08Altium\uFF09",
    nameEn: "Common Electronic Component Footprint Library (Altium)",
    description: "\u5305\u542B200+\u5E38\u7528\u7535\u5B50\u5143\u4EF6\u5C01\u88C5\u7684Altium Designer\u5C01\u88C5\u5E93\u3002\u6DB5\u76D6\u7535\u963B\u3001\u7535\u5BB9\u3001\u7535\u611F\u3001IC\u8FDE\u63A5\u5668\u7B49\u3002",
    descriptionEn: "Altium Designer footprint library with 200+ common electronic components. Including resistors, capacitors, inductors, ICs, and connectors.",
    price: 129,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Footprint+Library",
    category: "\u8BBE\u8BA1\u8D44\u6E90",
    categoryEn: "Design Resources",
    formats: ["Altium Designer", "PDF\u6587\u6863"],
    specifications: {
      "\u5C01\u88C5\u6570\u91CF": "200+",
      "\u5C01\u88C5\u7C7B\u578B": "SMD, Through-hole",
      "\u8F6F\u4EF6\u652F\u6301": "Altium Designer 20+",
      "\u5143\u4EF6\u7C7B\u522B": "R/C/L, IC, Connector",
      "\u5C01\u88C5\u683C\u5F0F": ".PcbLib",
      "\u66F4\u65B0\u652F\u6301": "\u514D\u8D39\u66F4\u65B0"
    },
    specificationsEn: {
      "Footprint Count": "200+",
      "Types": "SMD, Through-hole",
      "Software": "Altium Designer 20+",
      "Categories": "R/C/L, IC, Connector",
      "Format": ".PcbLib",
      "Updates": "Free updates"
    }
  },
  {
    id: "usb-to-serial-converter",
    name: "USB\u8F6CTTL\u4E32\u53E3\u6A21\u5757\uFF08CH340\uFF09",
    nameEn: "USB to TTL Serial Module (CH340)",
    description: "USB\u8F6CTTL\u4E32\u53E3\u901A\u4FE1\u6A21\u5757\uFF0C\u91C7\u7528CH340G\u82AF\u7247\u3002\u652F\u63013.3V\u548C5V\u7535\u5E73\u5207\u6362\u3002\u5E7F\u6CDB\u7528\u4E8EMCU\u7F16\u7A0B\u548C\u8C03\u8BD5\u3002",
    descriptionEn: "USB to TTL serial communication module with CH340G chip. Supports 3.3V and 5V level switching. Widely used for MCU programming and debugging.",
    price: 25,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=USB+Serial",
    category: "\u7F16\u7A0B\u8C03\u8BD5\u5DE5\u5177",
    categoryEn: "Programming Tool",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF", "Gerber"],
    specifications: {
      "\u82AF\u7247\u65B9\u6848": "CH340G",
      "USB\u63A5\u53E3": "USB-A",
      "\u7535\u5E73\u8F93\u51FA": "3.3V / 5V\u53EF\u9009",
      "\u901A\u4FE1\u901F\u7387": "600bps-2Mbps",
      "TX/RX\u6307\u793A": "LED\u6307\u793A\u706F",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Chip": "CH340G",
      "USB Interface": "USB-A",
      "Level Output": "3.3V / 5V selectable",
      "Baud Rate": "600bps-2Mbps",
      "TX/RX LED": "Yes",
      "PCB Layers": "2-layer"
    }
  },
  {
    id: "motor-driver-board",
    name: "\u76F4\u6D41\u7535\u673A\u9A71\u52A8\u677F\uFF08L298N\u53CCH\u6865\uFF09",
    nameEn: "DC Motor Driver Board (L298N Dual H-Bridge)",
    description: "L298N\u53CCH\u6865\u76F4\u6D41\u7535\u673A\u9A71\u52A8\u6A21\u5757\uFF0C\u53EF\u9A71\u52A8\u4E24\u8DEF\u76F4\u6D41\u7535\u673A\u6216\u4E00\u8DEF\u6B65\u8FDB\u7535\u673A\u3002\u5E26\u6563\u70ED\u7247\u548C\u4FDD\u62A4\u4E8C\u6781\u7BA1\u3002",
    descriptionEn: "L298N dual H-bridge DC motor driver module, can drive two DC motors or one stepper motor. With heatsink and protection diodes.",
    price: 35,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Motor+Driver",
    category: "\u7535\u673A\u9A71\u52A8",
    categoryEn: "Motor Driver",
    formats: ["Altium Designer", "Eagle", "PDF", "Gerber"],
    specifications: {
      "\u9A71\u52A8\u82AF\u7247": "L298N",
      "\u7535\u673A\u901A\u9053": "2\u8DEF",
      "\u8F93\u51FA\u7535\u6D41": "2A/\u901A\u9053",
      "\u7535\u673A\u7535\u538B": "5-35V",
      "\u903B\u8F91\u7535\u538B": "5V",
      "PCB\u5C42\u6570": "2\u5C42"
    },
    specificationsEn: {
      "Driver Chip": "L298N",
      "Motor Channels": "2",
      "Output Current": "2A/channel",
      "Motor Voltage": "5-35V",
      "Logic Voltage": "5V",
      "PCB Layers": "2-layer"
    }
  }
];
const getProductById = (id) => {
  return products.find((p) => p.id === id);
};

export { getProductById as g, products as p };
//# sourceMappingURL=products-RsVuN6vP.mjs.map
