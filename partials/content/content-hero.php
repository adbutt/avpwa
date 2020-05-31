<?php
//vars
$hero1 = get_field('hero_line_1');
$hero2 = get_field('hero_line_2');
$hero3 = get_field('hero_intro');
?>

<div class="hero-wrapper grid-container">
    <?php if( $hero1 ) { ?>
    <div class="hero-heads">
        <?=$hero1;?>
        <?php if( $hero2 ) { ?><br/>
            <?=$hero2;?>
        <?php } ?>
    </div>
    <?php } ?>
    <?php if( $hero3 ) { ?>
        <div class="hero-sub">
            <?=$hero3;?>
        </div>
    <?php } ?>
</div>