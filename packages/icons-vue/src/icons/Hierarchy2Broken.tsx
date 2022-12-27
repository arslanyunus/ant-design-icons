// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy2BrokenSvg from '@ant-design/icons-svg/lib/asn/Hierarchy2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy2Broken: Hierarchy2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy2BrokenSvg}></AntdIcon>;
};

Hierarchy2Broken.displayName = 'Hierarchy2Broken';
Hierarchy2Broken.inheritAttrs = false;
export default Hierarchy2Broken;