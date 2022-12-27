// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forbidden2BrokenSvg from '@ant-design/icons-svg/lib/asn/Forbidden2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forbidden2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forbidden2Broken: Forbidden2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forbidden2BrokenSvg}></AntdIcon>;
};

Forbidden2Broken.displayName = 'Forbidden2Broken';
Forbidden2Broken.inheritAttrs = false;
export default Forbidden2Broken;