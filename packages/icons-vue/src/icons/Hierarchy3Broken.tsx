// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3BrokenSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3Broken: Hierarchy3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3BrokenSvg}></AntdIcon>;
};

Hierarchy3Broken.displayName = 'Hierarchy3Broken';
Hierarchy3Broken.inheritAttrs = false;
export default Hierarchy3Broken;