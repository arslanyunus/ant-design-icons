// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountTwoToneSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountTwoTone: TicketDiscountTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountTwoToneSvg}></AntdIcon>;
};

TicketDiscountTwoTone.displayName = 'TicketDiscountTwoTone';
TicketDiscountTwoTone.inheritAttrs = false;
export default TicketDiscountTwoTone;