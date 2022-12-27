// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropBoldSvg from '@ant-design/icons-svg/lib/asn/CropBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropBold: CropBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropBoldSvg}></AntdIcon>;
};

CropBold.displayName = 'CropBold';
CropBold.inheritAttrs = false;
export default CropBold;