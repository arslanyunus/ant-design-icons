// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1OutlineSvg from '@ant-design/icons-svg/lib/asn/Shapes1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1Outline: Shapes1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1OutlineSvg}></AntdIcon>;
};

Shapes1Outline.displayName = 'Shapes1Outline';
Shapes1Outline.inheritAttrs = false;
export default Shapes1Outline;