import React from 'react'
import R from 'ramda'
import h from "lib/ui/hyperscript_with_helpers"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {loadInviteRequest, acceptInvite, resetAcceptInvite} from 'actions'
import PasswordInput from 'components/shared/password_input'
import Spinner from 'components/shared/spinner'
import {OnboardOverlay} from 'components/onboard'
import PasswordCopy from 'components/shared/password_copy'

const
  initialPasswordState = ()=> ({
    passphrase: "",
    passphraseValid: false,
    passphraseScore: null,
    passphraseFeedback: null
  }),
  initialState = ()=> ({
    emailVerificationCode: "",
    encryptionCode: "",
    ...initialPasswordState()
  })

class AcceptInvite extends React.Component {

  constructor(props){
    super(props)
    this.state = initialState()

    if (props.params.inviteToken){
      this.state.emailVerificationCode = props.params.inviteToken
    }
  }

  componentDidMount() {
    if(this.refs.inviteToken && !this.state.emailVerificationCode){
      this.refs.inviteToken.focus()
    } else if (this.refs.encryptionToken){
      this.refs.encryptionToken.focus()
    }
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.inviteExistingUserInvalidPassphraseError &&
        nextProps.inviteExistingUserInvalidPassphraseError){
      this.setState(initialPasswordState())
    }
  }

  _onSubmitPassphrase(e){
    e.preventDefault()
    this.props.onSubmitPassphrase({passphrase: this.state.passphrase})
  }

  _onLoadInvite(e){
    e.preventDefault()
    const [identityHash, encryptionKey] = this.state.encryptionCode.split("_")
    this.props.onLoadInvite({
      emailVerificationCode: this.state.emailVerificationCode,
      identityHash,
      encryptionKey
    })
  }

  _isNewUser(){
    return this.props.inviteParams && !this.props.inviteParams.invitee.pubkey
  }

  render(){
    return h(OnboardOverlay, [
      h.div([
        h.h1([h.em("Accept Invitation")]),
        h.div(".onboard-auth-form.accept-invite-form", [
          this._renderContent(),
          this._renderBackLink()
        ])
      ])
    ])
  }

  _renderContent(){
    if (this.props.inviteParamsVerified && !this.props.loadInviteError && !this.props.isLoadingInvite){
      return this._renderPasswordForm()
    } else if (this.props.loadInviteError) {
      return this._renderLoadError()
    } else {
      return this._renderLoadInviteForm()
    }
  }

  _renderBackLink(){
    return h(Link, {className: "back-link", to: "/home", onClick: ::this.props.onReset}, [
      h.span(".img", "←"),
      h.span("Back To Home")
    ])
  }

  _renderLoadInviteForm(){
    return h.div(".load-invite-form", [

      // h.p(".copy", "To accept an invitation, you need two tokens."),

      h.form({onSubmit: ::this._onLoadInvite}, [

        h.fieldset({className: "invite-token"}, [
          h.p([
            h.strong(".num", "1 "),
            h.span([
            h.strong("Invite Token"),
            ", received in an email from EnvKey <support@envkey.com>"
            ])
          ]),
          h.input({
            type: "password",
            disabled: this.props.isLoadingInvite,
            ref: "inviteToken",
            placeholder: "Invite Token",
            required: true,
            value: this.state.emailVerificationCode,
            onChange: e => this.setState({emailVerificationCode: e.target.value})
          })
        ]),

        h.fieldset({className: "encryption-token"}, [
          h.p([
            h.strong(".num", "2 "),
            h.span([
              h.strong("Encryption Token"),
              ", received directly from the person who invited you"
            ])

          ]),
          h.input({
            type: "password",
            ref: "encryptionToken",
            placeholder: "Encryption Token",
            disabled: this.props.isLoadingInvite,
            value: this.state.encryptionCode,
            required: true,
            onChange: e => this.setState({encryptionCode: e.target.value})
          })
        ]),

        h.fieldset([
          this._renderSubmitLoadInvite()
        ])

      ])
    ])
  }

  _renderLoadError(){
    return h.div(".load-invite-error", [
      h.p("This invitation is invalid or expired. EnvKey invitations are valid for 24 hours, and can only be loaded once."),
      h.button({onClick: ()=> this.setState(initialState(), this.props.onReset)}, "Go Back")
    ])
  }

  _renderSubmitLoadInvite(){
    if (this.props.isLoadingInvite){
      return h(Spinner)
    } else {
      return h.button("Next")
    }
  }

  _passphrasePrompt(){
    if (this._isNewUser()){
      return "Invite verified. To sign in, set a strong master encryption passphrase."
    } else {
      if (this.props.inviteExistingUserInvalidPassphraseError){
        return "Incorrect passphrase. Please try again."
      } else {
        return "Invite verified. To sign in, enter your master encryption passphrase."
      }
    }
  }

  _renderPasswordForm(){
    return h.div([
      h.form(".password-form", {
        onSubmit: ::this._onSubmitPassphrase,
      }, [
        h.p(".copy", this._passphrasePrompt()),
        h.fieldset([
          h(PasswordInput, {
            confirm: this._isNewUser(),
            disabled: this.props.isAuthenticating || this.props.isInvitee,
            value: this.state.passphrase,
            validateStrength: this._isNewUser(),
            valid: this.state.passphraseValid,
            score: this.state.passphraseScore,
            feedback: this.state.passphraseFeedback,
            strengthUserInputs: R.values(R.pick(["email", "firstName", "lastName"], this.props.inviteParams.invitee)),
            onChange: (val, valid, score, feedback) => this.setState({
              passphrase: val,
              passphraseValid: valid,
              passphraseScore: score,
              passphraseFeedback: feedback
            })
          })
        ]),
        h.fieldset([this._renderSubmitPassword()])
        // h.p(".msg-reset-account", ["Forgot your passphrase? ", h(Link, {to: "/reset_account"}, ["Reset your account."])])
      ]),

      (this._isNewUser() ? h(PasswordCopy) : null)
    ])
  }

  _renderSubmitPassword(){
    if(this.props.isAuthenticating || this.props.isInvitee){
      return h(Spinner)
    } else {
      return <button disabled={!this.state.passphraseValid}>Sign In</button>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    params: ownProps.params,
    ...R.pick([
      "inviteParams",
      "inviteParamsVerified",
      "inviteParamsInvalid",
      "acceptInviteEmailError",
      "inviteExistingUserInvalidPassphraseError",
      "isAuthenticating",
      "isLoadingInvite",
      "loadInviteError",
      "isInvitee"
    ], state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadInvite: p => dispatch(loadInviteRequest(p)),
    onSubmitPassphrase: p => dispatch(acceptInvite(p)),
    onReset: ()=> dispatch(resetAcceptInvite())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptInvite)

