// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2BrokenSvg from '@ant-design/icons-svg/lib/asn/Brush2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2Broken: Brush2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2BrokenSvg}></AntdIcon>;
};

Brush2Broken.displayName = 'Brush2Broken';
Brush2Broken.inheritAttrs = false;
export default Brush2Broken;