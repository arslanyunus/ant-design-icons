// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2OutlineSvg from '@ant-design/icons-svg/lib/asn/Maximize2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2Outline: Maximize2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2OutlineSvg}></AntdIcon>;
};

Maximize2Outline.displayName = 'Maximize2Outline';
Maximize2Outline.inheritAttrs = false;
export default Maximize2Outline;