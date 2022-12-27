// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ticket2BoldSvg from '@ant-design/icons-svg/lib/asn/Ticket2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ticket2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ticket2Bold: Ticket2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ticket2BoldSvg}></AntdIcon>;
};

Ticket2Bold.displayName = 'Ticket2Bold';
Ticket2Bold.inheritAttrs = false;
export default Ticket2Bold;