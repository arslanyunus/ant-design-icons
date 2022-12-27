// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredBoldSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredBold: TicketExpiredBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredBoldSvg}></AntdIcon>;
};

TicketExpiredBold.displayName = 'TicketExpiredBold';
TicketExpiredBold.inheritAttrs = false;
export default TicketExpiredBold;