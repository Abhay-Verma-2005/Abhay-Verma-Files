
# Question 1: Fiber Optics

**Do signal really travel faster in fiber optics? What are some of the uses of fiber optic cabling in the transmission medium and what principle does fiber optic work on?**

### Step-by-step solution:

1) **Signal speed in fiber optics:**
   - Actually, signals do not travel faster in fiber optics compared to electrical signals in copper wires or radio waves in free space.
   - In vacuum, electromagnetic waves travel at speed of light (3×10^8 m/s).
   - In fiber optics, light travels at approximately 2×10^8 m/s (about 70% the speed of light in vacuum) due to the refractive index of glass.
   - However, fiber optics provide higher bandwidth, allowing more data to be transmitted simultaneously.

2) **Uses of fiber optic cabling:**
   - Long-distance telecommunications (submarine cables, intercontinental links)
   - High-speed internet backbones
   - Local area networks requiring high bandwidth
   - Cable television distribution
   - Medical imaging and endoscopy
   - Industrial sensing and control systems
   - Military applications requiring EMI immunity

3) **Working principle of fiber optics:**
   - Fiber optics work on the principle of total internal reflection.
   - When light passes from a medium of higher refractive index (core) to one with lower refractive index (cladding) at an angle greater than the critical angle, the light is completely reflected back into the core.
   - This allows light signals to propagate along the fiber with minimal loss by bouncing within the core.
   - The core and cladding structure guides light waves along the fiber's length, even around bends.

# Question 2: Hamming Code

**Suppose a seven-bit data word 1101110 is to be encoded using even-parity Hamming code. What is the binary value after encoding? Now assume that the 6th bit got corrupted during transmission, find the error correcting code.**

### Step-by-step solution:

1) **Analyzing the given data:**
   - Data word: 1101110 (7 bits)
   - Need to apply even-parity Hamming code

2) **Understanding Hamming code structure:**
   - For 7 data bits, we need 4 parity bits (satisfying 2^r ≥ m+r+1 where r is parity bits and m is data bits)
   - Total bits after encoding: 11 bits
   - Parity bits are placed at positions 1, 2, 4, and 8 (powers of 2)

3) **Assigning positions:**
   - Position: 1  2  3  4  5  6  7  8  9 10 11
   - Type:    P1 P2 D1 P4 D2 D3 D4 P8 D5 D6 D7
   - Data:     ?  ?  1  ?  1  0  1  ?  1  1  0
   
4) **Calculating parity bits (even parity):**
   - P1 (position 1): Checks bits 1,3,5,7,9,11 → checks P1,D1,D2,D4,D5,D7 → 1+1+1+1+0 = 4 (even) → P1 = 0
   - P2 (position 2): Checks bits 2,3,6,7,10,11 → checks P2,D1,D3,D4,D6,D7 → 1+0+1+1+0 = 3 (odd) → P2 = 1
   - P4 (position 4): Checks bits 4,5,6,7 → checks P4,D2,D3,D4 → 1+0+1 = 2 (even) → P4 = 0
   - P8 (position 8): Checks bits 8,9,10,11 → checks P8,D5,D6,D7 → 1+1+0 = 2 (even) → P8 = 0

5) **Complete encoded word:**
   - Position: 1  2  3  4  5  6  7  8  9 10 11
   - Encoded:  0  1  1  0  1  0  1  0  1  1  0

6) **Error correction (6th bit corrupted):**
   - Original encoded word: 01101010110
   - With 6th bit corrupted: 01101110110 (bit changed from 0 to 1)
   
7) **Calculating syndrome:**
   - Check P1: 0+1+1+1+1+0 = 4 (even) → correct
   - Check P2: 1+1+1+1+1+0 = 5 (odd) → error
   - Check P4: 0+1+1+1 = 3 (odd) → error
   - Check P8: 0+1+1+0 = 2 (even) → correct
   
8) **Error location:**
   - Error syndrome = 0110 (reading P8,P4,P2,P1 from left to right)
   - Converting to decimal: 0×8 + 1×4 + 1×2 + 0×1 = 6
   - Error is at position 6
   
9) **Corrected code:**
   - Flip bit at position 6 back to 0
   - Corrected code: 01101010110

# Question 3: Window Size in Go-Back-N and Selective-Repeat Protocols

**What will be sender and receiver window size in case of Go-Back-N and Selective-Repeat Protocols? Justify these values?**

