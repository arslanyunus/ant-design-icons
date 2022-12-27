// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Crown1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Crown1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Crown1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Crown1TwoTone: Crown1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Crown1TwoToneSvg}></AntdIcon>;
};

Crown1TwoTone.displayName = 'Crown1TwoTone';
Crown1TwoTone.inheritAttrs = false;
export default Crown1TwoTone;