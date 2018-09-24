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
              return (<tr>
                <th scope="row"> { item + 1 } </th>
                  <td>{row.firstName}</td>
                  <td>{ row.lastName }</td>
                  <td>{ row.userName }</td>
                  <td> iconos </td>
              </tr>)
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
        <br />
        <button className="btn" >Nuevo registro</button>
        <Table hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
          { details }
      </Table>
      </ContentSectionComponent>
    )
  }
}
