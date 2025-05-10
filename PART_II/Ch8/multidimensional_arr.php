<?php
$tasksAndMinutes = [
    ['shopping', 30],
    ['gym', 60],
    ['nap', 15]
];

foreach ($tasksAndMinutes as $item){
    $task = $item[0];
    $minutes = $item[1];
    print "Allow $minutes minutes today for task: $task\n";
}

$tasksAndMinutes2 = [
    ['task' => 'shopping', 'minutes' => 30],
    ['task' => 'gym', 'minutes' => 60],
    ['task' => 'nap', 'minutes' => 15]
];

foreach ($tasksAndMinutes2 as $item){
    $task = $item['task'];
    $minutes = $item['minutes'];
    print "Allow $minutes minutes today for task: $task\n";
}
?>