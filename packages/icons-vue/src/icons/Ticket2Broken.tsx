// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2BrokenSvg from '@ant-design/icons-svg/lib/asn/Ticket2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2Broken: Ticket2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2BrokenSvg}></AntdIcon>;
};

Ticket2Broken.displayName = 'Ticket2Broken';
Ticket2Broken.inheritAttrs = false;
export default Ticket2Broken;