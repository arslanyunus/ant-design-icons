// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketDiscountBulkSvg from '@ant-design/icons-svg/lib/asn/TicketDiscountBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketDiscountBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketDiscountBulk: TicketDiscountBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketDiscountBulkSvg}></AntdIcon>;
};

TicketDiscountBulk.displayName = 'TicketDiscountBulk';
TicketDiscountBulk.inheritAttrs = false;
export default TicketDiscountBulk;