### Step-by-step solution:

1) **Go-Back-N Protocol:**
   - **Sender window size:** 2^m - 1, where m is the number of bits in the sequence number field
   - For example, if m = 3, sender window size = 2^3 - 1 = 7
   - **Receiver window size:** 1 (always)
   
2) **Selective-Repeat Protocol:**
   - **Sender window size:** Maximum 2^(m-1), where m is the number of bits in the sequence number field
   - **Receiver window size:** Also 2^(m-1)
   - For example, if m = 3, both sender and receiver window sizes = 2^(3-1) = 4

3) **Justification for Go-Back-N:**
   - **Sender window size (2^m - 1):** The sender needs to keep track of multiple frames that have been sent but not yet acknowledged. The maximum size is 2^m - 1 to ensure that each sequence number in the window is unique.
   - **Receiver window size (1):** In Go-Back-N, the receiver only accepts frames in order. It discards any out-of-order frames and expects retransmission. Thus, it only needs a window size of 1 to process the next expected frame.

4) **Justification for Selective-Repeat:**
   - **Both sender and receiver window sizes (2^(m-1)):** 
     - The window size is limited to half the sequence number space (2^(m-1)) to avoid ambiguity.
     - If window size were larger, the receiver might confuse new frames with old ones due to sequence number wrap-around.
     - For example, with 3-bit sequence numbers (0-7) and window size of 4, if frames 0,1,2,3 are sent and acknowledged, the next frames would be 4,5,6,7. If window size were larger than 4, the receiver might confuse frame 0 of the next cycle with frame 0 of the previous cycle.

# Question 4: Congestion Control Mechanisms

**Deliberate the differences between two congestion control mechanism used in computer networks. "Adaptive retransmission of TCP protocol improves the throughput of the network". Give your views in favour or against of this statement.**

### Step-by-step solution:

1) **Two main congestion control mechanisms:**

   **A. End-to-End Congestion Control:**
   - Implemented in transport layer (TCP)
   - No explicit feedback from network
   - Congestion inferred from packet loss and delays
   - Examples: TCP's slow start, congestion avoidance, fast retransmit, and fast recovery
   - Advantages: Simple, no support needed from routers
   - Disadvantages: Slower response to congestion, less precise

   **B. Network-Assisted Congestion Control:**
   - Network elements (routers) provide feedback
   - Examples: Explicit Congestion Notification (ECN), Random Early Detection (RED)
   - Advantages: Quick response, more accurate congestion detection
   - Disadvantages: Requires router support, more complex implementation

2) **Key differences:**
   - Feedback mechanism: Implicit vs. Explicit
   - Implementation location: End systems vs. Network elements
   - Response time: Slower vs. Faster
   - Complexity: Simpler vs. More complex
   - Effectiveness: Less precise vs. More precise

3) **Views on "Adaptive retransmission of TCP protocol improves the throughput of the network":**

   **In favor:**
   - Adaptive retransmission in TCP (like TCP's RTO calculation using Jacobson's algorithm) prevents premature timeouts and unnecessary retransmissions
   - Dynamic adjustment of retransmission timers based on RTT measurements helps TCP adapt to changing network conditions
   - Fast retransmit mechanism allows quick recovery from packet loss without waiting for timers
   - By avoiding unnecessary retransmissions, network congestion is reduced
   - Bandwidth is used more efficiently as fewer redundant packets are sent
   - Overall throughput improves because network resources are better utilized

   **Against:**
   - Adaptive retransmission alone is insufficient for optimal congestion control
   - In high-bandwidth delay product networks, TCP's AIMD (Additive Increase Multiplicative Decrease) approach may be too conservative
   - TCP's congestion control can be unfair to flows with longer RTTs
   - Other approaches like rate-based congestion control might be more effective in certain scenarios
   - Some network conditions (like random losses in wireless networks) can trigger unnecessary congestion responses

   **Balanced view:**
   - Adaptive retransmission is a crucial component but works best as part of a comprehensive congestion control strategy
   - When combined with other mechanisms like congestion avoidance, it significantly improves network throughput
   - The effectiveness depends on the specific network conditions and implementation details

# Question 5: DNS with UDP

**DNS uses UDP instead of TCP. If a DNS packet is lost, there is no automatic recovery. Does this cause a problem, and if so, how is it solved?**

### Step-by-step solution:

