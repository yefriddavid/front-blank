import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as sessionActions from '../../actions/session'
import { connect } from 'react-redux'
import Campaign from '../../components/Elements/CampaignBox/CampaignBox'
import ButtonCmp from '../../components/Elements/ButtonCmp/ButtonCmp'
import SelectCmp from '../../components/Elements/SelectCmp/SelectCmp'
import { RingLoader, BeatLoader, SyncLoader } from 'react-spinners';



class CampaignContainer extends Component {
  constructor(props) {
    super(props);
      this.state =
      {
        CurrentCampaignName: null,
        CurrentCampaignId: ""
      }

  }

  loginCampaign() {
    this.props.actions.session.loginCampaign({ campaign_id: this.state.CurrentCampaignId, state: "PREIN" })
  }
  onCampaignChange(event){
    const index = event.nativeEvent.target.selectedIndex
    const value = event.target.value
    const text = event.nativeEvent.target[index].text

    this.setState((state) => ({ CurrentCampaignId: value }));
    this.setState((state) => ({ CurrentCampaignName: text }));
  }
  logoutCampaign(event){
    this.props.actions.session.logoutCampaign({ campaign_id: this.state.CurrentCampaignId })
    this.setState((state) => ({ CurrentCampaignId: "" }));
  }
  render() {
    return (
      <Campaign {...this.props} >
        { this.props.campaign.selectedCampaignId === null ?
        <div className="CampaingBox__campaing">
          <SelectCmp campaigns={ this.props.campaign.campaigns } onChange= { this.onCampaignChange.bind(this) } />
        { this.props.campaign.login.isFetching ?
            <BeatLoader />
            :
            <ButtonCmp title={"Entrar"} disabled={ this.state.CurrentCampaignId === "" } onClick= { this.loginCampaign.bind(this) } />
        }
        </div>
        :
        <div className="CampaingBox__campaing">
          <span className="CampaingBox__campaing__title">{ this.props.campaign.InfoCampaign.name }</span>
        { this.props.campaign.logout.isFetching ?
          <BeatLoader />
          :
          <ButtonCmp title={"Terminar"} onClick= { this.logoutCampaign.bind(this) } />
        }
        </div>
      }


      </Campaign>
    )
  }
}

const mapStateToProps = (state) => {
  const { campaign } = state.session
  return {
    campaign
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      session: bindActionCreators(sessionActions, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampaignContainer)

