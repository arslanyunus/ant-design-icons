// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TicketTwoToneSvg from '@ant-design/icons-svg/lib/asn/TicketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TicketTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TicketTwoTone: TicketTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TicketTwoToneSvg}></AntdIcon>;
};

TicketTwoTone.displayName = 'TicketTwoTone';
TicketTwoTone.inheritAttrs = false;
export default TicketTwoTone;