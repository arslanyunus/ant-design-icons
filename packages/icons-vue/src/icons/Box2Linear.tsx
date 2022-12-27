// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2LinearSvg from '@ant-design/icons-svg/lib/asn/Box2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2Linear: Box2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2LinearSvg}></AntdIcon>;
};

Box2Linear.displayName = 'Box2Linear';
Box2Linear.inheritAttrs = false;
export default Box2Linear;