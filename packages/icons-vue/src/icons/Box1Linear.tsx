// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1LinearSvg from '@ant-design/icons-svg/lib/asn/Box1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1Linear: Box1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1LinearSvg}></AntdIcon>;
};

Box1Linear.displayName = 'Box1Linear';
Box1Linear.inheritAttrs = false;
export default Box1Linear;