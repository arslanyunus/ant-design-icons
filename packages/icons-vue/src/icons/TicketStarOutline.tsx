// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketStarOutlineSvg from '@ant-design/icons-svg/lib/asn/TicketStarOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketStarOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketStarOutline: TicketStarOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketStarOutlineSvg}></AntdIcon>;
};

TicketStarOutline.displayName = 'TicketStarOutline';
TicketStarOutline.inheritAttrs = false;
export default TicketStarOutline;