# Question 6: UDP Protocol and Header Analysis

**In cases where reliability is not of primary importance, UDP would make a good transport protocol. Give examples of specific cases. The following is the dump of UDP header: 0637000D001CE217. What is the source port number? What is destination port number? What is the length of UDP segment? What is length of Data?**

### Step-by-step solution:

1) **Examples where UDP is suitable:**
   - **DNS (Domain Name System):** Quick lookups are more important than guaranteed delivery
   - **Live video streaming:** Real-time playback is prioritized over perfect transmission
   - **VoIP (Voice over IP):** Delay is more problematic than occasional lost packets
   - **Online gaming:** Low latency is crucial for responsive gameplay
   - **SNMP (Simple Network Management Protocol):** Network monitoring needs quick updates
   - **DHCP (Dynamic Host Configuration Protocol):** Initial setup communications
   - **IoT sensors:** Many IoT devices send frequent, small updates where occasional loss is acceptable

2) **UDP header analysis:**
   - UDP header dump: 0637000D001CE217
   - Each field in UDP header is 16 bits (2 bytes)

3) **Converting from hex to analyze header fields:**
   - First 16 bits (2 bytes): 0637 → Source port
   - Second 16 bits (2 bytes): 000D → Destination port
   - Third 16 bits (2 bytes): 001C → Length of UDP segment (header + data)
   - Fourth 16 bits (2 bytes): E217 → Checksum

4) **Source port number:**
   - Source port = 0637 (hex) = 1591 (decimal)

5) **Destination port number:**
   - Destination port = 000D (hex) = 13 (decimal)

6) **Length of UDP segment:**
   - Length = 001C (hex) = 28 bytes (decimal)
   - This represents the total length including UDP header and data

7) **Length of Data:**
   - UDP header is always 8 bytes (2 bytes each for source port, destination port, length, and checksum)
   - Data length = Total length - Header length
   - Data length = 28 - 8 = 20 bytes

# Question 7: TCP Three-Way Handshake

**Consider the three-way handshaking mechanism followed during TCP connection establishment between host P and host Q. Let X and Y be two random 32-bit starting sequence numbers chosen by P and Q respectively. Suppose P sends a connection request message to Q with a TCP segment having SYN bit = 1, SEQ number = X, and ACK bit=0. Suppose Q accepts the connection request. Show how the information is represented in the TCP segment header that is sent by Q to P? How does TCP 3-way handshake mechanism address the following problems?**
**(a) Delayed arrival of SYN Packet**
**(b) Delayed arrival of ACK Packet**

### Step-by-step solution:

1) **TCP three-way handshake process:**
   - Step 1: Host P → Host Q: SYN=1, SEQ=X, ACK=0
   - Step 2: Host Q → Host P: SYN=1, SEQ=Y, ACK=1, ACK_NUM=X+1
   - Step 3: Host P → Host Q: SYN=0, SEQ=X+1, ACK=1, ACK_NUM=Y+1

2) **Representation in TCP segment header sent by Q to P (Step 2):**
   - **Source Port:** Port number of Q
   - **Destination Port:** Port number of P
   - **Sequence Number:** Y (32-bit random number chosen by Q)
   - **Acknowledgment Number:** X+1 (acknowledging receipt of SYN from P)
   - **Header Length:** Typically 5 (measured in 32-bit words, indicating 20 bytes)
   - **Reserved:** 6 bits set to 0
   - **Control Bits:**
     - URG = 0
     - ACK = 1 (acknowledging receipt of SYN from P)
     - PSH = 0
     - RST = 0
     - SYN = 1 (indicating this is a synchronization message)
     - FIN = 0
   - **Window Size:** Initial receive window size of Q
   - **Checksum:** Calculated value for error detection
   - **Urgent Pointer:** 0 (not used since URG=0)
   - **Options:** May include MSS (Maximum Segment Size), Window Scale, etc.

