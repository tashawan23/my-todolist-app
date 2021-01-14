lists = List.create([
    {title: "TASKINBOX"
    },
    { title: "Christmas To do"
     },
     { title: "Morning routine"}
])

tasks = Task.create([
    { name: "Workout!",
      completed: false,
      list: lists.third,
      star: true,
},
    { name: "Go to the post office",
    completed: false,
    list: lists.third,
    star: false
},
    { name: "Write christmas cards",
    completed: false,
    list: lists.second,
    star: false
},
    { name: "Wrap gifts",
    completed: false,
    list: lists.second,
    star: false
}

])