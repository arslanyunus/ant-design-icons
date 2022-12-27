// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketStarLinearSvg from '@ant-design/icons-svg/lib/asn/TicketStarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketStarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketStarLinear: TicketStarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketStarLinearSvg}></AntdIcon>;
};

TicketStarLinear.displayName = 'TicketStarLinear';
TicketStarLinear.inheritAttrs = false;
export default TicketStarLinear;