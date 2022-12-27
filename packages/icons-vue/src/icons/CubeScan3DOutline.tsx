// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DOutlineSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DOutline: CubeScan3DOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DOutlineSvg}></AntdIcon>;
};

CubeScan3DOutline.displayName = 'CubeScan3DOutline';
CubeScan3DOutline.inheritAttrs = false;
export default CubeScan3DOutline;