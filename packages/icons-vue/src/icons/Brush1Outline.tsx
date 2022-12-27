// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1OutlineSvg from '@ant-design/icons-svg/lib/asn/Brush1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1Outline: Brush1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1OutlineSvg}></AntdIcon>;
};

Brush1Outline.displayName = 'Brush1Outline';
Brush1Outline.inheritAttrs = false;
export default Brush1Outline;