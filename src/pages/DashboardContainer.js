import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

import MoneyFormat from '../helpers/money_format';

import { fetchReports } from '../services/reports';

const DashboardContainer = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState(null);

  useEffect(() => {
    fetchReports(user.token)
      .then(reports => {
        setReports(reports);
        setIsLoading(false);
      })
  }, [])

  return (
    <Container fluid={true}>
      <Row>
        <Col xs="12" md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{ isLoading ? <Skeleton /> : 'Departments' }</CardTitle>
              <CardText>
                { isLoading ? <Skeleton /> : reports.departments }
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{ isLoading ? <Skeleton /> : 'Employees' }</CardTitle>
              <CardText>
                { isLoading ? <Skeleton /> : reports.employees }
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{ isLoading ? <Skeleton /> : 'Salaries per month' }</CardTitle>
              <CardText>
                { isLoading ? <Skeleton /> : MoneyFormat('EUR').format(reports.total_salaries) }
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default DashboardContainer;