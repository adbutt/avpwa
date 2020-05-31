<?php 
$busa = get_field('business_address');
$bust = get_field('business_tel');
$buse = get_field('business_email');
$bgimage = get_field('image_background');
$form = get_field('contact_form');
$contactc = get_field('contact_copy');
?>
<?php if($bgimage){ 
      $scu = $bgimage['url'];?>
<section class="contact-image" data-background="<?=$scu;?>">
<?php } else { ?> 
<section class="contact-image">
<?php } ?>
    <div class="container">
        <div class="details-container">
            <div class="wrap-detail">
                <p><?=$busa;?></p>
                <p><?=$bust;?></p>
            </div>
        </div>
    </div>

</section>

<section class="in-touch">
    <div class="grid-container">
        <div class="grid-30">      
        <?php if( $form ){
            echo '<div class="contactc-wrap">';
            echo $contactc;
            echo '</div>';
        }?>
            </div>
        <div class="grid-70">
        <?php if( $form ){
            echo '<div class="form-wrapped">';
            echo do_shortcode('[gravityform id='.$form.' title=false description=false ajax=false tabindex=49]');
            echo '</div>';
        }?>
        </div>
    </div>
</section>