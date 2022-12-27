// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Cube3DLinearSvg from '@ant-design/icons-svg/lib/asn/Cube3DLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Cube3DLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Cube3DLinear: Cube3DLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Cube3DLinearSvg}></AntdIcon>;
};

Cube3DLinear.displayName = 'Cube3DLinear';
Cube3DLinear.inheritAttrs = false;
export default Cube3DLinear;