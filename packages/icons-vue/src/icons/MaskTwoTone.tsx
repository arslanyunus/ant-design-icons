// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaskTwoToneSvg from '@ant-design/icons-svg/lib/asn/MaskTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaskTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaskTwoTone: MaskTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaskTwoToneSvg}></AntdIcon>;
};

MaskTwoTone.displayName = 'MaskTwoTone';
MaskTwoTone.inheritAttrs = false;
export default MaskTwoTone;