// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketBoldSvg from '@ant-design/icons-svg/lib/asn/TicketBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketBold: TicketBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketBoldSvg}></AntdIcon>;
};

TicketBold.displayName = 'TicketBold';
TicketBold.inheritAttrs = false;
export default TicketBold;