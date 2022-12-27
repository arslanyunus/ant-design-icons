// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropBrokenSvg from '@ant-design/icons-svg/lib/asn/CropBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropBroken: CropBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropBrokenSvg}></AntdIcon>;
};

CropBroken.displayName = 'CropBroken';
CropBroken.inheritAttrs = false;
export default CropBroken;