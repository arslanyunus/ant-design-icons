// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1BrokenSvg from '@ant-design/icons-svg/lib/asn/Shapes1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1Broken: Shapes1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1BrokenSvg}></AntdIcon>;
};

Shapes1Broken.displayName = 'Shapes1Broken';
Shapes1Broken.inheritAttrs = false;
export default Shapes1Broken;