// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2BrokenSvg from '@ant-design/icons-svg/lib/asn/Maximize2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2Broken: Maximize2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2BrokenSvg}></AntdIcon>;
};

Maximize2Broken.displayName = 'Maximize2Broken';
Maximize2Broken.inheritAttrs = false;
export default Maximize2Broken;