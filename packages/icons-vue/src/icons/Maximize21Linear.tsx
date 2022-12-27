// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize21LinearSvg from '@ant-design/icons-svg/lib/asn/Maximize21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize21Linear: Maximize21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize21LinearSvg}></AntdIcon>;
};

Maximize21Linear.displayName = 'Maximize21Linear';
Maximize21Linear.inheritAttrs = false;
export default Maximize21Linear;