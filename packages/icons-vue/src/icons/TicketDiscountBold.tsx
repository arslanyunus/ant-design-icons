// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountBoldSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountBold: TicketDiscountBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountBoldSvg}></AntdIcon>;
};

TicketDiscountBold.displayName = 'TicketDiscountBold';
TicketDiscountBold.inheritAttrs = false;
export default TicketDiscountBold;