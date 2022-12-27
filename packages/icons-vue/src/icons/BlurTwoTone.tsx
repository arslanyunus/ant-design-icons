// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurTwoToneSvg from '@ant-design/icons-svg/lib/asn/BlurTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurTwoTone: BlurTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurTwoToneSvg}></AntdIcon>;
};

BlurTwoTone.displayName = 'BlurTwoTone';
BlurTwoTone.inheritAttrs = false;
export default BlurTwoTone;