// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountOutlineSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountOutline: TicketDiscountOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountOutlineSvg}></AntdIcon>;
};

TicketDiscountOutline.displayName = 'TicketDiscountOutline';
TicketDiscountOutline.inheritAttrs = false;
export default TicketDiscountOutline;