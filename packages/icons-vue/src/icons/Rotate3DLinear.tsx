// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Rotate3DLinearSvg from '@ant-design/icons-svg/lib/asn/Rotate3DLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Rotate3DLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Rotate3DLinear: Rotate3DLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Rotate3DLinearSvg}></AntdIcon>;
};

Rotate3DLinear.displayName = 'Rotate3DLinear';
Rotate3DLinear.inheritAttrs = false;
export default Rotate3DLinear;