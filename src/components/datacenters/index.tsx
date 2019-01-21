import React from 'react';

// Components
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';

// Scss
import '../../styles/components/datacenters.scss';

// Images
import mapImage from '../../images/map.png';

interface Props {

}

interface State {

}

class Datacenters extends React.Component<Props, State> {
	render() {
        return (
            <section id="datacenters" className="section section--padding__bottom">
                <Container>
                    <Preamble title="Global Datacenter Coverage">
                        Fully anonymous private proxies
                        <br />
                        (shared or dedicated) starting at just $0.7
                    </Preamble>
                    <Row>
                        <Col lg={{ size: 12 }}>
                            <img src={mapImage} alt="" className="map img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
	}
}

export default Datacenters;
