// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2BrokenSvg from '@ant-design/icons-svg/lib/asn/Blend2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2Broken: Blend2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2BrokenSvg}></AntdIcon>;
};

Blend2Broken.displayName = 'Blend2Broken';
Blend2Broken.inheritAttrs = false;
export default Blend2Broken;