1) **Why DNS uses UDP:**
   - DNS typically uses UDP on port 53 for queries and responses
   - UDP is connectionless and has lower overhead than TCP
   - Most DNS queries and responses are small and fit in single UDP packets
   - Using UDP reduces latency, which is critical for DNS lookups that precede other connections

2) **Problems caused by using UDP:**
   - No automatic recovery for lost packets (no acknowledgments or retransmissions)
   - No flow control or congestion control mechanisms
   - UDP has a size limitation of 512 bytes for DNS messages in traditional implementations
   - Multiple queries might arrive out of order

3) **Does this cause a problem?**
   - Yes, it can cause problems in several scenarios:
     - Lost packets mean failed DNS resolution
     - Network congestion can increase packet loss
     - Large DNS responses (e.g., with DNSSEC) may exceed UDP size limits
     - DNS cache poisoning attacks are easier with UDP

4) **Solutions implemented:**
   - **Application-level retransmission:** DNS clients (resolvers) implement their own timeout and retry mechanisms
     - Typically retry 2-3 times with increasing timeouts (e.g., 1 second, then 2 seconds, then 4 seconds)
   
   - **Fallback to TCP:** If a DNS response is truncated (TC bit set) or larger than 512 bytes, the query is retried using TCP
     - TCP provides reliable delivery for large DNS responses
     - Extension mechanisms for DNS (EDNS0) allow larger UDP packet sizes (up to 4096 bytes)
   
   - **DNS redundancy:** Multiple DNS servers are typically configured for each domain
     - If one query fails, the resolver can try alternate servers
   
   - **Caching:** Successful responses are cached at various levels
     - Reduces the impact of occasional packet loss
     - Local DNS caches in operating systems and browsers provide resilience
   
   - **Round-robin load balancing:** Distributes queries across multiple servers
     - Reduces congestion at any single server

5) **Conclusion:**
   - While UDP's lack of automatic recovery does present challenges for DNS, the implemented solutions effectively mitigate these issues
   - The benefits of UDP's speed and lower overhead generally outweigh the drawbacks for most DNS operations
   - The hybrid approach (using UDP primarily with TCP fallback) provides a good balance of performance and reliability

# Question 5: Anonymous FTP (OR part)

**How the anonymous FTP is used to provides a method for the general public to access files on remote sites? Why should there be limitations on anonymous FTP?**

### Step-by-step solution:

1) **Anonymous FTP basics:**
   - FTP (File Transfer Protocol) typically requires username/password authentication
   - Anonymous FTP allows users to access public files without having an account on the server
   - Users connect using "anonymous" as username and their email address as password (by convention)

2) **How anonymous FTP provides public access:**
   - **Dedicated public directories:** Servers configure specific directories accessible to anonymous users
   - **Read-only access:** Most anonymous FTP servers only allow downloading files, not uploading
   - **Separation from private content:** Anonymous users are restricted to a specific directory structure
   - **Directory listings:** Users can browse available files and directories
   - **Standard client compatibility:** Works with any standard FTP client software
   - **No account creation needed:** Eliminates administrative overhead of creating individual accounts

3) **Implementation details:**
   - Server configuration isolates anonymous users in a chroot jail
   - Special "ftp" or "anonymous" user account with limited privileges
   - Directory and file permissions set to prevent unauthorized access
   - Log files track anonymous access for monitoring purposes
   - Bandwidth and connection limits may be applied

4) **Why limitations are necessary on anonymous FTP:**
   - **Security concerns:**
     - Unrestricted access could allow malicious users to exploit server vulnerabilities
     - Anonymous upload capabilities could be used to distribute malware or illegal content
     - Potential for server compromise if not properly configured
   
   - **Resource management:**
     - Unlimited downloads could consume excessive bandwidth
     - Too many simultaneous connections could overload the server
     - Storage space on servers is limited and must be managed
   
   - **Legal and liability issues:**
     - Server owners may be liable for content distributed via their servers
     - Copyright infringement concerns for shared content
     - Geographic restrictions may apply to certain types of content
   
   - **Abuse prevention:**
     - Preventing use of the server for illegal file sharing
     - Avoiding use of the server as a distribution point for spam or phishing
     - Preventing use as a temporary storage for hackers' tools
   
   - **Performance optimization:**
     - Rate limiting ensures fair access for all users
     - Connection limits prevent denial of service scenarios
     - Transfer quotas prevent monopolization of resources

