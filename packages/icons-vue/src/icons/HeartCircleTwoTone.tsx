// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartCircleTwoTone: HeartCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartCircleTwoToneSvg}></AntdIcon>;
};

HeartCircleTwoTone.displayName = 'HeartCircleTwoTone';
HeartCircleTwoTone.inheritAttrs = false;
export default HeartCircleTwoTone;