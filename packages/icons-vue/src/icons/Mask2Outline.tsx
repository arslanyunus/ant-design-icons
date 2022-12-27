// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2OutlineSvg from '@ant-design/icons-svg/lib/asn/Mask2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2Outline: Mask2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2OutlineSvg}></AntdIcon>;
};

Mask2Outline.displayName = 'Mask2Outline';
Mask2Outline.inheritAttrs = false;
export default Mask2Outline;