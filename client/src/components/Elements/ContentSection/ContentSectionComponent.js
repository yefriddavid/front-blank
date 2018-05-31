import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


import {
  NavLink
} from 'react-router-dom'
import './ContentSection.css'


class ContentSection extends Component {
  render() {
    const { title } = this.props || { title: false }
    let subBread = null
    if(title !== false){
      subBread = (
        <Breadcrumb>
                  <BreadcrumbItem><NavLink to="/app/home">Home</NavLink></BreadcrumbItem>
                  <BreadcrumbItem active>{title}</BreadcrumbItem>
        </Breadcrumb>
                )
    }else
      subBread = (
        <Breadcrumb>
                  <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
                )

    return (
      <div className = "ContentSection">
          {subBread}

        { this.props.children }
      </div>
    )
  }
}

export default ContentSection
