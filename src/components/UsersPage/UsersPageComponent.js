import React, { Component } from 'react'
import ContentSectionComponent from '../Elements/ContentSection/ContentSectionComponent'
import { Table } from 'reactstrap';
import SpinnerComponent from '../Elements/Spinner/SpinnerComponent'

export default class UsersPage extends Component {
  render() {
    const { isFetching, payload: items } = this.props.users.collection

    let details = null
    if(isFetching === false){
      if(items.length > 0)
        details = (
          <tbody>
            {items.map(function(row, item){
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            })}
          </tbody>
      )
    }else
      details = (
        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <SpinnerComponent />
        </p>
      )


    return (
      <ContentSectionComponent title="Users">
        <h2>Users</h2>
        <Table hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
          {/*
        </tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
              */}
      </Table>
          { details }
      </ContentSectionComponent>
    )
  }
}
