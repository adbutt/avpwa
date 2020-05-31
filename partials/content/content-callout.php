<?php
$callout_title = get_field('callout_title');
$callout_copy = get_field('callout_copy');
$callout_link_title = get_field('callout_link_text');
$callout_link = get_field('callout_link');
?>

<?php if($callout_copy) {?>
<div class="callout-wrapper">
    <div class="callout-wrap grid-container">
        <div class="callout-intro">
            <?php if( $callout_title ) { ?>
                 <div class="callout-title"><?=$callout_title;?></div>
            <?php } ?>
            <?php if( $callout_copy ) { ?>
            <div class="callout-copy"><?=$callout_copy;?></div>
            <?php } ?>
        </div>
        <?php if( $callout_link ) { ?>
        <div class="callout-action">
            <a href="<?=$callout_link;?>" class="arrow-move"><?=$callout_link_title;?></a>
        <?php } ?>
        </div>
    </div>
</div>
<?php } ?>
