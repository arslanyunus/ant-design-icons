// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountBrokenSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountBroken: TicketDiscountBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountBrokenSvg}></AntdIcon>;
};

TicketDiscountBroken.displayName = 'TicketDiscountBroken';
TicketDiscountBroken.inheritAttrs = false;
export default TicketDiscountBroken;