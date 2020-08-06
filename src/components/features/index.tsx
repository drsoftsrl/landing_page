import * as React from 'react';
import { injectIntl } from "gatsby-plugin-intl";

// Components
import {
    Container,
    Row
} from 'reactstrap';
import Preamble from '../generic/preamble';
import Feature from './feature';

// Scss
import '../../styles/components/features.scss';

// Icons
import {
    faUserSecret,
    faLifeRing,
    faGlobe,
    faFighterJet,
    faSignal,
    faTerminal,
    faPiggyBank,
    faUsers,
    faRetweet,
    faCrosshairs,
    faCircle,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Features = (props) => (
    <section className="features section section--gradient__1">
        <Container>
            <Preamble light title={props.intl.formatMessage({ id: 'unique.proxy.title' })}>
                {props.intl.formatMessage({ id: 'unique.proxy.desc.1' })}
                <br />
                {props.intl.formatMessage({ id: 'unique.proxy.desc.2' })}
                <br />
                {props.intl.formatMessage({ id: 'unique.proxy.desc.3' })}
            </Preamble>
            <Row>
                <Feature icon={faUserSecret} title={props.intl.formatMessage({ id: 'fully.autonomous.title' })}>
                    {props.intl.formatMessage({ id: 'fully.autonomous.desc' })}
                </Feature>
                <Feature icon={faLifeRing} title={props.intl.formatMessage({ id: '24.support.title' })}>
                    {props.intl.formatMessage({ id: '24.support.desc' })}
                </Feature>
                <Feature icon={faGlobe} title={props.intl.formatMessage({ id: 'multiple.datacenters.title' })}>
                    {props.intl.formatMessage({ id: 'multiple.datacenters.desc' })}
                </Feature>
            </Row>
            <Row>
                <Feature icon={faFighterJet} title={props.intl.formatMessage({ id: 'instant.activation.title' })}>
                    {props.intl.formatMessage({ id: 'instant.activation.title' })}
                </Feature>
                <Feature icon={faSignal} title={props.intl.formatMessage({ id: 'high.speed.title' })}>
                    {props.intl.formatMessage({ id: 'high.speed.title' })}
                </Feature>
                <Feature icon={faTerminal} title={props.intl.formatMessage({ id: 'powerfull.automation.title' })}>
                    {props.intl.formatMessage({ id: 'powerfull.automation.desc' })}
                </Feature>
            </Row>
            <Row>
                <Feature icon={faPiggyBank} title={props.intl.formatMessage({ id: 'affordable.pricing.title' })}>
                    {props.intl.formatMessage({ id: 'affordable.pricing.desc' })}
                </Feature>
                <Feature icon={faUsers} title={props.intl.formatMessage({ id: 'dual.authentication.title' })}>
                    {props.intl.formatMessage({ id: 'dual.authentication.desc' })}
                </Feature>
                <Feature icon={faRetweet} title={props.intl.formatMessage({ id: 'monthly.refresh.title' })}>
                    {props.intl.formatMessage({ id: 'monthly.refresh.desc' })}
                </Feature>
            </Row>
            <Row>
                <Feature icon={faChartLine} title={props.intl.formatMessage({ id: 'unlimited.bandwidth.title' })}>
                    {props.intl.formatMessage({ id: 'unlimited.bandwidth.title' })}
                </Feature>
                <Feature icon={faCrosshairs} title={props.intl.formatMessage({ id: 'pick.proxy.title' })}>
                    {props.intl.formatMessage({ id: 'pick.proxy.desc' })}
                </Feature>
                <Feature icon={faCircle} title={props.intl.formatMessage({ id: 'no.leaks.title' })}>
                    {props.intl.formatMessage({ id: 'no.leaks.desc' })}
                </Feature>
            </Row>
        </Container>
    </section>
    );

export default injectIntl(Features);
