// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3OutlineSvg from '@ant-design/icons-svg/lib/asn/Brush3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3Outline: Brush3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3OutlineSvg}></AntdIcon>;
};

Brush3Outline.displayName = 'Brush3Outline';
Brush3Outline.inheritAttrs = false;
export default Brush3Outline;