// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3LinearSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3Linear: Hierarchy3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3LinearSvg}></AntdIcon>;
};

Hierarchy3Linear.displayName = 'Hierarchy3Linear';
Hierarchy3Linear.inheritAttrs = false;
export default Hierarchy3Linear;