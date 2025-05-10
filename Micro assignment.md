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
