// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize2LinearSvg from '@ant-design/icons-svg/lib/asn/Maximize2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize2Linear: Maximize2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize2LinearSvg}></AntdIcon>;
};

Maximize2Linear.displayName = 'Maximize2Linear';
Maximize2Linear.inheritAttrs = false;
export default Maximize2Linear;