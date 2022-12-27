// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2OutlineSvg from '@ant-design/icons-svg/lib/asn/Box2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2Outline: Box2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2OutlineSvg}></AntdIcon>;
};

Box2Outline.displayName = 'Box2Outline';
Box2Outline.inheritAttrs = false;
export default Box2Outline;