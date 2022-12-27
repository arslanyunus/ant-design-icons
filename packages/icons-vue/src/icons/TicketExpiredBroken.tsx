// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredBrokenSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredBroken: TicketExpiredBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredBrokenSvg}></AntdIcon>;
};

TicketExpiredBroken.displayName = 'TicketExpiredBroken';
TicketExpiredBroken.inheritAttrs = false;
export default TicketExpiredBroken;