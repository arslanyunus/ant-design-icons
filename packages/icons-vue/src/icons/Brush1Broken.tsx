// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1BrokenSvg from '@ant-design/icons-svg/lib/asn/Brush1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1Broken: Brush1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1BrokenSvg}></AntdIcon>;
};

Brush1Broken.displayName = 'Brush1Broken';
Brush1Broken.inheritAttrs = false;
export default Brush1Broken;