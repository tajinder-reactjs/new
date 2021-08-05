import React from 'react';

/**
 * Common Success Messages
 */
const SUCCESS_MESSAGES = {};

/**
 * Common Error Messages
 */
const ERROR_MESSAGES = {
  invalid_image_type: 'Unsupported file.',
  invalid_image_size: 'Image size must be less than #SIZE#MB.',
  internal_error: 'An internal error occurred.',
  unsupported_file: 'Unsupported file type.',
};

/**
 * Auth (Login | Signup) Messages
 */
const AUTH_MSG = {
  password_updated: 'Password updated. Please login.',
  session_expired: 'Session expired.',
};

/**
 * Source Tables Messages
 */
const SOURCE_TABLES_MSG = {
  select_cells_err: 'Please select cells.',
  cells_required_to_import: 'Please select atleast 1 column to import.',
  select_cells_in_single_row: 'Please select cells in single row.',
  select_cells_in_same_row: 'Please select cells in same row.',
  select_cells_in_same_row_for_transpose:
    'Please select cells same multi transpose row.',
  reload_not_allowed_linked_source_dimension:
    'This source is used for a dimension. To reload/update data for a dimension please visit the dimension manager.',

  table_already_exist:
    'Table with given name already exist in sources. Please choose a different name.',

  no_worksheet: 'No worksheet found.',
  import_empty_table_err:
    'All cells are empty in sheet. Please upload another file.',

  max_file_size:
    'File size more than #SIZE#MB needs to be uploaded in CSV format.',

  select_table_required: 'Please select table.',
  import_table_required: 'Please import table.',

  select_valid_cell_for_multi_transpose:
    'Please select cells 1 row up or down of transposed row for multi transpose.',

  max_cols_imported:
    'You can include max #MAX_COLS_FOR_IMPORT# columns in preview table. But you have included #COUNT# columns in preview table. Please reduce.',

  duplicateColumn: duplicateHeader =>
    `Please rename ${duplicateHeader} column. It is a duplicate header.`,

  copy_created: 'Table copy created successfully.',
  table_deleted: 'Table deleted.',
  table_renamed: 'Table renamed.',
  table_imported: 'Table imported successfully.',
  table_reloaded: 'Table reload successfully.',

  table_name_required: 'Table Name is required.',
  table_name_required_process: 'Table Name is required in "#STEP_NAME#" step.',
  header_required_in_create_table:
    'Please add header name for column: #COLUMN#',
};

/**
 * Process Manager Messages
 */
