lists = List.create([
    { title: "Christmas To do"
     },
     { title: "Morning routine"}
])

tasks = Task.create([
    { name: "Workout!",
      completed: false,
      list: lists.second
},
    { name: "Go to the post office",
    completed: false,
    list: lists.second
},
    { name: "Write christmas cards",
    completed: false,
    list: lists.first
},
    { name: "Wrap gifts",
    completed: false,
    list: lists.first
}

])