// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Ticket2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2TwoTone: Ticket2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2TwoToneSvg}></AntdIcon>;
};

Ticket2TwoTone.displayName = 'Ticket2TwoTone';
Ticket2TwoTone.inheritAttrs = false;
export default Ticket2TwoTone;