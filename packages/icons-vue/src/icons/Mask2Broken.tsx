// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2BrokenSvg from '@ant-design/icons-svg/lib/asn/Mask2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2Broken: Mask2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2BrokenSvg}></AntdIcon>;
};

Mask2Broken.displayName = 'Mask2Broken';
Mask2Broken.inheritAttrs = false;
export default Mask2Broken;