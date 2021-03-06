if [ "$1" == "-h" ]; then
  echo "Put images under assets folder"
  exit 0
fi

runTexturePacker () {
  /usr/local/bin/TexturePacker $1 --data src/assets/spritesheets/spritesheet_${2:0:${#2}-1}{n1}.json --sheet src/assets/spritesheets/spritesheet_${2:0:${#2}-1}{n1}.png --trim-sprite-names --format pixijs --scale 1 --border-padding 0 --shape-padding 2 --max-width 2056 --max-height 2056 --multipack  
}

for dir in src/*/images/*/
do 
  runTexturePacker $dir ${dir/*\images\/}
done