5) **Common limitations implemented:**
   - Restricted to download-only (no upload capabilities)
   - Limited number of simultaneous connections per IP
   - Bandwidth throttling for downloads
   - Connection time limits
   - Download size and quantity restrictions
   - Geographic IP restrictions
   - Content filtering
   - Access limited to certain hours
   - Comprehensive logging of all activity

6) **Conclusion:**
   - Anonymous FTP provides a valuable mechanism for public file distribution
   - Limitations are essential for security, resource management, and legal compliance
   - Modern alternatives like HTTPS downloads and cloud file sharing have reduced the prevalence of anonymous FTP
   - When properly implemented with appropriate limitations, anonymous FTP remains a useful tool for public file distribution
  
   - 
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


# Question 9: Virtual-Circuit vs. Datagram Networks

**An entry in the switching table of a virtual-circuit network is normally created during the setup phase and deleted during the teardown phase. In other words, the entries in this type of network reflect the current connections, the activity in the network. In contrast, the entries in a routing table of a datagram network do not depend on the current connections; they show the configuration of the network and how any packet should be routed to a final destination. The entries may remain the same even if there is no activity in the network. The routing tables, however, are updated if there are changes in the network. Can you explain the reason for these two different characteristics? Can we say that a virtual-circuit is a connection oriented network and a datagram network is a connection Less network because of the above characteristics?**

### Step-by-step solution:

1) **Reasons for different characteristics in virtual-circuit and datagram networks:**

   **Virtual-Circuit Networks:**
   - Entries are connection-dependent because virtual circuits establish dedicated paths for communication
   - Setup phase creates entries because a specific path must be determined before data transfer begins
   - Teardown phase removes entries because resources are released when communication ends
   - Switching decisions are made once during setup and stored in switching tables
   - Tables contain connection-specific information (VCI - Virtual Circuit Identifier)
   - Each packet follows the same pre-established path
   - Focus is on maintaining established connections rather than routing individual packets

   **Datagram Networks:**
   - Entries are topology-dependent rather than connection-dependent
   - Routing tables represent network topology and optimal paths regardless of active connections
   - Tables exist independently of traffic and maintain information about possible destinations
   - Each packet is routed independently based on destination address
   - Routing decisions are made for each packet at each hop
   - Tables are updated when network topology changes (link failures, congestion, etc.)
   - Focus is on routing individual packets rather than maintaining connections

2) **Relationship between these characteristics and connection-orientation:**

   **Virtual-Circuit Networks:**
   - Connection-oriented because:
     - Requires explicit connection establishment before data transfer
     - Maintains state information for each connection
     - Resources are allocated for the duration of the connection
     - Provides a reliable and ordered data transfer service
     - Packets belong to specific connections and follow the same path
     - Connection termination is explicit
   - Examples: ATM, Frame Relay, MPLS

   **Datagram Networks:**
   - Connectionless because:
     - No connection establishment phase required
     - No state information maintained for communication sessions
     - Each packet is handled independently
     - No resources are pre-allocated for communication
     - Packets may take different paths to the destination
     - No explicit termination process
   - Examples: IP, UDP

3) **Conclusion:**
   - Yes, it is accurate to say that a virtual-circuit network is connection-oriented and a datagram network is connectionless based on these characteristics
   - The fundamental difference lies in whether the network maintains state information about connections (virtual-circuit) or routes packets independently (datagram)
   - These characteristics directly influence reliability, ordering, resource allocation, and flexibility in each type of network
   - The choice between these approaches represents a fundamental design decision in network architecture based on requirements for reliability, efficiency, and flexibility

# Question 10: Corrupted Destination Address

**Suppose a computer sends a packet at the network layer to another computer somewhere in the Internet. The logical destination address of the packet is corrupted. What happens to the packet? How can the source computer be informed of the situation?**

### Step-by-step solution:

1) **What happens to the packet with corrupted destination address:**

   a) **Detection of corruption:**
      - IP header includes a checksum field that covers the header (including the destination address)
      - Routers calculate and verify the checksum at each hop
      - If corruption is detected in the header, the router identifies the packet as invalid

   b) **Packet handling:**
      - The router will discard/drop the packet with corrupted destination address
      - No attempt is made to deliver it as the destination is unknown or invalid
      - The router will not forward a packet with an invalid header checksum
      - If the destination address appears valid but points to a non-existent network, the packet may travel until it reaches a router that determines the address is unreachable

   c) **Resource management:**
      - Dropping invalid packets prevents wasting network bandwidth on undeliverable data
      - Prevents misrouting packets to incorrect destinations
      - Avoids potential security issues from malformed packets

