// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseTwoToneSvg from '@ant-design/icons-svg/lib/asn/MouseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseTwoTone: MouseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseTwoToneSvg}></AntdIcon>;
};

MouseTwoTone.displayName = 'MouseTwoTone';
MouseTwoTone.inheritAttrs = false;
export default MouseTwoTone;