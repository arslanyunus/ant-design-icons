// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2BoldSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2Bold: Hierarchy2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2BoldSvg}></AntdIcon>;
};

Hierarchy2Bold.displayName = 'Hierarchy2Bold';
Hierarchy2Bold.inheritAttrs = false;
export default Hierarchy2Bold;