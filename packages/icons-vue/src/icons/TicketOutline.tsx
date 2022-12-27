// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketOutlineSvg from '@ant-design/icons-svg/lib/asn/TicketOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketOutline: TicketOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketOutlineSvg}></AntdIcon>;
};

TicketOutline.displayName = 'TicketOutline';
TicketOutline.inheritAttrs = false;
export default TicketOutline;