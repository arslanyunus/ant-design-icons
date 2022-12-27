// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box2BoldSvg from '@ant-design/icons-svg/lib/asn/Box2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box2Bold: Box2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box2BoldSvg}></AntdIcon>;
};

Box2Bold.displayName = 'Box2Bold';
Box2Bold.inheritAttrs = false;
export default Box2Bold;