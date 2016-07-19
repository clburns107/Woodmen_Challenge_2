jQuery ->
  $("#country_lists").dataTable()
    sPaginationType: "full_numbers"
    bJQueryUI: true
    bProcessing: true
    bServerSide: true
    sAjaxSource: $('#countries').data('source')