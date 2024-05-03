def fib(n):
    if n == 0 or n ==1:
        return 1
    return fib(n-1)+fib(n-2) # duplicate calculation for all calculated

print(fib(19))


# DP

dp =[-1]*19
def fib(n):
    if n <=1:
        return 1
    if dp[n-1] != -1: # we are checking if the value is already calculated
        return dp[n-1]
    dp[n-1] = fib(n-1)+fib(n-2) #storing in dp and retrieving dp if found
    return dp[n-1]

print(fib(19))
