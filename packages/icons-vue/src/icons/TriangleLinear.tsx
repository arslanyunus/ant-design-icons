// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TriangleLinearSvg from '@ant-design/icons-svg/lib/asn/TriangleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TriangleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TriangleLinear: TriangleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TriangleLinearSvg}></AntdIcon>;
};

TriangleLinear.displayName = 'TriangleLinear';
TriangleLinear.inheritAttrs = false;
export default TriangleLinear;