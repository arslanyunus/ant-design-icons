// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeTwoToneSvg from '@ant-design/icons-svg/lib/asn/SizeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeTwoTone: SizeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeTwoToneSvg}></AntdIcon>;
};

SizeTwoTone.displayName = 'SizeTwoTone';
SizeTwoTone.inheritAttrs = false;
export default SizeTwoTone;