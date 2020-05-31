<?php

class themeCustomizer {

    public function customizer_settings( $wp_customize ) {
        $wp_customize->add_setting( 'phone_number', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'phone_number', array(
            'type' => 'text',
            'section' => 'title_tagline',
            'label' => __( 'Phone Number', 'digimon' ),
        ) );
        
        $wp_customize->add_setting( 'fax_number', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'fax_number', array(
            'type' => 'text',
            'section' => 'title_tagline',
            'label' => __( 'Fax Number', 'digimon' ),
        ) );
        
        $wp_customize->add_setting( 'email_address', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'email_address', array(
            'type' => 'text',
            'section' => 'title_tagline',
            'label' => __( 'Email Address', 'digimon' ),
        ) );
        
        $wp_customize->add_setting( 'facebook', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'facebook', array(
            'type' => 'text',
            'section' => 'title_tagline',
            'label' => __( 'Facebook URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'instagram', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'instagram', array(
            'type' => 'text',
            'section' => 'title_tagline',
            'label' => __( 'Instagram URL', 'digimon' ),
        ) );

        /**
         * Social Profiles
         */
        $wp_customize->add_section( 'social_profiles' , array(
            'title'      => __( 'Social Profiles', 'digimon' ),
            'priority'   => 30,
        ) );

        $wp_customize->add_setting( 'facebook', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'facebook', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'Facebook URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'twitter', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'twitter', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'Twitter URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'instagram', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'instagram', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'Instagram URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'youtube', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'youtube', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'YouTube URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'linkedin', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'linkedin', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'LinkedIn URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'pinterest', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'pinterest', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'Pinterest URL', 'digimon' ),
        ) );

        $wp_customize->add_setting( 'google', array(
            'capability' => 'edit_theme_options',
            'sanitize_callback' => 'sanitize_text_field',
        ) );
          
        $wp_customize->add_control( 'google', array(
            'type' => 'text',
            'section' => 'social_profiles',
            'label' => __( 'Google+ URL', 'digimon' ),
        ) );

    }
    
}