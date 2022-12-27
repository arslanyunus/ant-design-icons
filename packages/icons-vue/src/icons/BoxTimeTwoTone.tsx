// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxTimeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeTwoTone: BoxTimeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeTwoToneSvg}></AntdIcon>;
};

BoxTimeTwoTone.displayName = 'BoxTimeTwoTone';
BoxTimeTwoTone.inheritAttrs = false;
export default BoxTimeTwoTone;