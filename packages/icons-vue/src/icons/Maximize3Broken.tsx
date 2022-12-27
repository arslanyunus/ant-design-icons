// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3BrokenSvg from '@ant-design/icons-svg/lib/asn/Maximize3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3Broken: Maximize3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3BrokenSvg}></AntdIcon>;
};

Maximize3Broken.displayName = 'Maximize3Broken';
Maximize3Broken.inheritAttrs = false;
export default Maximize3Broken;