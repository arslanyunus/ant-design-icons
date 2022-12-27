// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4LinearSvg from '@ant-design/icons-svg/lib/asn/Maximize4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4Linear: Maximize4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4LinearSvg}></AntdIcon>;
};

Maximize4Linear.displayName = 'Maximize4Linear';
Maximize4Linear.inheritAttrs = false;
export default Maximize4Linear;