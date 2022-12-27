// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickTwoTone: HeartTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickTwoToneSvg}></AntdIcon>;
};

HeartTickTwoTone.displayName = 'HeartTickTwoTone';
HeartTickTwoTone.inheritAttrs = false;
export default HeartTickTwoTone;