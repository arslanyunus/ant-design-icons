// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Box2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2TwoTone: Box2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2TwoToneSvg}></AntdIcon>;
};

Box2TwoTone.displayName = 'Box2TwoTone';
Box2TwoTone.inheritAttrs = false;
export default Box2TwoTone;