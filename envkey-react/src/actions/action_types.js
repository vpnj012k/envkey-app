export const
  API_SUCCESS = "envkey/API_SUCCESS",
  API_FAILED = "envkey/API_FAILED",

  DISCONNECTED = "envkey/DISCONNECTED",

  REACTIVATED_BRIEF = "envkey/REACTIVATED_BRIEF",
  REACTIVATED_LONG = "envkey/REACTIVATED_LONG",

  VERIFY_EMAIL_REQUEST = "envkey/VERIFY_EMAIL_REQUEST",
  VERIFY_EMAIL_SUCCESS = "envkey/VERIFY_EMAIL_SUCCESS",
  VERIFY_EMAIL_FAILED = "envkey/VERIFY_EMAIL_FAILED",

  VERIFY_EMAIL_CODE_REQUEST = "envkey/VERIFY_EMAIL_CODE_REQUEST",
  VERIFY_EMAIL_CODE_SUCCESS = "envkey/VERIFY_EMAIL_CODE_SUCCESS",
  VERIFY_EMAIL_CODE_FAILED = "envkey/VERIFY_EMAIL_CODE_FAILED",

  RESET_VERIFY_EMAIL = "envkey/RESET_VERIFY_EMAIL",
  RESET_SESSION = "envkey/RESET_SESSION",

  LOGIN = "envkey/LOGIN",
  LOGIN_REQUEST = "envkey/LOGIN_REQUEST",
  LOGIN_SUCCESS = "envkey/LOGIN_SUCCESS",
  LOGIN_FAILED = "envkey/LOGIN_FAILED",

  REGISTER = "envkey/REGISTER",
  REGISTER_REQUEST = "envkey/REGISTER_REQUEST",
  REGISTER_SUCCESS = "envkey/REGISTER_SUCCESS",
  REGISTER_FAILED = "envkey/REGISTER_FAILED",

  UPDATE_ENCRYPTED_PRIVKEY = "envkey/UPDATE_ENCRYPTED_PRIVKEY",
  UPDATE_ENCRYPTED_PRIVKEY_REQUEST = "envkey/UPDATE_ENCRYPTED_PRIVKEY_REQUEST",
  UPDATE_ENCRYPTED_PRIVKEY_SUCCESS = "envkey/UPDATE_ENCRYPTED_PRIVKEY_SUCCESS",
  UPDATE_ENCRYPTED_PRIVKEY_FAILED = "envkey/UPDATE_ENCRYPTED_PRIVKEY_FAILED",

  APP_LOADED = "envkey/APP_LOADED",

  LOAD_INVITE_REQUEST = "envkey/LOAD_INVITE_REQUEST",
  LOAD_INVITE_API_SUCCESS = "envkey/LOAD_INVITE_API_SUCCESS",
  LOAD_INVITE_SUCCESS = "envkey/LOAD_INVITE_SUCCESS",
  LOAD_INVITE_FAILED = "envkey/LOAD_INVITE_FAILED",

  VERIFY_INVITE_PARAMS = "envkey/VERIFY_INVITE_PARAMS",
  VERIFY_INVITE_PARAMS_SUCCESS = "envkey/VERIFY_INVITE_PARAMS_SUCCESS",
  VERIFY_INVITE_PARAMS_FAILED = "envkey/VERIFY_INVITE_PARAMS_FAILED",

  ACCEPT_INVITE = "envkey/ACCEPT_INVITE",
  ACCEPT_INVITE_REQUEST = "envkey/ACCEPT_INVITE_REQUEST",
  ACCEPT_INVITE_SUCCESS = "envkey/ACCEPT_INVITE_SUCCESS",
  ACCEPT_INVITE_FAILED = "envkey/ACCEPT_INVITE_FAILED",

  RESET_ACCEPT_INVITE = "envkey/RESET_ACCEPT_INVITE",

  CREATE_ORG_REQUEST = "envkey/CREATE_ORG_REQUEST",
  CREATE_ORG_SUCCESS = "envkey/CREATE_ORG_SUCCESS",
  CREATE_ORG_FAILED = "envkey/CREATE_ORG_FAILED",

  FETCH_CURRENT_USER_REQUEST = "envkey/FETCH_CURRENT_USER_REQUEST",
  FETCH_CURRENT_USER_SUCCESS = "envkey/FETCH_CURRENT_USER_SUCCESS",
  FETCH_CURRENT_USER_FAILED = "envkey/FETCH_CURRENT_USER_FAILED",

  FETCH_CURRENT_USER_UPDATES_REQUEST = "envkey/FETCH_CURRENT_USER_UPDATES_REQUEST",
  FETCH_CURRENT_USER_UPDATES_API_SUCCESS = "envkey/FETCH_CURRENT_USER_UPDATES_API_SUCCESS",
  FETCH_CURRENT_USER_UPDATES_SUCCESS = "envkey/FETCH_CURRENT_USER_UPDATES_SUCCESS",
  FETCH_CURRENT_USER_UPDATES_FAILED = "envkey/FETCH_CURRENT_USER_UPDATES_FAILED",

  SELECTED_OBJECT = "envkey/SELECTED_OBJECT",

  FETCH_OBJECT_DETAILS_REQUEST = "envkey/FETCH_OBJECT_DETAILS_REQUEST",
  FETCH_OBJECT_DETAILS_API_SUCCESS = "envkey/FETCH_OBJECT_DETAILS_API_SUCCESS",
  FETCH_OBJECT_DETAILS_SUCCESS = "envkey/FETCH_OBJECT_DETAILS_SUCCESS",
  FETCH_OBJECT_DETAILS_FAILED = "envkey/FETCH_OBJECT_FAILED",

  CREATE_OBJECT_REQUEST = "envkey/CREATE_OBJECT_REQUEST",
  CREATE_OBJECT_SUCCESS = "envkey/CREATE_OBJECT_SUCCESS",
  CREATE_OBJECT_FAILED = "envkey/CREATE_OBJECT_FAILED",

  UPDATE_OBJECT_SETTINGS_REQUEST = "envkey/UPDATE_OBJECT_SETTINGS_REQUEST",
  UPDATE_OBJECT_SETTINGS_SUCCESS = "envkey/UPDATE_OBJECT_SETTINGS_SUCCESS",
  UPDATE_OBJECT_SETTINGS_FAILED = "envkey/UPDATE_OBJECT_SETTINGS_FAILED",

  UPDATE_ORG_ROLE = "envkey/UPDATE_ORG_ROLE",
  UPDATE_ORG_ROLE_REQUEST = "envkey/UPDATE_ORG_ROLE_REQUEST",
  UPDATE_ORG_ROLE_SUCCESS = "envkey/UPDATE_ORG_ROLE_SUCCESS",
  UPDATE_ORG_ROLE_FAILED = "envkey/UPDATE_ORG_ROLE_FAILED",

  UPDATE_ORG_OWNER_REQUEST = "envkey/UPDATE_ORG_OWNER_REQUEST",
  UPDATE_ORG_OWNER_SUCCESS = "envkey/UPDATE_ORG_OWNER_SUCCESS",
  UPDATE_ORG_OWNER_FAILED = "envkey/UPDATE_ORG_OWNER_FAILED",

  // REMOVE_SELF_FROM_ORG = "envkey/REMOVE_SELF_FROM_ORG",
  // REMOVE_SELF_FROM_ORG_SUCCESS = "envkey/REMOVE_SELF_FROM_ORG_SUCCESS",
  // REMOVE_SELF_FROM_ORG_FAILED = "envkey/REMOVE_SELF_FROM_ORG_FAILED",

  RENAME_OBJECT_REQUEST = "envkey/RENAME_OBJECT_REQUEST",
  RENAME_OBJECT_SUCCESS = "envkey/RENAME_OBJECT_SUCCESS",
  RENAME_OBJECT_FAILED = "envkey/RENAME_OBJECT_FAILED",

  UPDATE_ENV_REQUEST = "envkey/UPDATE_ENV_REQUEST",
  UPDATE_ENV_SUCCESS = "envkey/UPDATE_ENV_SUCCESS",
  UPDATE_ENV_FAILED = "envkey/UPDATE_ENV_FAILED",
  GENERATE_ENV_UPDATE_ID = "envkey/GENERATE_ENV_UPDATE_ID",

  QUEUE_ENVIRONMENT_IMPORT = "envkey/QUEUE_ENVIRONMENT_IMPORT",
  QUEUE_ENVIRONMENT_IMPORT_SUCCESS = "envkey/QUEUE_ENVIRONMENT_IMPORT_SUCCESS",
  QUEUE_ENVIRONMENT_IMPORT_FAILED = "envkey/QUEUE_ENVIRONMENT_IMPORT_FAILED",

  IMPORT_SINGLE_ENVIRONMENT = "envkey/IMPORT_SINGLE_ENVIRONMENT",
  IMPORT_SINGLE_ENVIRONMENT_SUCCESS = "envkey/IMPORT_SINGLE_ENVIRONMENT_SUCCESS",
  IMPORT_SINGLE_ENVIRONMENT_FAILED = "envkey/IMPORT_SINGLE_ENVIRONMENT_FAILED",

  IMPORT_ALL_ENVIRONMENTS = "envkey/IMPORT_ALL_ENVIRONMENTS",
  IMPORT_ALL_ENVIRONMENTS_SUCCESS = "envkey/IMPORT_ALL_ENVIRONMENTS_SUCCESS",
  IMPORT_ALL_ENVIRONMENTS_FAILED = "envkey/IMPORT_ALL_ENVIRONMENTS_FAILED",
  COMMIT_IMPORT_ACTIONS = "envkey/COMMIT_IMPORT_ACTIONS",

  REMOVE_OBJECT_REQUEST = "envkey/REMOVE_OBJECT_REQUEST",
  REMOVE_OBJECT_SUCCESS = "envkey/REMOVE_OBJECT_SUCCESS",
  REMOVE_OBJECT_FAILED = "envkey/REMOVE_OBJECT_FAILED",

  GENERATE_INVITE_LINK = "envkey/GENERATE_INVITE_LINK",
  GENERATE_INVITE_LINK_SUCCESS = "envkey/GENERATE_INVITE_LINK_SUCCESS",
  GENERATE_INVITE_LINK_FAILED = "envkey/GENERATE_INVITE_LINK_FAILED",

  INVITE_USER = "envkey/INVITE_USER",
  INVITE_USER_SUCCESS = "envkey/INVITE_USER_SUCCESS",
  INVITE_USER_FAILED = "envkey/INVITE_USER_FAILED",

  REVOKE_INVITE = "envkey/REVOKE_INVITE",
  REVOKE_INVITE_SUCCESS = "envkey/REVOKE_INVITE_SUCCESS",
  REVOKE_INVITE_FAILED = "envkey/REVOKE_INVITE_FAILED",

  REGEN_INVITE = "envkey/REGEN_INVITE",
  REGEN_INVITE_SUCCESS = "envkey/REGEN_INVITE_SUCCESS",
  REGEN_INVITE_FAILED = "envkey/REGEN_INVITE_FAILED",

  CLOSE_GENERATED_INVITE_LINK = "envkey/CLOSE_GENERATED_INVITE_LINK",

  ADD_ASSOC_REQUEST = "envkey/ADD_ASSOC_REQUEST",
  ADD_ASSOC_SUCCESS = "envkey/ADD_ASSOC_SUCCESS",
  ADD_ASSOC_FAILED = "envkey/ADD_ASSOC_FAILED",

  CREATE_ASSOC_REQUEST = "envkey/CREATE_ASSOC_REQUEST",
  CREATE_ASSOC_SUCCESS = "envkey/CREATE_ASSOC_SUCCESS",
  CREATE_ASSOC_FAILED = "envkey/CREATE_ASSOC_FAILED",

  REMOVE_ASSOC_REQUEST = "envkey/REMOVE_ASSOC_REQUEST",
  REMOVE_ASSOC_SUCCESS = "envkey/REMOVE_ASSOC_SUCCESS",
  REMOVE_ASSOC_FAILED = "envkey/REMOVE_ASSOC_FAILED",

  GENERATE_ASSOC_KEY = "envkey/GENERATE_ASSOC_KEY",
  GENERATE_ASSOC_KEY_REQUEST = "envkey/GENERATE_ASSOC_KEY_REQUEST",
  GENERATE_ASSOC_KEY_SUCCESS = "envkey/GENERATE_ASSOC_KEY_SUCCESS",
  GENERATE_ASSOC_KEY_FAILED = "envkey/GENERATE_ASSOC_KEY_FAILED",

  CLEAR_GENERATED_ASSOC_KEY = "envkey/CLEAR_GENERATED_ASSOC_KEY",

  REVOKE_ASSOC_KEY_REQUEST = "envkey/REVOKE_ASSOC_KEY_REQUEST",
  REVOKE_ASSOC_KEY_SUCCESS = "envkey/REVOKE_ASSOC_KEY_SUCCESS",
  REVOKE_ASSOC_KEY_FAILED = "envkey/REVOKE_ASSOC_KEY_FAILED",

  GENERATE_USER_KEYPAIR = "envkey/GENERATE_USER_KEYPAIR",
  GENERATE_USER_KEYPAIR_SUCCESS = "envkey/GENERATE_USER_KEYPAIR_SUCCESS",

  HASH_USER_PASSWORD = "envkey/HASH_USER_PASSWORD",
  HASH_USER_PASSWORD_SUCCESS = "envkey/HASH_USER_PASSWORD_SUCCESS",

  HASH_PASSWORD_AND_GENERATE_KEYS = "envkey/HASH_PASSWORD_AND_GENERATE_KEYS",
  HASH_PASSWORD_AND_GENERATE_KEYS_SUCCESS = "envkey/HASH_PASSWORD_AND_GENERATE_KEYS_SUCCESS",

  GRANT_ENV_ACCESS = "envkey/GRANT_ENV_ACCESS",
  GRANT_ENV_ACCESS_REQUEST = "envkey/GRANT_ENV_ACCESS_REQUEST",
  GRANT_ENV_ACCESS_SUCCESS = "envkey/GRANT_ENV_ACCESS_SUCCESS",
  GRANT_ENV_ACCESS_FAILED = "envkey/GRANT_ENV_ACCESS_FAILED",

  LOGOUT = "envkey/LOGOUT",
  LOGOUT_ALL = "envkey/LOGOUT_ALL",

  SELECT_ACCOUNT = "envkey/SELECT_ACCOUNT",
  SELECT_ACCOUNT_REQUEST = "envkey/SELECT_ACCOUNT_REQUEST",
  SELECT_ACCOUNT_SUCCESS = "envkey/SELECT_ACCOUNT_SUCCESS",
  SELECT_ACCOUNT_FAILED = "envkey/SELECT_ACCOUNT_FAILED",

  SELECT_ORG = "envkey/SELECT_ORG",

  TOKEN_INVALID = "envkey/TOKEN_INVALID",
  ORG_INVALID = "envkey/ORG_INVALID",

  CREATE_ENTRY = "envkey/CREATE_ENTRY",
  UPDATE_ENTRY = "envkey/UPDATE_ENTRY",
  REMOVE_ENTRY = "envkey/REMOVE_ENTRY",
  UPDATE_ENTRY_VAL = "envkey/UPDATE_ENTRY_VAL",

  ADD_SUB_ENV = "envkey/ADD_SUB_ENV",
  REMOVE_SUB_ENV = "envkey/REMOVE_SUB_ENV",
  RENAME_SUB_ENV = "envkey/RENAME_SUB_ENV",

  DECRYPT_ALL = "envkey/DECRYPT_ALL",
  DECRYPT_ALL_SUCCESS = "envkey/DECRYPT_ALL_SUCCESS",
  DECRYPT_ALL_FAILED = "envkey/DECRYPT_ALL_FAILED",

  DECRYPT_PRIVKEY = "envkey/DECRYPT_PRIVKEY",
  DECRYPT_PRIVKEY_FAILED = "envkey/DECRYPT_PRIVKEY_FAILED",
  DECRYPT_PRIVKEY_SUCCESS = "envkey/DECRYPT_PRIVKEY_SUCCESS",

  DECRYPT_ENVS = "envkey/DECRYPT_ENVS",
  DECRYPT_ENVS_FAILED = "envkey/DECRYPT_ENVS_FAILED",
  DECRYPT_ENVS_SUCCESS = "envkey/DECRYPT_ENVS_SUCCESS",

  ADD_TRUSTED_PUBKEY = "envkey/ADD_TRUSTED_PUBKEY",

  VERIFY_CURRENT_USER_PUBKEY = "envkey/VERIFY_CURRENT_USER_PUBKEY",
  VERIFY_CURRENT_USER_PUBKEY_SUCCESS = "envkey/VERIFY_CURRENT_USER_PUBKEY_SUCCESS",
  VERIFY_CURRENT_USER_PUBKEY_FAILED = "envkey/VERIFY_CURRENT_USER_PUBKEY_FAILED",

  VERIFY_TRUSTED_PUBKEYS = "envkey/VERIFY_TRUSTED_PUBKEYS",
  VERIFY_TRUSTED_PUBKEYS_SUCCESS = "envkey/VERIFY_TRUSTED_PUBKEYS_SUCCESS",
  VERIFY_TRUSTED_PUBKEYS_FAILED = "envkey/VERIFY_TRUSTED_PUBKEYS_FAILED",

  VERIFY_ORG_PUBKEYS = "envkey/VERIFY_ORG_PUBKEYS",
  VERIFY_ORG_PUBKEYS_SUCCESS = "envkey/VERIFY_ORG_PUBKEYS_SUCCESS",
  VERIFY_ORG_PUBKEYS_FAILED = "envkey/VERIFY_ORG_PUBKEYS_FAILED",

  UPDATE_TRUSTED_PUBKEYS = "envkey/UPDATE_TRUSTED_PUBKEYS",
  UPDATE_TRUSTED_PUBKEYS_REQUEST = "envkey/UPDATE_TRUSTED_PUBKEYS_REQUEST",
  UPDATE_TRUSTED_PUBKEYS_SUCCESS = "envkey/UPDATE_TRUSTED_PUBKEYS_SUCCESS",
  UPDATE_TRUSTED_PUBKEYS_FAILED = "envkey/UPDATE_TRUSTED_PUBKEYS_FAILED",

  START_DEMO = "envkey/START_DEMO",

  SET_DEMO_DOWNLOAD_URL = "envkey/SET_DEMO_DOWNLOAD_URL",

  GENERATE_DEMO_ORG_REQUEST = "envkey/GENERATE_DEMO_ORG_REQUEST",
  GENERATE_DEMO_ORG_SUCCESS = "envkey/GENERATE_DEMO_ORG_SUCCESS",
  GENERATE_DEMO_ORG_FAILED = "envkey/GENERATE_DEMO_ORG_FAILED",

  SOCKET_SUBSCRIBE_ORG_CHANNEL = "envkey/SOCKET_SUBSCRIBE_ORG_CHANNEL",
  SOCKET_SUBSCRIBE_OBJECT_CHANNEL = "envkey/SOCKET_SUBSCRIBE_OBJECT_CHANNEL",
  SOCKET_UNSUBSCRIBE_OBJECT_CHANNEL = "envkey/SOCKET_UNSUBSCRIBE_OBJECT_CHANNEL",

  SOCKET_USER_UNSUBSCRIBED_ORG_CHANNEL = "envkey/SOCKET_USER_UNSUBSCRIBED_ORG_CHANNEL",
  SOCKET_USER_UNSUBSCRIBED_OBJECT_CHANNEL = "envkey/SOCKET_USER_UNSUBSCRIBED_OBJECT_CHANNEL",

  SOCKET_USER_SUBSCRIBED_ORG_CHANNEL = "envkey/SOCKET_USER_SUBSCRIBED_ORG_CHANNEL",
  SOCKET_USER_SUBSCRIBED_OBJECT_CHANNEL = "envkey/SOCKET_USER_SUBSCRIBED_OBJECT_CHANNEL",

  SOCKET_UPDATE_ENVS_STATUS = "envkey/SOCKET_UPDATE_ENVS_STATUS",
  PROCESSED_SOCKET_UPDATE_ENVS_STATUS = "envkey/PROCESSED_SOCKET_UPDATE_ENVS_STATUS",

  SOCKET_UPDATE_LOCAL_STATUS = "envkey/SOCKET_UPDATE_LOCAL_STATUS",
  SOCKET_BROADCAST_ENVS_STATUS = "envkey/SOCKET_BROADCAST_ENVS_STATUS",

  SOCKET_UNSUBSCRIBE_ALL = "envkey/SOCKET_UNSUBSCRIBE_ALL",

  SOCKET_ORG_UPDATE = "envkey/SOCKET_ORG_UPDATE",

  BILLING_UPGRADE_SUBSCRIPTION = "envkey/BILLING_UPGRADE_SUBSCRIPTION",
  BILLING_CANCEL_SUBSCRIPTION = "envkey/BILLING_CANCEL_SUBSCRIPTION",
  BILLING_UPDATE_CARD = "envkey/BILLING_UPDATE_CARD",
  BILLING_OPEN_STRIPE_FORM = "envkey/BILLING_OPEN_STRIPE_FORM",
  BILLING_STRIPE_FORM_SUBMITTED = "envkey/BILLING_STRIPE_FORM_SUBMITTED",
  BILLING_STRIPE_FORM_CLOSED = "envkey/BILLING_STRIPE_FORM_CLOSED",

  BILLING_UPDATE_CARD_REQUEST = "envkey/BILLING_UPDATE_CARD_REQUEST",
  BILLING_UPDATE_CARD_SUCCESS = "envkey/BILLING_UPDATE_CARD_SUCCESS",
  BILLING_UPDATE_CARD_FAILED = "envkey/BILLING_UPDATE_CARD_FAILED",

  BILLING_UPDATE_SUBSCRIPTION_REQUEST = "envkey/BILLING_UPDATE_SUBSCRIPTION_REQUEST",
  BILLING_UPDATE_SUBSCRIPTION_SUCCESS = "envkey/BILLING_UPDATE_SUBSCRIPTION_SUCCESS",
  BILLING_UPDATE_SUBSCRIPTION_FAILED = "envkey/BILLING_UPDATE_SUBSCRIPTION_FAILED"