2) **How the source computer can be informed:**

   a) **ICMP messages:**
      - The Internet Control Message Protocol (ICMP) is designed specifically for error reporting
      - When a router discards a packet, it can generate an ICMP error message
      - For corrupted addresses, an ICMP "Parameter Problem" message (Type 12) is generated
      - The ICMP message includes:
        * Type and code identifying the specific error
        * The IP header and first 8 bytes of the original packet's data
        * A pointer to where the error was detected in the header

   b) **ICMP delivery:**
      - The ICMP error message is sent back to the source address specified in the original packet
      - Assuming the source address wasn't corrupted, the message will reach the original sender
      - If the source address was also corrupted, no notification is possible

   c) **Source computer response:**
      - The operating system receives the ICMP message and can notify the application
      - The networking stack may attempt to retransmit the packet or inform the application of the failure
      - Applications can implement their own timeout mechanisms to detect lost packets

   d) **Limitations of notification:**
      - ICMP messages may be filtered by firewalls or routers for security reasons
      - Not all routers generate ICMP messages for all types of errors
      - Network congestion might cause the ICMP message itself to be lost
      - Some networks limit the rate of ICMP messages to prevent DoS attacks

3) **Alternative detection mechanisms:**
   - Transport-layer timeout (TCP will timeout and retransmit if no acknowledgment is received)
   - Application-layer timeout (applications often implement their own timeout mechanisms)
   - End-to-end acknowledgments in higher-level protocols

# Question 12: RSA Algorithm

**Illuminate the applications of RSA Algorithm, and perform encryption and decryption using RSA algorithm for p=17, q=11, e=7, M=88.**

### Step-by-step solution:

1) **Applications of RSA Algorithm:**

   a) **Digital Signatures:**
      - Authenticates the origin of messages
      - Ensures message integrity
      - Provides non-repudiation (sender cannot deny sending the message)
      - Used in digital certificates, software distribution, and financial transactions

   b) **Secure Communications:**
      - Encrypts sensitive data for secure transmission
      - Used in SSL/TLS protocols for secure web browsing (HTTPS)
      - Secures email communications (PGP, S/MIME)
      - VPN implementations for secure remote access

   c) **Key Exchange:**
      - Used to securely exchange symmetric encryption keys
      - Important component in hybrid cryptosystems
      - Enables secure communication establishment over insecure channels

   d) **Identity Verification:**
      - Used in authentication protocols
      - Implementation of zero-knowledge proofs
      - Smart cards and hardware security tokens

   e) **Cryptocurrency:**
      - Digital signature mechanism in blockchain technologies
      - Secures cryptocurrency transactions
      - Used in wallet security

2) **RSA Encryption and Decryption Process with given parameters:**

   Given:
   - p = 17 (first prime)
   - q = 11 (second prime)
   - e = 7 (public exponent)
   - M = 88 (message to encrypt)

   Step a) **Calculate n:**
   - n = p × q = 17 × 11 = 187

   Step b) **Calculate φ(n):**
   - φ(n) = (p-1) × (q-1) = 16 × 10 = 160

   Step c) **Verify if e is valid:**
   - e must be coprime with φ(n)
   - gcd(e, φ(n)) = gcd(7, 160) = 1 ✓
   - 1 < e < φ(n) → 1 < 7 < 160 ✓
   - e = 7 is valid

   Step d) **Calculate private key d:**
   - d is the modular multiplicative inverse of e modulo φ(n)
   - d × e ≡ 1 (mod φ(n))
   - d × 7 ≡ 1 (mod 160)
   - Using Extended Euclidean Algorithm:
     - 160 = 7 × 22 + 6
     - 7 = 6 × 1 + 1
     - 6 = 1 × 6 + 0
     - Working backwards:
       - 1 = 7 - 6 × 1
       - 1 = 7 - (160 - 7 × 22) × 1
       - 1 = 7 - 160 + 7 × 22
       - 1 = 7 × 23 - 160
       - 7 × 23 ≡ 1 (mod 160)
     - Therefore, d = 23

   Step e) **Encryption:**
   - C = M^e mod n
   - C = 88^7 mod 187
   - Computing step by step using square-and-multiply:
     - 88^1 = 88 mod 187
     - 88^2 = 7744 mod 187 = 88 mod 187
     - 88^4 = 88^2 × 88^2 mod 187 = 88 × 88 mod 187 = 7744 mod 187 = 88 mod 187
     - 88^7 = 88^4 × 88^2 × 88^1 mod 187 = 88 × 88 × 88 mod 187 = 681472 mod 187 = 11

   Step f) **Decryption:**
   - M = C^d mod n
   - M = 11^23 mod 187
   - Computing step by step using square-and-multiply:
     - 11^1 = 11 mod 187
     - 11^2 = 121 mod 187
     - 11^4 = 121^2 mod 187 = 14641 mod 187 = 39 mod 187
     - 11^8 = 39^2 mod 187 = 1521 mod 187 = 21 mod 187
     - 11^16 = 21^2 mod 187 = 441 mod 187 = 67 mod 187
     - 11^23 = 11^16 × 11^4 × 11^2 × 11^1 mod 187 = 67 × 39 × 121 × 11 mod 187 = 3499143 mod 187 = 88

