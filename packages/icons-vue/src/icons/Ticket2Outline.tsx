// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2OutlineSvg from '@ant-design/icons-svg/lib/asn/Ticket2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2Outline: Ticket2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2OutlineSvg}></AntdIcon>;
};

Ticket2Outline.displayName = 'Ticket2Outline';
Ticket2Outline.inheritAttrs = false;
export default Ticket2Outline;