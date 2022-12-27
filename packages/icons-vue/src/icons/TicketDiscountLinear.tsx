// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountLinearSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountLinear: TicketDiscountLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountLinearSvg}></AntdIcon>;
};

TicketDiscountLinear.displayName = 'TicketDiscountLinear';
TicketDiscountLinear.inheritAttrs = false;
export default TicketDiscountLinear;