3) **Verification:**
   - Original message: M = 88
   - Encrypted message: C = 11
   - Decrypted message: M' = 88
   - Since M = M', the encryption and decryption are successful

# Question 13: IP Fragmentation

**Suppose a TCP message that contains 1024 bytes of data and 20 bytes of TCP header is passed to IP for delivery across two networks interconnected by a router (i.e., it travels from the source host to a router to the destination host). The first network has an MTU of 1024 bytes; the second has an MTU of 576 bytes. Each network's MTU gives the size of the largest IP datagram that can be carried in a link-layer frame. Give the sizes and offsets of the sequence of fragments delivered to the network layer at the destination host. Assume all IP headers are 20 bytes.**

### Step-by-step solution:

1) **Initial TCP/IP packet calculation:**
   - TCP data: 1024 bytes
   - TCP header: 20 bytes
   - IP header: 20 bytes
   - Total packet size: 1024 + 20 + 20 = 1064 bytes

2) **Analyzing network path:**
   - Source host → First network (MTU 1024) → Router → Second network (MTU 576) → Destination host
   - The TCP/IP packet must traverse both networks
   - Fragmentation happens when the packet size exceeds a network's MTU

3) **First network fragmentation analysis:**
   - First network MTU: 1024 bytes
   - Maximum payload: 1024 - 20 = 1004 bytes (MTU minus IP header)
   - Original packet size: 1064 bytes
   - Since 1064 > 1024, fragmentation is needed on the first network

4) **Fragmentation on first network:**
   - Fragment 1:
     - IP header: 20 bytes
     - Payload: 1004 bytes (maximum allowed)
     - Total size: 1024 bytes
     - Offset: 0 (first fragment)
     - More fragments flag: 1 (yes)
   
   - Fragment 2:
     - IP header: 20 bytes
     - Payload: 40 bytes (remaining data)
     - Total size: 60 bytes
     - Offset: 1004 ÷ 8 = 125.5 → 125 (in 8-byte units)
     - More fragments flag: 0 (last fragment)

5) **Second network fragmentation analysis:**
   - Second network MTU: 576 bytes
   - Maximum payload: 576 - 20 = 556 bytes (MTU minus IP header)
   - Fragment 1 size from first network: 1024 bytes
   - Since 1024 > 576, further fragmentation is needed

6) **Fragmentation of first fragment on second network:**
   - Fragment 1A:
     - IP header: 20 bytes
     - Payload: 556 bytes
     - Total size: 576 bytes
     - Offset: 0 (same as original fragment 1)
     - More fragments flag: 1 (yes)
   
   - Fragment 1B:
     - IP header: 20 bytes
     - Payload: 448 bytes (remaining from first fragment: 1004 - 556 = 448)
     - Total size: 468 bytes
     - Offset: 556 ÷ 8 = 69.5 → 69 (in 8-byte units)
     - More fragments flag: 1 (yes, since original fragment had more fragments)

7) **Fragmentation of second fragment on second network:**
   - Since Fragment 2 is only 60 bytes, it's smaller than the second network's MTU (576 bytes)
   - No further fragmentation needed

8) **Final fragments received at destination:**
   - Fragment 1A:
     - Size: 576 bytes (20 bytes header + 556 bytes payload)
     - Offset: 0
     - More fragments flag: 1
   
   - Fragment 1B:
     - Size: 468 bytes (20 bytes header + 448 bytes payload)
     - Offset: 69
     - More fragments flag: 1
   
   - Fragment 2:
     - Size: 60 bytes (20 bytes header + 40 bytes payload)
     - Offset: 125
     - More fragments flag: 0

