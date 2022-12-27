// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketBrokenSvg from '@ant-design/icons-svg/lib/asn/TicketBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketBroken: TicketBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketBrokenSvg}></AntdIcon>;
};

TicketBroken.displayName = 'TicketBroken';
TicketBroken.inheritAttrs = false;
export default TicketBroken;