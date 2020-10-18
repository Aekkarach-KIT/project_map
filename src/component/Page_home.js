import NaBar from './Bar'
import Footer from './Footer'
import './Style.css'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import Tabletop from 'tabletop'
import { Chart } from 'react-google-charts'

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  CardImg

} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { ResponsiveContainer } from 'recharts'

export default class PageHome extends Component {
  constructor () {
    super()
    

    this.state = {
      dropdownOpen: false,
      activeTab1: '11',

      People: []
    }
    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)
  }

  toggle () {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  toggle1 (tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      })
    }
  }
  componentDidMount () {
    Tabletop.init({
      key: '1iiB6V8DpMS9yx6vph_qbWcP7uVXfPLcYXcMVFXaR15w',
      callback: googleData => {
        this.setState({
          People: googleData
        })
      },
      simpleSheet: true
    })
  }
 

  render () {
    const { People } = this.state
    

    return (
      <div className='bgco'>
        <Fragment>
          <ReactCSSTransitionGroup
            component='div'
            transitionName='TabsAnimation'
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <NaBar />

              {People.map(obj => {
                return (
                  <div class='container-fluid'>
                    <h2 class='mt-4'>จำนวนประชากร</h2>
                    <ol class='breadcrumb mb-4'>
                      <li class='num'>
                        <h3>{obj.People}</h3>
                      </li>
                    </ol>
                  </div>
                )
              })}
              {People.map(obj => {
                return (
                  <div className='d-flex justify-content-center'>
                    <Row>
                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#133b5c',
                            color: '#fcdab7'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ปริมาณยานพาหนะ</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#e89f71', fontSize: 25 }}
                            >
                              {obj.ปริมาณยานพาหนะ}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#133b5c',
                            color: '#fcdab7'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ปริมาณขยะ</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#e89f71', fontSize: 25 }}
                            >
                              {obj.ปริมาณขยะ}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#133b5c',
                            color: '#fcdab7'
                          }}
                        >
                          <CardBody>
                            <CardTitle>นักท่องเที่ยว</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#e89f71', fontSize: 25 }}
                            >
                              {obj.นักท่องเที่ยว}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#133b5c',
                            color: '#fcdab7'
                          }}
                        >
                          <CardBody>
                            <CardTitle>จำนวนครัวเรือน</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#e89f71', fontSize: 25 }}
                            >
                              {obj.จำนวนครัวเรือน}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col mb='3'>
                        <Card
                          style={{
                            width: '18rem',
                            backgroundColor: '#133b5c',
                            color: '#fcdab7'
                          }}
                        >
                          <CardBody>
                            <CardTitle>ประชากรแฝง</CardTitle>
                            <CardText
                              className='Text'
                              style={{ color: '#e89f71', fontSize: 25 }}
                            >
                              {obj.ประชากรแฝง}
                            </CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                )
              })}
              <Container className='Main'>
                <Row md='7' lg='7'>
                  <Col md='7' lg='7'>
                    <Card className='mb-7'>
                      <CardHeader className='card-header-tab'>
                        <div className='card-header-title'>
                          <i className='header-icon lnr-rocket icon-gradient bg-tempting-azure'>
                            {' '}
                          </i>
                          อัตราการเปลี่ยนแปลงของประชากร
                        </div>
                        <div className='btn-actions-pane-right'>
                          <Button
                            outline
                            className={
                              'border-0 btn-pill btn-wide btn-transition ' +
                              classnames({
                                active: this.state.activeTab1 === '11'
                              })
                            }
                            color='primary'
                            onClick={() => {
                              this.toggle1('11')
                            }}
                          >
                            บุคคลในพื้นที่(ตามทะเบียนราษฎร์)
                          </Button>
                          <Button
                            outline
                            className={
                              'ml-1 btn-pill btn-wide border-0 btn-transition ' +
                              classnames({
                                active: this.state.activeTab1 === '22'
                              })
                            }
                            color='primary'
                            onClick={() => {
                              this.toggle1('22')
                            }}
                          >
                            ประชากรแฝง
                          </Button>
                        </div>
                      </CardHeader>
                      <TabContent activeTab={this.state.activeTab1}>
                        <TabPane tabId='11'>
                          <CardBody className='pt-2'>
                            <Row className='mt-3'>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-4 text-muted'>
                                          52.73%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเพศหญิง
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='danger'
                                        value='52.73'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          47.26%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเพศชาย
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='success'
                                        value='47.26'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className='divider mt-4' />
                            <Row>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          11.68%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรผู้สูงอายุ (60ปี ขึ้นไป)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='primary'
                                        value='11.68'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          24.11%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรเด็ก (อายุระหว่าง 0-15 ปี)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='warning'
                                        value='24.11'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          65.12%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          จำนวนประชากรวัยทำงาน (อายุระหว่าง15-60
                                          ปี)
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='primary'
                                        value='65.12'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                          <div className='widget-chart p-0'>
                            <div className='widget-chart-content'>
                              <div className='widget-description mt-0 text-danger'>
                                <FontAwesomeIcon icon={faArrowDown} />
                                <span className='pl-1' fontSize=''>
                                  0.066%
                                </span>
                                <span className='text-muted opacity-8 pl-1'>
                                  ร้อยละการการขยายตัวของจำนวนประชากรเทียบจากปีก่อนหน้า
                                </span>
                              </div>
                            </div>
                            <ResponsiveContainer height={220}>
                              <iframe
                                width='500'
                                height='214'
                                seamless
                                frameborder='0'
                                scrolling='no'
                                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1363727181&amp;format=interactive'
                              ></iframe>
                            </ResponsiveContainer>
                            <CardSubtitle
                              style={{
                                textAlign: 'center',
                                padding: 5,
                                color: 'grey',
                                fontSize: 14
                              }}
                            >
                              ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                            </CardSubtitle>
                          </div>
                        </TabPane>
                        <TabPane tabId='22'>
                          <div className='widget-chart p-0'>
                            <ResponsiveContainer height={200} width={600}>
                              <Chart
                                width={'500px'}
                                height={'500px'}
                                chartType='LineChart'
                                data={[
                                  ['ปี', 'จำนวน(คน)'],

                                  [2553, 45000],
                                  [2554, 55000],
                                  [2555, 70000],
                                  [2556, 80000],
                                  [2557, 94000],
                                  [2558, 120000],
                                  [2559, 150000],
                                  [2560, 200000]
                                ]}
                                options={{
                                  hAxis: {
                                    title: 'ปี'
                                  },
                                  vAxis: {
                                    title: 'จำนวนประชากร'
                                  }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                              />
                            </ResponsiveContainer>
                            <div className='widget-chart-content mt-3 mb-2'>
                              <div className='widget-description mt-0 text-success'>
                                <FontAwesomeIcon icon={faArrowUp} />
                                <span className='pl-2 pr-2'>37.2%</span>
                                <span className='text-muted opacity-8'>
                                  ร้อยละการขยายตัวของจำนวนประชากรแฝงจากปีก่อนหน้า
                                </span>
                              </div>
                            </div>
                          </div>
                          <CardBody className='pt-2'>
                            <Row>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          23%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          ประชากรแฝงกลางวัน
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='warning'
                                        value='23'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          76%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          ประชากรแฝงกลางคืน
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='info'
                                        value='76'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className='divider mt-4' />
                            <Row>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          83%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          นักท่องเที่ยว
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='danger'
                                        value='83'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md='10' lg='10'>
                                <div className='widget-content'>
                                  <div className='widget-content-outer'>
                                    <div className='widget-content-wrapper'>
                                      <div className='widget-content-left mr-3'>
                                        <div className='widget-numbers fsize-3 text-muted'>
                                          48%
                                        </div>
                                      </div>
                                      <div className='widget-content-right'>
                                        <div className='text-muted opacity-6'>
                                          แรงงานต่างด้าว
                                        </div>
                                      </div>
                                    </div>
                                    <div className='widget-progress-wrapper mt-1'>
                                      <Progress
                                        className='progress-bar-sm progress-bar-animated-alt'
                                        color='alternate'
                                        value='48'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </TabPane>
                      </TabContent>
                    </Card>
                  </Col>

                  <Col md='5' lg='5'>
                    <Card
                      style={{
                        marginTop: 0,
                        height: '20rem'
                      }}
                    >
                      <iframe
                        width='420'
                        height='328'
                        seamless
                        frameborder='0'
                        scrolling='no'
                        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=775098942&amp;format=interactive'
                      ></iframe>
                    </Card>
                    <Card
                      style={{
                        marginTop: 10
                      }}
                    >
                      <iframe
                        width='420'
                        height='410'
                        seamless
                        frameborder='0'
                        scrolling='no'
                        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1416066045&amp;format=interactive'
                      ></iframe>
                      <CardSubtitle
                        style={{
                          marginTop: 1,
                          textAlign: 'left',
                          color: 'grey',
                          textAlign: 'center',
                          fontSize: 14
                        }}
                      >
                        ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                      </CardSubtitle>
                    </Card>
                  </Col>
                </Row>
                <hr class="style5"/>
                <Row>
                  <Card style={{ marginTop: 20, padding: 2 }}>
                  ข้อมูลสารสนเทศเพื่อการบริหารพื้นที่ จังหวัดภูเก็ต
                  
  <CardImg 
    source={{url: 'https://static.wixstatic.com/media/c6ba6c_377676e7db5c4b58ac33dfe0f985bfe0~mv2.gif'}} 
    title="Above all i am here"
  />
                  
                  </Card>
                </Row>
                <Card style={{ marginTop: 20, padding: 2 }}>
                <Col>
                    <iframe
                      width='1024'
                      height='714'
                      seamless
                      frameborder='0'
                      scrolling='no'
                      src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR6wNP974coAJ0OsHNS_I1PXyDSeOHrgVe51akze9wmvWHtIpKqpSdT2dZWBjerofco7_VrnZ5DQREw/pubchart?oid=1831049486&amp;format=interactive'
                    ></iframe>
                    <CardSubtitle
                      style={{
                        textAlign: 'center',
                        color: 'grey',
                        fontSize: 14,
                        marginBottom: 10
                      }}
                    >
                      ที่มา: กรมการปกครอง กระทรวงมหาดไทย
                    </CardSubtitle>
                  </Col>
                </Card>
              </Container>

              <Footer />
            </div>
          </ReactCSSTransitionGroup>
        </Fragment>
      </div>
    )
  }
}
