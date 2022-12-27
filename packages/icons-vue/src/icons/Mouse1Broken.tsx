// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mouse1BrokenSvg from '@ant-design/icons-svg/lib/asn/Mouse1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mouse1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mouse1Broken: Mouse1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mouse1BrokenSvg}></AntdIcon>;
};

Mouse1Broken.displayName = 'Mouse1Broken';
Mouse1Broken.inheritAttrs = false;
export default Mouse1Broken;