// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush4OutlineSvg from '@ant-design/icons-svg/lib/asn/Brush4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush4Outline: Brush4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4OutlineSvg}></AntdIcon>;
};

Brush4Outline.displayName = 'Brush4Outline';
Brush4Outline.inheritAttrs = false;
export default Brush4Outline;