# Question 13 (OR): TCP AIMD Congestion Control

**Consider an instance of TCP's Additive Increase Multiplicative Decrease (AIMD) algorithm where the window size at the start of the first transmission is 2 MSS and the threshold at the start of first transmission is 8 MSS. Assume that a time out occurs during fifth transmission. Find the congestion window size at the end of tenth transmission.**

### Step-by-step solution:

1) **Understanding TCP AIMD principles:**
   - Additive Increase: cwnd += 1 MSS per RTT when below threshold (slow start)
   - Additive Increase: cwnd += 1/cwnd MSS per ACK when above threshold (congestion avoidance)
   - Multiplicative Decrease: ssthresh = cwnd/2, cwnd = 1 MSS (on timeout)
   - Multiplicative Decrease: ssthresh = cwnd/2, cwnd = ssthresh (on 3 duplicate ACKs)

2) **Given information:**
   - Initial congestion window (cwnd) = 2 MSS
   - Initial slow start threshold (ssthresh) = 8 MSS
   - Timeout occurs during 5th transmission

3) **Tracking window size evolution:**
   
   **1st transmission:**
   - cwnd = 2 MSS (given)
   - ssthresh = 8 MSS (given)
   - Mode: Slow Start (cwnd < ssthresh)
   - After 1st transmission: cwnd = 2 × 2 = 4 MSS (doubles in slow start)
   
   **2nd transmission:**
   - cwnd = 4 MSS
   - ssthresh = 8 MSS
   - Mode: Slow Start (cwnd < ssthresh)
   - After 2nd transmission: cwnd = 4 × 2 = 8 MSS (doubles in slow start)
   
   **3rd transmission:**
   - cwnd = 8 MSS
   - ssthresh = 8 MSS
   - Mode: Congestion Avoidance (cwnd = ssthresh)
   - After 3rd transmission: cwnd = 8 + 1 = 9 MSS (adds 1 MSS per RTT in congestion avoidance)
   
   **4th transmission:**
   - cwnd = 9 MSS
   - ssthresh = 8 MSS
   - Mode: Congestion Avoidance (cwnd > ssthresh)
   - After 4th transmission: cwnd = 9 + 1 = 10 MSS (adds 1 MSS per RTT in congestion avoidance)
   
   **5th transmission:**
   - cwnd = 10 MSS
   - ssthresh = 8 MSS
   - Mode: Congestion Avoidance (cwnd > ssthresh)
   - Timeout occurs during this transmission
   - After timeout: ssthresh = cwnd/2 = 10/2 = 5 MSS, cwnd = 1 MSS
   
   **6th transmission:**
   - cwnd = 1 MSS
   - ssthresh = 5 MSS
   - Mode: Slow Start (cwnd < ssthresh)
   - After 6th transmission: cwnd = 1 × 2 = 2 MSS (doubles in slow start)
   
   **7th transmission:**
   - cwnd = 2 MSS
   - ssthresh = 5 MSS
   - Mode: Slow Start (cwnd < ssthresh)
   - After 7th transmission: cwnd = 2 × 2 = 4 MSS (doubles in slow start)
   
   **8th transmission:**
   - cwnd = 4 MSS
   - ssthresh = 5 MSS
   - Mode: Slow Start (cwnd < ssthresh)
   - After 8th transmission: cwnd = 4 × 2 = 8 MSS (doubles in slow start)
   - Note: This exceeds ssthresh, so actual value is capped at ssthresh +1 = 6 MSS
   
   **9th transmission:**
   - cwnd = 5 MSS (capped due to slow start threshold)
   - ssthresh = 5 MSS
   - Mode: Congestion Avoidance (cwnd = ssthresh)
   - After 9th transmission: cwnd = 5 + 1 = 6 MSS (adds 1 MSS per RTT in congestion avoidance)
   
   **10th transmission:**
   - cwnd = 6 MSS
   - ssthresh = 5 MSS
   - Mode: Congestion Avoidance (cwnd > ssthresh)
   - After 10th transmission: cwnd = 6 + 1 = 7 MSS (adds 1 MSS per RTT in congestion avoidance)

4) **Conclusion:**
   - The congestion window size at the end of the tenth transmission is 7 MSS
