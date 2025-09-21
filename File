# Design and Analysis of Algorithms - Assignment I Set-A Solutions

## Question 1: Show that ½n² + 3n = Θ(n²)

**Solution:**

To prove f(n) = ½n² + 3n is Θ(n²), we need to find constants c₁, c₂, and n₀ such that:
c₁n² ≤ ½n² + 3n ≤ c₂n² for all n ≥ n₀

**Finding Lower Bound (c₁):**
- For large n, we can ignore the smaller term 3n
- ½n² + 3n ≥ ½n² (when n > 0)
- So c₁ = ½

**Finding Upper Bound (c₂):**
- ½n² + 3n ≤ ½n² + 3n
- For n ≥ 1: 3n ≤ 3n²
- So ½n² + 3n ≤ ½n² + 3n² = (½ + 3)n² = 3.5n²
- So c₂ = 3.5

**Conclusion:** With c₁ = ½, c₂ = 3.5, and n₀ = 1, we have proven ½n² + 3n = Θ(n²).

---

## Question 2: Complexity of Nested Loop Algorithm

**Given Algorithm:**
```
for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
        a[i][j] = b[i][j] * x
```

**Analysis:**
- Outer loop runs n times (i = 0 to n-1)
- Inner loop runs n times for each outer loop iteration
- Assignment operation takes constant time O(1)

**Step by step:**
- Outer loop: n iterations
- Inner loop: n iterations × n times = n² total iterations
- Each iteration does 1 operation
- Total operations = n² × 1 = n²

**Time Complexity: O(n²)**

---

## Question 3: Insertion Sort Algorithm and Complexity

**Insertion Sort Algorithm:**

```pseudocode
INSERTION-SORT(A)
1. for i = 2 to length[A]
2.     key = A[i]
3.     j = i - 1
4.     while j > 0 and A[j] > key
5.         A[j+1] = A[j]
6.         j = j - 1
7.     A[j+1] = key
```

**How it works:**
- Start from second element (index 1)
- Compare with previous elements
- Shift larger elements to right
- Insert current element in correct position

**Time Complexity Analysis:**

**1. Best Case (Already Sorted Data):**
- Inner while loop never executes
- Only comparisons, no shifts needed
- **Time Complexity: O(n)**

**2. Worst Case (Reverse Sorted Data):**
- For each element i, we compare with all i-1 previous elements
- Total comparisons: 1 + 2 + 3 + ... + (n-1) = n(n-1)/2
- **Time Complexity: O(n²)**

**3. Average Case (Random Data):**
- On average, we compare with half of previous elements
- **Time Complexity: O(n²)**

**Space Complexity: O(1)** - Only uses constant extra space

---

## Question 4: Best Searching Algorithm for Sorted List

**Answer: Binary Search**

**Why Binary Search?**
- Works on sorted data
- Eliminates half of search space in each step
- Most efficient for sorted arrays

**Binary Search Algorithm:**
```pseudocode
BINARY-SEARCH(A, low, high, key)
1. if low > high
2.     return -1
3. mid = (low + high) / 2
4. if A[mid] == key
5.     return mid
6. else if A[mid] > key
7.     return BINARY-SEARCH(A, low, mid-1, key)
8. else
9.     return BINARY-SEARCH(A, mid+1, high, key)
```

**Recurrence Equation:**
T(n) = T(n/2) + 1

**Solving the Recurrence:**
- T(n) = T(n/2) + 1
- T(n/2) = T(n/4) + 1
- T(n/4) = T(n/8) + 1
- ...
- After k steps: T(n/2ᵏ) = T(1) + k
- When n/2ᵏ = 1, then k = log₂n
- Therefore: T(n) = 1 + log₂n = O(log n)

---

## Question 5: Solve T(n) = 2T(n/3) + n lg n

**Using Master Theorem:**
- a = 2, b = 3, f(n) = n lg n
- nˡᵒᵍᵇᵃ = nˡᵒᵍ₃² ≈ n⁰·⁶³

**Compare f(n) with nˡᵒᵍᵇᵃ:**
- f(n) = n lg n
- nˡᵒᵍᵇᵃ ≈ n⁰·⁶³
- Since n lg n grows faster than n⁰·⁶³

**This is Case 3 of Master Theorem:**
- f(n) = Ω(nˡᵒᵍᵇᵃ⁺ᵋ) for some ε > 0
- We need to check regularity condition: af(n/b) ≤ cf(n)
- 2(n/3)lg(n/3) ≤ c(n lg n) for some c < 1

**Solution: T(n) = Θ(n lg n)**

---

## Question 6: Master Method for T(n) = 4T(n/2) + n²lg n

**Analysis:**
- a = 4, b = 2, f(n) = n²lg n
- nˡᵒᵍᵇᵃ = nˡᵒᵍ₂⁴ = n²

**Compare f(n) with nˡᵒᵍᵇᵃ:**
- f(n) = n²lg n
- nˡᵒᵍᵇᵃ = n²
- f(n) = n² × lg n = Θ(n²lg n)

**Answer: YES, Master Method can be applied**

This falls under **Case 2** of Master Theorem with k = 1:
- f(n) = Θ(nˡᵒᵍᵇᵃ × lgᵏn)
- **Solution: T(n) = Θ(n²lg²n)**

---

## Question 7: Binomial Heap Construction

**Given sequence:** 7, 2, 4, 17, 1, 11, 6, 8, 15, 10, 20

**Step-by-step Construction:**

