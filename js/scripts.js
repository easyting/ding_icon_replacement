(function($){
  /**
   * Text replacement for expanded icon
   */
  $(function() {
    var $el = $('.expand-object-properties');

    if ($el.length !== 0) {
      $el.text(Drupal.t('See More'));
    }

    //  Change text on block expand/collapse
    $el.click(function() {
      if ($el.text() === Drupal.t('See More')) {
       $el.text(Drupal.t('See Less'));
      }
      else {
        $el.text(Drupal.t('See More'));
      }
    });
  });

})(jQuery);
