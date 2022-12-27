// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DLinearSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DLinear: CubeScan3DLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DLinearSvg}></AntdIcon>;
};

CubeScan3DLinear.displayName = 'CubeScan3DLinear';
CubeScan3DLinear.inheritAttrs = false;
export default CubeScan3DLinear;