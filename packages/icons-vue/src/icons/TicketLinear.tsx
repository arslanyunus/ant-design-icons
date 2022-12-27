// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketLinearSvg from '@ant-design/icons-svg/lib/asn/TicketLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketLinear: TicketLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketLinearSvg}></AntdIcon>;
};

TicketLinear.displayName = 'TicketLinear';
TicketLinear.inheritAttrs = false;
export default TicketLinear;