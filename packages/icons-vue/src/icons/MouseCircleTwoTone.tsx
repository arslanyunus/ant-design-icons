// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MouseCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleTwoTone: MouseCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleTwoToneSvg}></AntdIcon>;
};

MouseCircleTwoTone.displayName = 'MouseCircleTwoTone';
MouseCircleTwoTone.inheritAttrs = false;
export default MouseCircleTwoTone;