jQuery ->
  $('#countries').dataTable
    "sPaginationType": "full_numbers"
    "sAjaxSource": "api.sba.gov/geodata/city_links_for_state_of/NE.json"