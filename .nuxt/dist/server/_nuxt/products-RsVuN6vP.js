const products = [
  {
    id: "stm32f103-minimum-system",
    name: "STM32F103最小系统板原理图+PCB源文件",
    nameEn: "STM32F103 Minimum System Board Schematic + PCB",
    description: "基于STM32F103C8T6的最小系统板，包含完整原理图和4层PCB设计。芯片工作频率72MHz，内置丰富外设接口。适用于学习板开发、嵌入式项目等。",
    descriptionEn: "STM32F103C8T6 based minimum system board with complete schematic and 4-layer PCB design. 72MHz operating frequency with rich peripheral interfaces. Ideal for learning boards and embedded projects.",
    price: 89,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=STM32+Min+System",
    category: "微控制器开发板",
    categoryEn: "Microcontroller Dev Board",
    formats: ["Altium Designer", "PDF", "Gerber"],
    specifications: {
      "主芯片": "STM32F103C8T6",
      "工作电压": "3.3V",
      "晶振频率": "8MHz",
      "PCB层数": "4层",
      "板载资源": "LED、按键、串口接口",
      "尺寸": "45mm x 35mm"
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
    name: "DCDC降压电源模块设计图（5V/3A）",
    nameEn: "DCDC Buck Converter Module Design (5V/3A)",
    description: "高效DCDC降压转换器模块，输入范围8-24V，输出5V/3A。效率高达95%，采用同步整流技术。包含完整原理图和2层PCB设计。",
    descriptionEn: "High-efficiency DCDC buck converter module, input range 8-24V, output 5V/3A. Up to 95% efficiency with synchronous rectification. Complete schematic and 2-layer PCB design included.",
    price: 59,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=DCDC+Buck+5V",
    category: "电源模块",
    categoryEn: "Power Module",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF", "Gerber"],
    specifications: {
      "输入电压": "8-24V",
      "输出电压": "5V",
      "输出电流": "3A",
      "效率": "≥95%",
      "PCB层数": "2层",
      "尺寸": "25mm x 20mm"
    },
    specificationsEn: {
      "Input Voltage": "8-24V",
      "Output Voltage": "5V",
      "Output Current": "3A",
      "Efficiency": "≥95%",
      "PCB Layers": "2-layer",
      "Dimensions": "25mm x 20mm"
    }
  },
  {
    id: "arduino-uno-shield",
    name: "Arduino UNO扩展板（传感器接口板）",
    nameEn: "Arduino UNO Shield (Sensor Interface Board)",
    description: "Arduino UNO通用扩展板，提供标准传感器接口。包含I2C、SPI、UART、GPIO扩展接口。带电源指示和短路保护。",
    descriptionEn: "Universal Arduino UNO shield with standard sensor interfaces. Includes I2C, SPI, UART, GPIO expansion ports. With power indicator and short-circuit protection.",
    price: 45,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Arduino+Shield",
    category: "Arduino扩展板",
    categoryEn: "Arduino Shield",
    formats: ["Altium Designer", "Eagle", "Arduino Files", "PDF"],
    specifications: {
      "兼容平台": "Arduino UNO R3",
      "接口类型": "XH2.54排针",
      "I2C接口": "4组",
      "SPI接口": "1组",
      "GPIO": "16路",
      "PCB层数": "2层"
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
    name: "ESP32 WiFi蓝牙开发板原理图+PCB",
    nameEn: "ESP32 WiFi Bluetooth Dev Board Schematic + PCB",
    description: "基于ESP32-WROOM-32E模块的开发板，支持WiFi和蓝牙双模。板载USB转串口、LED指示灯、自定义按键。",
    descriptionEn: "ESP32-WROOM-32E module based development board with WiFi and Bluetooth dual-mode support. Onboard USB-to-serial, LED indicators, and custom buttons.",
    price: 69,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=ESP32+Dev+Board",
    category: "无线通信模块",
    categoryEn: "Wireless Module",
    formats: ["Altium Designer", "KiCad", "PDF", "Gerber"],
    specifications: {
      "无线模块": "ESP32-WROOM-32E",
      "工作电压": "3.3V",
      "WiFi标准": "802.11 b/g/n",
      "蓝牙版本": "BLE 4.2",
      "USB接口": "USB-C",
      "PCB层数": "4层"
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
    name: "LoRa无线射频模块设计文件",
    nameEn: "LoRa Radio Module Design Files",
    description: "基于SX1278芯片的LoRa模块设计，适用于远距离无线通信。空旷地带通信距离可达5km。包含完整原理图和PCB设计。",
    descriptionEn: "SX1278 chip based LoRa module design for long-range wireless communication. Communication distance up to 5km in open areas. Complete schematic and PCB design included.",
    price: 79,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=LoRa+Module",
    category: "无线通信模块",
    categoryEn: "Wireless Module",
    formats: ["Altium Designer", "Eagle", "PDF", "Gerber"],
    specifications: {
      "芯片方案": "SEMTECH SX1278",
      "工作频段": "433MHz",
      "发射功率": "20dBm",
      "接收灵敏度": "-139dBm",
      "通信距离": "5km（空旷）",
      "PCB层数": "2层"
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
    name: "蓝牙音频功率放大器（50W+50W）",
    nameEn: "Bluetooth Audio Power Amplifier (50W+50W)",
    description: "Class D蓝牙音频功率放大器，支持立体声输出50W+50W。采用TPA3116芯片，低失真高效率。",
    descriptionEn: "Class D Bluetooth audio power amplifier with 50W+50W stereo output. TPA3116 chip based, low distortion and high efficiency.",
    price: 99,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Audio+Amplifier",
    category: "音频设备",
    categoryEn: "Audio Equipment",
    formats: ["Altium Designer", "PDF", "Gerber"],
    specifications: {
      "功放芯片": "TPA3116D2",
      "输出功率": "50W x 2",
      "工作电压": "12-24V",
      "信噪比": ">90dB",
      "蓝牙版本": "Bluetooth 5.0",
      "PCB层数": "2层"
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
    name: "智能电量监测模块（OLED显示）",
    nameEn: "Smart Power Monitoring Module (OLED Display)",
    description: "多功能电量监测模块，可实时显示电压、电流、功率、容量。采用I2C接口，兼容Arduino和ESP32。",
    descriptionEn: "Multi-function power monitoring module with real-time voltage, current, power, and capacity display. I2C interface, compatible with Arduino and ESP32.",
    price: 55,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Power+Meter",
    category: "显示模块",
    categoryEn: "Display Module",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF"],
    specifications: {
      "显示屏幕": "0.96寸OLED",
      "电压范围": "3.3-30V",
      "电流范围": "0-5A",
      "测量精度": "1%",
      "通信接口": "I2C",
      "PCB层数": "2层"
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
    name: "Raspberry Pi Pico扩展板底座",
    nameEn: "Raspberry Pi Pico Base Board",
    description: "Raspberry Pi Pico专用扩展板底座，引出所有GPIO引脚。板载USB-C供电接口、复位按键、BOOT按键。",
    descriptionEn: "Dedicated expansion base board for Raspberry Pi Pico with all GPIO pins breakout. Onboard USB-C power, reset button, and BOOT button.",
    price: 39,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Pico+Base+Board",
    category: "单片机扩展板",
    categoryEn: "MCU Extension Board",
    formats: ["Altium Designer", "KiCad", "PDF", "Gerber"],
    specifications: {
      "兼容主控": "Raspberry Pi Pico",
      "USB接口": "USB-C",
      "GPIO引出": "40Pin",
      "电源输出": "5V/3A, 3.3V/1A",
      "尺寸": "65mm x 55mm",
      "PCB层数": "2层"
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
    name: "智能家居继电器模块（4路）",
    nameEn: "Smart Home Relay Module (4-Channel)",
    description: "4路继电器模块，支持高低电平触发。可用于智能家居控制、设备开关等场景。带光耦隔离保护。",
    descriptionEn: "4-channel relay module with high/low level trigger options. Suitable for smart home control and device switching. With optocoupler isolation protection.",
    price: 49,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Relay+Module",
    category: "智能家居",
    categoryEn: "Smart Home",
    formats: ["Altium Designer", "Eagle", "PDF"],
    specifications: {
      "继电器数量": "4路",
      "触点容量": "10A/250VAC",
      "触发电压": "5V",
      "触发方式": "高低电平可选",
      "隔离保护": "光耦隔离",
      "PCB层数": "2层"
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
    name: "常用电子元件封装库（Altium）",
    nameEn: "Common Electronic Component Footprint Library (Altium)",
    description: "包含200+常用电子元件封装的Altium Designer封装库。涵盖电阻、电容、电感、IC连接器等。",
    descriptionEn: "Altium Designer footprint library with 200+ common electronic components. Including resistors, capacitors, inductors, ICs, and connectors.",
    price: 129,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Footprint+Library",
    category: "设计资源",
    categoryEn: "Design Resources",
    formats: ["Altium Designer", "PDF文档"],
    specifications: {
      "封装数量": "200+",
      "封装类型": "SMD, Through-hole",
      "软件支持": "Altium Designer 20+",
      "元件类别": "R/C/L, IC, Connector",
      "封装格式": ".PcbLib",
      "更新支持": "免费更新"
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
    name: "USB转TTL串口模块（CH340）",
    nameEn: "USB to TTL Serial Module (CH340)",
    description: "USB转TTL串口通信模块，采用CH340G芯片。支持3.3V和5V电平切换。广泛用于MCU编程和调试。",
    descriptionEn: "USB to TTL serial communication module with CH340G chip. Supports 3.3V and 5V level switching. Widely used for MCU programming and debugging.",
    price: 25,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=USB+Serial",
    category: "编程调试工具",
    categoryEn: "Programming Tool",
    formats: ["Altium Designer", "Eagle", "KiCad", "PDF", "Gerber"],
    specifications: {
      "芯片方案": "CH340G",
      "USB接口": "USB-A",
      "电平输出": "3.3V / 5V可选",
      "通信速率": "600bps-2Mbps",
      "TX/RX指示": "LED指示灯",
      "PCB层数": "2层"
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
    name: "直流电机驱动板（L298N双H桥）",
    nameEn: "DC Motor Driver Board (L298N Dual H-Bridge)",
    description: "L298N双H桥直流电机驱动模块，可驱动两路直流电机或一路步进电机。带散热片和保护二极管。",
    descriptionEn: "L298N dual H-bridge DC motor driver module, can drive two DC motors or one stepper motor. With heatsink and protection diodes.",
    price: 35,
    image: "https://placehold.co/600x400/1A1A2E/00D4FF?text=Motor+Driver",
    category: "电机驱动",
    categoryEn: "Motor Driver",
    formats: ["Altium Designer", "Eagle", "PDF", "Gerber"],
    specifications: {
      "驱动芯片": "L298N",
      "电机通道": "2路",
      "输出电流": "2A/通道",
      "电机电压": "5-35V",
      "逻辑电压": "5V",
      "PCB层数": "2层"
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
export {
  getProductById as g,
  products as p
};
//# sourceMappingURL=products-RsVuN6vP.js.map
