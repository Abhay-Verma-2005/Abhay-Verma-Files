# Networking Concepts Comparison Tables

## IPv4 vs IPv6

| IPv4 | IPv6 |
|------|------|
| 1. Uses 32-bit addresses, allowing approximately 4.3 billion unique addresses (2³²) | 1. Uses 128-bit addresses, providing approximately 3.4 × 10³⁸ unique addresses (2¹²⁸) |
| 2. Addresses are represented in decimal format (e.g., 192.168.1.1) | 2. Addresses are represented in hexadecimal format (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) |
| 3. Implements network security at the application layer; security was not built into original protocol | 3. Has built-in security features with IPsec mandatory, providing better authentication and privacy |
| 4. Uses broadcast messages for communication with all hosts on a subnet | 4. Eliminates broadcast and uses multicast and anycast addresses for more efficient communication |

## Circuit Switching vs Packet Switching

| Circuit Switching | Packet Switching |
|-------------------|------------------|
| 1. Establishes a dedicated physical path between sender and receiver for the entire communication session | 1. Breaks messages into packets that can travel different routes to reach the destination |
| 2. Guarantees fixed bandwidth and consistent transmission quality once connection is established | 2. Offers efficient bandwidth utilization through statistical multiplexing (sharing) of available network resources |
| 3. Incurs connection setup delay but minimal transmission delays afterwards | 3. No initial connection setup delay but can experience variable transmission delays (latency and jitter) |
| 4. Classic example is the traditional telephone network (PSTN) | 4. Forms the foundation of modern internet communications (IP networks) |

## Packet Switching vs Message Switching

| Packet Switching | Message Switching |
|------------------|-------------------|
| 1. Divides data into small, fixed-size packets before transmission | 1. Transmits entire messages as one unit without breaking them into smaller pieces |
| 2. Provides real-time or near real-time delivery suitable for interactive applications | 2. Uses store-and-forward technique resulting in higher latency, unsuitable for real-time applications |
| 3. Each packet contains complete routing information and can travel independently | 3. Message includes destination address but intermediate nodes determine routing path |
| 4. More efficient for bursty data traffic with low delay requirements | 4. Better suited for applications where delivery confirmation and message integrity are more important than speed |

## Datagram vs Circuit Switching

| Datagram Switching | Circuit Switching |
|-------------------|-------------------|
| 1. Connectionless service where each packet is routed independently | 1. Connection-oriented service requiring setup and teardown phases |
| 2. No resources are reserved; network bandwidth is allocated on demand | 2. Reserves fixed resources (bandwidth) for the entire duration of the connection |
| 3. Better resilience against network failures as packets can take alternative routes | 3. Connection fails if any link in the established circuit path fails |
| 4. Variable and unpredictable delays due to dynamic routing and potential congestion | 4. Predictable and constant delay once the circuit is established |

## Hub vs Switch

| Hub | Switch |
|-----|--------|
| 1. Layer 1 (Physical layer) device that broadcasts data to all connected devices | 1. Layer 2 (Data Link layer) device that forwards data only to the intended recipient |
| 2. Creates a single collision domain, leading to increased network congestion | 2. Creates separate collision domains for each port, significantly reducing network congestion |
| 3. Provides no traffic filtering or intelligence in data transmission | 3. Uses MAC address tables to make intelligent forwarding decisions |
| 4. Lower cost but inefficient in terms of bandwidth utilization and security | 4. Higher cost but offers improved performance, security, and bandwidth efficiency |

## OSI Model vs TCP/IP Model

| OSI Model | TCP/IP Model |
|-----------|--------------|
| 1. Has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application | 1. Has 4 layers: Network Interface, Internet, Transport, Application |
| 2. Developed by ISO as a theoretical reference model for standardization | 2. Developed based on practical implementation needs of the Internet |
| 3. Clear separation of services, interfaces, and protocols | 3. Less rigid distinction between services, interfaces, and protocols |
| 4. More comprehensive but complex; some layers (session, presentation) have minimal implementation | 4. Simpler and more practical; widely implemented in real-world networking |

## Physical Layer vs Data Link Layer

| Physical Layer (Layer 1) | Data Link Layer (Layer 2) |
|--------------------------|---------------------------|
| 1. Deals with physical connections and raw bit transmission | 1. Provides node-to-node data transfer and handles errors in the physical layer |
| 2. Defines electrical, mechanical, and functional specifications for connections | 2. Responsible for framing, addressing, and error control of data frames |
| 3. Handles transmission media characteristics like voltage levels, data rates, and physical connectors | 3. Handles MAC addressing and controls access to shared media through protocols like CSMA/CD |
| 4. Examples include Ethernet cables, fiber optics, wireless signals, hubs, and repeaters | 4. Examples include network switches, bridges, and network interface cards (NICs) |

## SMTP vs POP3

| SMTP (Simple Mail Transfer Protocol) | POP3 (Post Office Protocol version 3) |
|-------------------------------------|--------------------------------------|
| 1. Used for sending emails between servers and from email clients to servers | 1. Used for retrieving emails from a mail server to a client application |
| 2. Operates on port 25 (or 587 for encrypted submissions) | 2. Operates on port 110 (or 995 for secure POP3) |
| 3. "Push" protocol that delivers mail as soon as it's available | 3. "Pull" protocol where client periodically checks for and downloads new mail |
| 4. Typically downloads emails and removes them from the server (though modern implementations allow keeping copies) | 4. Stateful protocol that requires authentication for each session |