**Insert 7:** B₀ = [7]

**Insert 2:** 
- Create B₀ = [2]
- Merge with existing B₀ = [7]
- Result: B₁ = [2-7] (2 is root, 7 is child)

**Insert 4:** B₀ = [4]

**Insert 17:**
- Create B₀ = [17]
- Merge with B₀ = [4]: B₁ = [4-17]
- Merge with existing B₁ = [2-7]: B₂ = [2-7-4-17]

**Continue this process...**

**Final Binomial Heap:**
- B₀: [1]
- B₁: [6-8]
- B₃: [2 with children 4, 7, 10 and their subtrees]

**Extract Minimum:**
1. Find minimum root = 1
2. Remove B₀ containing 1
3. Return 1
4. Remaining heap contains trees B₁ and B₃

---

## Question 8: B-Tree Insertion (Minimum Degree 3)

**Elements to insert:** C N G A H E K Q M F W L T Z D P R X Y S

**B-Tree Properties (degree 3):**
- Each node has at most 4 keys (2t-1 = 5, but we use 4)
- Each internal node has at most 5 children
- Root has at least 1 key
- All other nodes have at least 1 key

**Step-by-step insertion:**

**After inserting C, N, G, A:**
```
[A, C, G, N]
```

**After inserting H (causes split):**
```
    [G]
   /   \
[A,C]  [H,N]
```

**Continue inserting E, K, Q, M, F, W, L, T, Z, D, P, R, X, Y, S...**

**Final B-Tree structure will have multiple levels with proper key distribution.**

**Delete Operations:**
a) **Delete H:** Remove from leaf or redistribute
b) **Delete T:** May require merging or redistribution

---

## Question 9: Counting Sort Algorithm

**Counting Sort Algorithm:**
```pseudocode
COUNTING-SORT(A, k)
1. let C[0..k] be a new array
2. for i = 0 to k
3.     C[i] = 0
4. for j = 1 to length[A]
5.     C[A[j]] = C[A[j]] + 1
6. for i = 1 to k
7.     C[i] = C[i] + C[i-1]
8. let B[1..length[A]] be a new array
9. for j = length[A] downto 1
10.     B[C[A[j]]] = A[j]
11.     C[A[j]] = C[A[j]] - 1
12. return B
```

**Example with A = {6,0,2,0,1,3,4,6,1,3,2}:**

**Step 1:** Count occurrences
- C[0] = 2, C[1] = 2, C[2] = 2, C[3] = 2, C[4] = 1, C[5] = 0, C[6] = 2

**Step 2:** Cumulative count
- C[0] = 2, C[1] = 4, C[2] = 6, C[3] = 8, C[4] = 9, C[5] = 9, C[6] = 11

**Step 3:** Place elements in output array B
**Final sorted array:** {0,0,1,1,2,2,3,3,4,6,6}

**Time Complexity:** O(n + k), where k is range of input
**Space Complexity:** O(k)

---

## Question 10: BUILD-MAX-Heap Procedure

**Given Array:** A = {5, 3, 17, 10, 84, 19, 6, 22, 9}

**BUILD-MAX-HEAP Algorithm:**
```pseudocode
BUILD-MAX-HEAP(A)
1. heap-size[A] = length[A]
2. for i = ⌊length[A]/2⌋ downto 1
3.     MAX-HEAPIFY(A, i)
```

**Step-by-step execution:**

**Initial array:** [5, 3, 17, 10, 84, 19, 6, 22, 9]
**Array indices:**  1  2   3   4   5   6  7   8  9

**Start from i = ⌊9/2⌋ = 4:**

**i = 4:** MAX-HEAPIFY(A, 4)
- Node 4 (value 10) with children 8 (22) and 9 (9)
- Swap 10 and 22
- Result: [5, 3, 17, 22, 84, 19, 6, 10, 9]

**i = 3:** MAX-HEAPIFY(A, 3)
- Node 3 (value 17) with children 6 (19) and 7 (6)
- Swap 17 and 19
- Result: [5, 3, 19, 22, 84, 17, 6, 10, 9]

**i = 2:** MAX-HEAPIFY(A, 2)
- Node 2 (value 3) with children 4 (22) and 5 (84)
- Swap 3 and 84
- Continue heapifying...
- Result: [5, 84, 19, 22, 3, 17, 6, 10, 9]

**i = 1:** MAX-HEAPIFY(A, 1)
- Node 1 (value 5) with children 2 (84) and 3 (19)
- Swap 5 and 84
- Continue heapifying...
- **Final Max-Heap:** [84, 22, 19, 10, 3, 17, 6, 5, 9]

---

## Question 11: Quick Sort Analysis with Balanced Partition

**Given condition:** Each partition contains at least 1/4 of elements

**Analysis:**
- Best case: Each partition splits array into 1/4 and 3/4 parts
- This gives us the recurrence relation:
- T(n) ≤ T(n/4) + T(3n/4) + O(n)

**Using recursion tree method:**
- At each level, we do O(n) work
- The depth of recursion is determined by the longer path
- Longer path: n → 3n/4 → (3/4)²n → ... → 1
- This gives depth = log₄/₃n

**Total work:**
- Each level does O(n) work
- Number of levels = O(log n)
- **Therefore: T(n) = O(n log n)**

**More precisely:** T(n) ≤ cn log n for some constant c

This shows that even with unbalanced partitions (as long as each side gets at least 1/4), Quick Sort still maintains O(n log n) average performance.
