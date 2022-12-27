// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketExpiredOutlineSvg from '@ant-design/icons-svg/lib/asn/TicketExpiredOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketExpiredOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketExpiredOutline: TicketExpiredOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketExpiredOutlineSvg}></AntdIcon>;
};

TicketExpiredOutline.displayName = 'TicketExpiredOutline';
TicketExpiredOutline.inheritAttrs = false;
export default TicketExpiredOutline;