// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2OutlineSvg from '@ant-design/icons-svg/lib/asn/Blend2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2Outline: Blend2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2OutlineSvg}></AntdIcon>;
};

Blend2Outline.displayName = 'Blend2Outline';
Blend2Outline.inheritAttrs = false;
export default Blend2Outline;