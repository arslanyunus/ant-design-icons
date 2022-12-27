// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame7BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame7Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame7BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame7Broken: Frame7BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame7BrokenSvg}></AntdIcon>;
};

Frame7Broken.displayName = 'Frame7Broken';
Frame7Broken.inheritAttrs = false;
export default Frame7Broken;