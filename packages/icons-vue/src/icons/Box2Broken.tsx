// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2BrokenSvg from '@ant-design/icons-svg/lib/asn/Box2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2Broken: Box2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2BrokenSvg}></AntdIcon>;
};

Box2Broken.displayName = 'Box2Broken';
Box2Broken.inheritAttrs = false;
export default Box2Broken;