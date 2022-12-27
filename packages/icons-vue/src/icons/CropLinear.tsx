// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropLinearSvg from '@ant-design/icons-svg/lib/asn/CropLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropLinear: CropLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropLinearSvg}></AntdIcon>;
};

CropLinear.displayName = 'CropLinear';
CropLinear.inheritAttrs = false;
export default CropLinear;