const PROCESS_MANAGER_MSG = {
  process_added_in_queue: 'Process added in queue for execution.',
  process_formula_not_valid: 'Formula is not valid. Please check it again.',
  process_already_exist: 'Process already exist.',

  all_columns_drop_html: (
    <>
      Please select&nbsp;<b>Drop Table</b>&nbsp;option to drop all columns.
    </>
  ),
  all_columns_drop: `Please select "Drop Table" option to drop all columns.`,

  all_columns_clear_html: (
    <>
      Please select&nbsp;<b>Clear All Rows</b>&nbsp;option to clear all columns.
    </>
  ),
  all_columns_clear: `Please select "Clear All Rows" option to clear all columns.,`,

  target_tbl_required: 'Please select "Target Table" in "#STEP#" step.',
  related_tbl_required: 'Please select "Related Table" in "#STEP#" step.',
  destination_tbl_required:
    'Please select "Destination Table" in "#STEP#" step.',
  lookup_tbl_required: 'Please select "Lookup Table" in "#STEP#" step.',

  one_step_required: 'Please add atleast one step.',
  step_name_required: 'Please set name for step #STEP#',

  create_table_max_rows: 'Max #ROWS# rows are allowed.',

  append_duplicate_column: 'Duplicate Column',
  copy_from_required: 'Please select "Copy From" in "#STEP#" step.',
  paste_into_required: 'Please select "Paste Into" in "#STEP#" step.',
  paste_into_invalid_name: `Please enter a valid Table Name for 'Paste Into' in "#STEP#" step.`,
  create_table_invalid_name: `Please enter a valid Table Name in "#STEP#" step.`,

  action_type_required: 'Please select "Action Type" in "#STEP#" step.',
  delete_col_required: 'Atleast one column is required.',
  select_cols_to_delete:
    'Please select column(s) to #ACTION# in "#STEP#" step.',

  link_invalid_data_type: 'Mismatch Data Type.',
  lookup_duplicate_col: 'Duplicate Column',
  translate_table_duplicate_col: 'Duplicate Column',
  translate_table_add_valid_rows_count: 'Please enter valid rows count.',
  add_rows_success: '#ROWS# rows added.',
  add_row_success: '1 row added.',

  name_required_in_query: 'Please select name of column in "#STEP#" step.',
  operator_required_in_query:
    'Please select operator for "#FIELD#" in "#STEP#" step.',
  value_required_in_query:
    'Please select value for "#FIELD#" in "#STEP#" step.',

  multi_relation_one_col: 'Multiple relations with one column are not allowed.',
  translate_table_col_required: 'Atleast one column is required.',

  add_valid_formula: 'Please add valid formula.',
  add_valid_input_fx: 'Please add valid input value in formula for "#FIELD#"',
  add_valid_field_fx: 'Please add valid field in formula for "#FIELD#"',
  add_valid_fx_in_field: 'Please add valid formula in "#FIELD#" field.',
  add_valid_fx_in_step: `Please add valid formula for #FIELD# in "STEP"`,
  fx_not_divided_by_zero: 'Can\'t divide any number with 0 in "#FIELD#" field.',
  field_required_to_update_fx: 'Please select field to update in "#STEP#"',

  field_required_to_update_lookup:
    'Please select column to update in "#STEP#" step.',
  lookup_field_required_to_update:
    'Please select "Lookup Column" to update in "#STEP#" step.',

  process_deleted: 'Process deleted.',
  process_renamed: 'Process renamed.',
  process_saved: 'Process saved.',

  system_configure_columns: `You can't select "#COLUMNS#" as they are Configured Columns.`,
  system_configure_columns_within_step: `You can't select "#COLUMNS#" in "#STEP#" step as they are Configured Columns.`,
  primary_table: `You can't select "#TABLE_NAME#" as they are Configured with any Scenario or Dimension.`,
  primary_table_within_step: `You can't select "#TABLE_NAME#" in "#STEP#" step as they are Configured with any Scenario or Dimension.`,
  translate_column_not_found: `Your selected column's "#COLUMNS#" not found in "#STEP#" step. Please configure your step again and press Done.`,

  executed_success: 'Your process executed successfully.',
  executed_error: 'Your process executed with an error.',
  executed_cancel: 'Your process cancelled successfully.',
  process_cancelled: 'Process Cancelled',
};

/**
 * Dimensions Messages
 */
const DIMENSIONS_MSG = {
  level_updated: 'Level rename successfully.',

  hierarchy_added: 'Hierarchy added successfully.',
  hierarchy_updated: 'Hierarchy updated successfully.',
  hierarchy_deleted: 'Hierarchy deleted successfully.',
  member_deleted: 'Member deleted successfully',

  update_gl_account: 'GL Account updated successfully.',
  add_gl_account: 'GL Account added successfully.',

  dimension_already_exist: 'Dimension already exist.',
  import_valid_data: 'Please import valid dimension data.',
  import_valid_gl_data: 'Please import valid GL Account data.',

  unique_name_id: 'Name and ID column should not be same.',
  configs_saved: 'Configurations saved.',

  relationship_required: 'Please create relationship.',
  relationship_saved: 'Relationship saved.',

  dimension_deleted: 'Dimension deleted.',
  dimension_created: 'Dimension created.',
  dimension_renamed: 'Dimension renamed.',

  select_year: 'Please Select Year',
  select_month: 'Please Select Month',
};

/**
 * Scenarios Messages
 */
const SCENARIOS_MSG = {
  label_assign: 'Label assigned successfully.',
  label_unassign: 'Label removed successfully.',

  scenario_already_exist: 'Scenario already exist.',

  select_scenario_required: 'Please import scenario.',
  relationship_required: 'Please create relationship.',

  select_sce_for_period: 'Please select Scenario for #HEADER# Period.',
  select_period_for_scenario:
    'Please select Source Period for #HEADER# Period.',

  scenario_saved: 'Scenario saved.',
  scenario_renmaed: 'Scenario renamed.',
  scenario_archived: 'Scenario archived.',
  scenario_restored: 'Scenario restored.',
  scenario_deleted: 'Scenario deleted.',
  scenario_exported: 'Scenario exported.',
};

