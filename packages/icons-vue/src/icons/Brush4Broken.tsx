// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush4BrokenSvg from '@ant-design/icons-svg/lib/asn/Brush4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush4Broken: Brush4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4BrokenSvg}></AntdIcon>;
};

Brush4Broken.displayName = 'Brush4Broken';
Brush4Broken.inheritAttrs = false;
export default Brush4Broken;