// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Box1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1TwoTone: Box1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1TwoToneSvg}></AntdIcon>;
};

Box1TwoTone.displayName = 'Box1TwoTone';
Box1TwoTone.inheritAttrs = false;
export default Box1TwoTone;