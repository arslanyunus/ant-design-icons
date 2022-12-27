// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropOutlineSvg from '@ant-design/icons-svg/lib/asn/CropOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropOutline: CropOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropOutlineSvg}></AntdIcon>;
};

CropOutline.displayName = 'CropOutline';
CropOutline.inheritAttrs = false;
export default CropOutline;