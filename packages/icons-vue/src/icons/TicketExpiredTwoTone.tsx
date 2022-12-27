// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredTwoToneSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredTwoTone: TicketExpiredTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredTwoToneSvg}></AntdIcon>;
};

TicketExpiredTwoTone.displayName = 'TicketExpiredTwoTone';
TicketExpiredTwoTone.inheritAttrs = false;
export default TicketExpiredTwoTone;