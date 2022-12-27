// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3BrokenSvg from '@ant-design/icons-svg/lib/asn/Brush3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3Broken: Brush3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3BrokenSvg}></AntdIcon>;
};

Brush3Broken.displayName = 'Brush3Broken';
Brush3Broken.inheritAttrs = false;
export default Brush3Broken;