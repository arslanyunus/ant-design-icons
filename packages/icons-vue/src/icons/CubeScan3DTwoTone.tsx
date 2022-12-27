// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DTwoToneSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DTwoTone: CubeScan3DTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DTwoToneSvg}></AntdIcon>;
};

CubeScan3DTwoTone.displayName = 'CubeScan3DTwoTone';
CubeScan3DTwoTone.inheritAttrs = false;
export default CubeScan3DTwoTone;