3) **Addressing delayed arrival of SYN packet:**
   - **Timeout mechanism:** If P doesn't receive a SYN-ACK from Q within a timeout period, P will retransmit the SYN packet
   - **Limited retries:** P will attempt to retransmit the SYN packet a limited number of times (typically 3-5)
   - **Exponential backoff:** Each retransmission occurs after progressively longer time intervals
   - **Connection establishment abortion:** If no response after multiple retries, connection attempt is aborted
   - **ISN (Initial Sequence Number) selection:** Random ISNs help distinguish between delayed and current SYN packets

4) **Addressing delayed arrival of ACK packet:**
   - **Timeout at Q's side:** If Q doesn't receive the final ACK, it remains in SYN-RECEIVED state
   - **Retransmission of SYN-ACK:** If the final ACK is lost, Q will retransmit the SYN-ACK packet
   - **Duplicate ACK handling:** If P receives duplicate SYN-ACKs, it simply sends another ACK
   - **Half-open connection detection:** If Q receives data from P without receiving the final ACK, it can still accept the connection
   - **Connection timeout:** If no activity is detected for a certain period, the half-open connection is terminated

5) **Additional safeguards against both problems:**
   - **Sequence numbers:** Help differentiate between old and new packets
   - **TIME-WAIT state:** Prevents confusion with delayed packets from previous connections
   - **MSL (Maximum Segment Lifetime):** Ensures old segments expire before sequence numbers wrap around

# Question 8: IP Routing Table Analysis

**The only entries in a certain route table are (128.59.28.0/22, port 0), (128.59.28.0/23, port 1) and (128.59.28.0/24, port 2). These entries indicate CIDR network number, the prefix indication and the corresponding port to which a packet should be forwarded. If a packet arrives with a destination IP address equal to 128.59.29.18, which port will this router forward the packet to?**

### Step-by-step solution:

1) **Understanding the routing table entries:**
   - Entry 1: 128.59.28.0/22, port 0
   - Entry 2: 128.59.28.0/23, port 1
   - Entry 3: 128.59.28.0/24, port 2

2) **Converting to binary for analysis:**
   - Destination IP: 128.59.29.18 = 10000000.00111011.00011101.00010010
   - Entry 1 Network: 128.59.28.0/22 = 10000000.00111011.000111[00].00000000
   - Entry 2 Network: 128.59.28.0/23 = 10000000.00111011.0001110[0].00000000
   - Entry 3 Network: 128.59.28.0/24 = 10000000.00111011.00011100.00000000

3) **Determining the subnet ranges:**
   - Entry 1 (128.59.28.0/22):
     - Covers 22 bits of network address
     - Range: 128.59.28.0 to 128.59.31.255
     
   - Entry 2 (128.59.28.0/23):
     - Covers 23 bits of network address
     - Range: 128.59.28.0 to 128.59.29.255
     
   - Entry 3 (128.59.28.0/24):
     - Covers 24 bits of network address
     - Range: 128.59.28.0 to 128.59.28.255

4) **Checking which networks contain the destination IP (128.59.29.18):**
   - Does it fall within 128.59.28.0/24 (Entry 3)? NO (128.59.29.18 is not in the range 128.59.28.0-128.59.28.255)
   - Does it fall within 128.59.28.0/23 (Entry 2)? YES (128.59.29.18 is in the range 128.59.28.0-128.59.29.255)
   - Does it fall within 128.59.28.0/22 (Entry 1)? YES (128.59.29.18 is in the range 128.59.28.0-128.59.31.255)

5) **Applying longest prefix match principle:**
   - Among matching entries (Entry 1 and Entry 2), choose the one with the longest prefix
   - Entry 1 has prefix length 22
   - Entry 2 has prefix length 23
   - Entry 2 has a longer prefix (23 > 22)

6) **Conclusion:**
   - The packet with destination IP 128.59.29.18 will be forwarded to port 1 (corresponding to Entry 2: 128.59.28.0/23)
