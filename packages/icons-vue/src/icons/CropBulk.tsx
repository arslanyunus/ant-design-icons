// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropBulkSvg from '@ant-design/icons-svg/lib/asn/CropBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropBulk: CropBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropBulkSvg}></AntdIcon>;
};

CropBulk.displayName = 'CropBulk';
CropBulk.inheritAttrs = false;
export default CropBulk;