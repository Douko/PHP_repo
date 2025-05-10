<?php
while (true) {
    $userInput = readline("type something (or: quit): ");
    if ($userInput == 'quit'){
        break;
    }
    if ($userInput == 'q'){
        break;
    }
    print "you typed '$userInput'\n";
}

print '--- I have left the loop! ---';
?>