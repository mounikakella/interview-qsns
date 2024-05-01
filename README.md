Sure, here's a coding round question related to itineraries:

Problem:
Given a list of flight tickets represented as pairs of [source, destination], where each ticket [source, destination] represents a one-way flight from source to destination, reconstruct the complete itinerary in order.

Example:
```plaintext
Input: [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
Output: ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
```

Write a function `reconstructItinerary(tickets: List[List[str]]) -> List[str]` that takes in a list of flight tickets and returns the reconstructed itinerary as a list of strings.

Constraints:
- The input list of tickets will have at least one ticket.
- All tickets are one-way flights.
- The itinerary must begin with "JFK" (John F. Kennedy International Airport), as it is the starting point for all flights.

You can solve this problem using graph traversal algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS). The key is to build a graph from the given tickets and then traverse it in a way that reconstructs the itinerary correctly.

Here are a few more coding round questions with similar complexity:

1. **Word Ladder**:
   - Given two words (beginWord and endWord), and a dictionary of words, find the length of the shortest transformation sequence from beginWord to endWord, such that:
     - Only one letter can be changed at a time.
     - Each transformed word must exist in the word list.
   - Example:
     ```plaintext
     Input:
     beginWord = "hit",
     endWord = "cog",
     wordList = ["hot","dot","dog","lot","log","cog"]

     Output: 5
     Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
     ```
2. **Course Schedule**:
   - There are a total of n courses to take, labeled from 0 to n-1. Some courses may have prerequisites, and they must be taken in a specific order. Given the total number of courses and a list of prerequisite pairs, return whether it is possible to finish all courses.
   - Example:
     ```plaintext
     Input: numCourses = 2, prerequisites = [[1,0]]
     Output: true
     Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
     ```

3. **Longest Increasing Subsequence**:
   - Given an unsorted array of integers, find the length of longest increasing subsequence.
   - Example:
     ```plaintext
     Input: [10,9,2,5,3,7,101,18]
     Output: 4
     Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
     ```

4. **Minimum Window Substring**:
   - Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
   - Example:
     ```plaintext
     Input: S = "ADOBECODEBANC", T = "ABC"
     Output: "BANC"
     ```


Certainly! Here are a few more coding round questions with similar complexity:

1. **Minimum Number of Arrows to Burst Balloons**:
   - There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates are irrelevant. You can assume that the start and end coordinates are integers.
   - Example:
     ```plaintext
     Input: [[10,16], [2,8], [1,6], [7,12]]
     Output: 2
     Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).
     ```

2. **Minimum Depth of Binary Tree**:
   - Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
   - Example:
     ```plaintext
     Input: [3,9,20,null,null,15,7]
          3
         / \
        9  20
          /  \
         15   7
     Output: 2
     ```

3. **Maximum Subarray Product**:
   - Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
   - Example:
     ```plaintext
     Input: [2,3,-2,4]
     Output: 6
     Explanation: [2,3] has the largest product 6.
     ```

4. **Palindrome Partitioning II**:
   - Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s.
   - Example:
     ```plaintext
     Input: "aab"
     Output: 1
     Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
     ```

These problems offer challenges of different types, ranging from array manipulation to tree traversal and dynamic programming. They are of similar complexity and require efficient algorithms to solve within reasonable time and space constraints.
These problems are of similar complexity and often require the use of graph algorithms, dynamic programming, or other advanced techniques to solve efficiently.
