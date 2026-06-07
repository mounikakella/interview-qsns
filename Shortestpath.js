# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Start small. Ship something.")
flights = [
    ("London", "Paris"),
    ("Paris", "Rome"),
    ("Rome", "Dubai"),
    ("Dubai", "Tokyo"),
    ("London", "Dubai"),        # shortcut!
    ("Tokyo", "Sydney"),
    ("Paris", "New York"),
    ("New York", "Sydney"),     # another shortcut!
]
#graph
fight_paths = {}
for source, dest in flights:
    if source in fight_paths.keys():
        fight_paths[source].append(dest)
    else:
        fight_paths[source] = [dest]

queue = ['London']
visited = set()
print(fight_paths)

# BFS using list
queue = [("London", ["London"])]  # (city, path)
visited = set()

while queue:
    print(111111111)
    print(queue)
    city, path = queue.pop(0)   # remove first element
    print(222222222)
    print(queue)
    if city == "Sydney":
        print("Shortest Path:", path)
        break

    if city in visited:
        continue

    visited.add(city)
    for neighbor in fight_paths.get(city, []):
        queue.append((neighbor, path + [neighbor]))
    print(3333333)
    print(queue)
    print("=========")




    
    
    
    
