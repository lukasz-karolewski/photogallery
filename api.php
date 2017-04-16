<?php

class Gallery{
        public $name;
        public $date;
        public $url;
}


$path = '.';
$galleries = array();

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

echo json_encode($galleries);

?>
