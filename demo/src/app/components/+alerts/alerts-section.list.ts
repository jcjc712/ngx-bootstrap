import { DemoAlertBasicComponent } from './demos/basic/basic';
import { DemoAlertLinkComponent } from './demos/link/link';
import { DemoAlertContentComponent } from './demos/content/content';
import { DemoAlertDismissComponent } from './demos/dismiss/dismiss';
import { DemoAlertDynamicHtmlComponent } from './demos/dynamic-html/dynamic-html';
import { DemoAlertTimeoutComponent } from './demos/dismiss-on-timeout/dismiss-on-timeout';
import { DemoAlertStylingGlobalComponent } from './demos/styling-global/styling-global';
import { DemoAlertStylingLocalComponent } from './demos/styling-local/styling-local';
import { DemoAlertConfigComponent } from './demos/config/config';

export const alertsExamples = [
  {
    name: 'basic',
    outlet: DemoAlertBasicComponent
  },
  {
    title: 'Link color',
    anchor: 'link-color',
    name: 'link',
    text: `<p>Use the <code>.alert-link</code> utility class to quickly provide matching
    colored links within any alert.</p>`,
    outlet: DemoAlertLinkComponent
  },
  {
    title: 'Additional content',
    anchor: 'additional-content',
    name: 'content',
    text: `<p>Alerts can also contain additional HTML elements like headings and
    paragraphs.</p>`,
    outlet: DemoAlertContentComponent
  },
  {
    title: 'Dismissing',
    anchor: 'dismissing',
    name: 'dismiss',
    text: `<p>Alerts have <code>dismiss</code> option. Enabling it will show close button
    to the right of the alert.</p>`,
    outlet: DemoAlertDismissComponent
  },
  {
    title: 'Dynamic html',
    anchor: 'dynamic-html',
    name: 'dynamic',
    text: `<p>Sometimes you will need to show dynamically generated html in alerts, here
    is how you can make it. And don't forget to sanitize your html.</p>`,
    outlet: DemoAlertDynamicHtmlComponent
  },
  {
    title: 'Dismiss on timeout',
    anchor: 'dismiss-on-timeout',
    name: 'timeout',
    text: `<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>
    property to create self closable alerts.</p>`,
    outlet: DemoAlertTimeoutComponent
  },
  {
    title: 'Global styling',
    anchor: 'global-styling',
    name: 'global',
    text: `<p>You can add additional types of alerts globally.</p>`,
    outlet: DemoAlertStylingGlobalComponent
  },
  {
    title: 'Component level styling',
    anchor: 'local-styling',
    name: 'local',
    text: `<p>You can add additional types of alerts directly to containing component</p>`,
    outlet: DemoAlertStylingLocalComponent
  },
  {
    title: 'Configuring defaults',
    anchor: 'configuration',
    name: 'config',
    text: `<p>It is possible to override default alert config partially or completely.</p>`,
    outlet: DemoAlertConfigComponent
  }
];

export const alertsApi = [
  {
    title: 'AlertComponent',
    anchor: 'alert-component'
  },
  {
    title: 'AlertConfig',
    anchor: 'alert-config'
  }
];