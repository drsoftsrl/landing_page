import React from 'react';

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

const Features = () => (
    <section className="features section section--gradient__1">
        <Container>
            <Preamble light title="Unique proxy features">
                Our infrastructure is unique, battle-tested and carefully monitored by
                <br />
                supervisors 24/7. There is no other proxy provider even close to
                <br />
                operating at the same level and standards that we do.
            </Preamble>
            <Row>
                <Feature icon={faUserSecret} title="Fully anonymous">
                    All our proxies are carefully set and monitored in
                    order to ensure they are 100% anonymous and without any sort of ip or dns leaks.
                </Feature>
                <Feature icon={faLifeRing} title="24/7 Heroic support">
                    Sometimes the kind of support you offer means more than your product and we
                    know that. We're always available and you can give us a try.
                </Feature>
                <Feature icon={faGlobe} title="Multiple datacenters">
                    We're offering more than 100 locations for our proxies and we constantly refresh our
                    list to add more locations from all over the world.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faFighterJet} title="Instant activation">
                    Your proxies are activated instantly once your payment enters our system and
                    we really stand behind this word which is not just for marketing.
                </Feature>
                <Feature icon={faSignal} title="High speed connections">
                    All our servers are attached to 1Gbps and 10Gbps connections and we constantly
                    update our networking stacks to maintain a top position in terms of speed.
                </Feature>
                <Feature icon={faTerminal} title="Powerful automation">
                    From status checkers to supervisors and service testers we have it all.
                    Our stack is fully automated and self-healing without any intervention.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faPiggyBank} title="Affordable pricing">
                    Given the performance and services we provide we can proudly say that our prices are very
                    small and fair. Check out our pricing page and we promise you won't be disappointed.
                </Feature>
                <Feature icon={faUsers} title="Dual authentication">
                    Don't wanna use a username and password combo to authenticate to your proxies?
                    No problem, you can use your ip address instead.
                </Feature>
                <Feature icon={faRetweet} title="Monthly list refresh">
                    Each month you can replace your proxies without our intervention.
                    Our control-panel allows you to achieve such advanced operations.
                </Feature>
            </Row>
            <Row>
                <Feature icon={faChartLine} title="Unlimited bandwidth">
                    We're not placing any sorts of limits on your bandwith so you can enjoy really fast
                    and responsive proxies for your applications.
                </Feature>
                <Feature icon={faCrosshairs} title="Pick your proxy">
                    We don't sell you packages. You can pick each proxy IP individually by subnet, city,
                    state or country. You're in full control.
                </Feature>
                <Feature icon={faCircle} title="No leaks">
                    Our automation suite constantly monitors and checks the proxies against IP leaks or
                    DNS leaks to ensure elite anonymity for our customers.
                </Feature>
            </Row>
        </Container>
    </section>
    );

export default Features;
