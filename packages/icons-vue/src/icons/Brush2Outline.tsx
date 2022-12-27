// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2OutlineSvg from '@ant-design/icons-svg/lib/asn/Brush2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2Outline: Brush2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2OutlineSvg}></AntdIcon>;
};

Brush2Outline.displayName = 'Brush2Outline';
Brush2Outline.inheritAttrs = false;
export default Brush2Outline;