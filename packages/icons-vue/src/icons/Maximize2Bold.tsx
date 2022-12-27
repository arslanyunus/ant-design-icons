// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2BoldSvg from '@ant-design/icons-svg/lib/asn/Maximize2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2Bold: Maximize2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2BoldSvg}></AntdIcon>;
};

Maximize2Bold.displayName = 'Maximize2Bold';
Maximize2Bold.inheritAttrs = false;
export default Maximize2Bold;