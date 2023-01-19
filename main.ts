scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnRandomTile(X, assets.tile`myTile4`)
    X = sprites.create(img`
        2 f f f f f f f f f f f f f f 2 
        f 2 f f f f f f f f f f f f 2 f 
        f f 2 f f f f f f f f f f 2 f f 
        f f f 2 f f f f f f f f 2 f f f 
        f f f f 2 f f f f f f 2 f f f f 
        f f f f f 2 f f f f 2 f f f f f 
        f f f f f f 2 f f 2 f f f f f f 
        f f f f f f f 2 2 f f f f f f f 
        f f f f f f f 2 2 f f f f f f f 
        f f f f f f 2 f f 2 f f f f f f 
        f f f f f 2 f f f f 2 f f f f f 
        f f f f 2 f f f f f f 2 f f f f 
        f f f 2 f f f f f f f f 2 f f f 
        f f 2 f f f f f f f f f f 2 f f 
        f 2 f f f f f f f f f f f f 2 f 
        2 f f f f f f f f f f f f f f 2 
        `, SpriteKind.Enemy)
    music.playMelody("C5 G D G E B F A ", 1200)
    timer.after(1000, function () {
        tiles.setCurrentTilemap(tilemap`level3`)
        timer.after(5000, function () {
            tiles.setCurrentTilemap(tilemap`level4`)
            for (let index = 0; index < 500; index++) {
                music.playMelody("C D C D C D C D ", 120)
            }
        })
    })
})
let X: Sprite = null
let dead_wisp: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(dead_wisp, assets.tile`myTile1`)
dead_wisp = sprites.create(img`
    . f f f f f f f f f . 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    f f f f f f f f f f f 
    . f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(dead_wisp)
scene.cameraFollowSprite(dead_wisp)
music.playMelody("B C5 A G C5 A G C5 ", 120)
