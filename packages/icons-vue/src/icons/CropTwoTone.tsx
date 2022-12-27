// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CropTwoToneSvg from '@ant-design/icons-svg/lib/asn/CropTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CropTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CropTwoTone: CropTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CropTwoToneSvg}></AntdIcon>;
};

CropTwoTone.displayName = 'CropTwoTone';
CropTwoTone.inheritAttrs = false;
export default CropTwoTone;