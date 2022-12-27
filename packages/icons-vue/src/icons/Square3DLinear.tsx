// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3DLinearSvg from '@ant-design/icons-svg/lib/asn/Square3DLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3DLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3DLinear: Square3DLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3DLinearSvg}></AntdIcon>;
};

Square3DLinear.displayName = 'Square3DLinear';
Square3DLinear.inheritAttrs = false;
export default Square3DLinear;