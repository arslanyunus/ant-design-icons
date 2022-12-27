// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendTwoToneSvg from '@ant-design/icons-svg/lib/asn/BlendTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendTwoTone: BlendTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendTwoToneSvg}></AntdIcon>;
};

BlendTwoTone.displayName = 'BlendTwoTone';
BlendTwoTone.inheritAttrs = false;
export default BlendTwoTone;