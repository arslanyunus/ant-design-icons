// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Box1BrokenSvg from '@ant-design/icons-svg/lib/asn/Box1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Box1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Box1Broken: Box1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Box1BrokenSvg}></AntdIcon>;
};

Box1Broken.displayName = 'Box1Broken';
Box1Broken.inheritAttrs = false;
export default Box1Broken;