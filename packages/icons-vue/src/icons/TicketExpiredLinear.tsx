// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredLinearSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredLinear: TicketExpiredLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredLinearSvg}></AntdIcon>;
};

TicketExpiredLinear.displayName = 'TicketExpiredLinear';
TicketExpiredLinear.inheritAttrs = false;
export default TicketExpiredLinear;