// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartEditTwoTone: HeartEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartEditTwoToneSvg}></AntdIcon>;
};

HeartEditTwoTone.displayName = 'HeartEditTwoTone';
HeartEditTwoTone.inheritAttrs = false;
export default HeartEditTwoTone;