/**
 * Record Editors Messages
 */
const RECORD_EDITOR_MSG = {
  field_already_dragged: 'Field already added.',

  record_added: 'Record added.',
  record_saved: 'Record saved.',

  copy_created: 'Copy created successfully.',
  editor_saved: 'Record Editor saved.',
  editor_renamed: 'Record Editor renamed.',
  editor_archived: 'Record Editor archived.',
  editor_restored: 'Record Editor restored.',
  editor_deleted: 'Record Editor deleted.',

  add_field_for_structure: 'Please add atleast one field.',
  add_field_value: 'Please add value for #FIELD_NAME#',
};

/**
 * Financial Environment Setup Messages
 */
const FINANCIAL_SETUP_MSG = {
  gl_account_required: 'Please add GL Accounts.',
  actual_already_exist: 'Actual is already in use.',
  valid_value_for_gl_dd: 'Please select value from dropdown.',
};

/**
 * Models Messages
 */
const MODELS_MSG = {
  model_already_exist: 'Model already exist.',
  model_max_rows: 'Max #ROWS# rows are allowed.',

  model_created: 'Model created.',
  model_saved: 'Model saved.',
  model_renamed: 'Model renamed.',
  model_archived: 'Model archived.',
  model_restored: 'Model restored.',
  model_deleted: 'Model deleted.',

  worksheet_created: 'Worksheet created.',
  worksheet_renamed: 'Worksheet renamed.',
  worksheet_delete_confirmation:
    'Are you sure to delete "#WORKSHEET_NAME#" Worksheet?',
  worksheet_deleted: 'Worksheet deleted.',

  shared_mapping_added: 'Mapping mapped',
  shared_mapping_deletion_confirmation:
    'Are you sure you want to unmap "#DIMENSION_NAME#" field?',
  delete_row_mapping_confirmation:
    '"#DIMENSION_NAME#" is already mapped to one or more rows. Including it here will remove it from the row-level mapping.',
  shared_mapping_deletion_confirmation_checkbox_text:
    'Do you want to map "#DIMENSION_NAME#" fields in rows level?',
  shared_mapping_deleted: 'Mapping unmapped',
  select_atleast_one_posting_to_dp: 'Please select "Post Data To" value.',
  select_atleast_one_posting_field:
    'Please select alteast one Posting field value.',
  select_atleast_one_extract_field:
    'Please select alteast one Extract field value.',

  ask_user_discard_draft:
    'We have found unsaved changes for this model in our system.',

  duplicate_row_label: 'Duplicate Label',

  no_workbook: 'Model not found.',
  no_worksheets: 'Model not found.',
  no_worksheet: 'Model not found.',

  not_executed_yet: 'Not executed yet',
  min_col_width: 'Minimum #WIDTH# pixels are required.',
  max_col_width: 'Max #WIDTH# pixels are allowed.',

  fx_not_divided_by_zero: "Can't divide any number with 0.",
  fx_cant_start_with_equal: "Please create the formula without '=' prefix.",
  invalid_fx: 'Formula is not valid. Please check it again.',
  add_valid_field_fx: 'Please add valid field in formula.',
  add_valid_input_fx: 'Please add valid input value in formula,',
  fx_required: 'Please create a formula.',
  row_error: 'This row is throwing error while saving.',

  sheet_already_exist: 'Sheet with "#SHEET_NAME#" name already exist.',
  invalid_posting_selection: 'You cannot select folder in case of Post Data.',
  coa_member_required: `Please select atleast one member of 'Chart of Accounts' for Posting.`,
};

/**
 * Assumptions Messages
 */
const ASSUMPTIONS_MSG = {
  assumption_saved: 'Assumption saved.',
  fill_valid_data: 'Please fill valid data.',
  add_one_valid_row: 'Please add one valid row.',
  assumption_renamed: 'Assumption renamed',
  delete_assumption_confirmation: `If rows reference these assumptions they will break. Delete anyway?`,
};

export {
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  AUTH_MSG,
  SOURCE_TABLES_MSG,
  PROCESS_MANAGER_MSG,
  DIMENSIONS_MSG,
  SCENARIOS_MSG,
  RECORD_EDITOR_MSG,
  FINANCIAL_SETUP_MSG,
  MODELS_MSG,
  ASSUMPTIONS_MSG,
};
