<?php

class Gallery{
        public $name;
        public $date;
        public $url;
}


$path = '.';
$galleries = array();

function cmp($a, $b){
    return strcmp($b->date, $a->date);
}

foreach(new DirectoryIterator($path) as $file) {
        if($file->isDot()) continue;

        if($file->isDir()) {
                $g = new Gallery();
                $g->url = $file->getFilename();
                $parts = explode(',', $g->url);

                $g->date = trim(array_shift($parts));
                $g->name = trim(implode(', ', $parts));

                array_push($galleries, $g);
        }
}

usort($galleries, "cmp");
echo json_encode($galleries);

?>
