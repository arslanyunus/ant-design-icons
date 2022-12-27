// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketStarBoldSvg from '@ant-design/icons-svg/lib/asn/TicketStarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketStarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketStarBold: TicketStarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketStarBoldSvg}></AntdIcon>;
};

TicketStarBold.displayName = 'TicketStarBold';
TicketStarBold.inheritAttrs = false;
export default TicketStarBold;