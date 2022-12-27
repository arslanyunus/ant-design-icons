// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame6BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame6Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame6BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame6Broken: Frame6BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame6BrokenSvg}></AntdIcon>;
};

Frame6Broken.displayName = 'Frame6Broken';
Frame6Broken.inheritAttrs = false;
export default Frame6Broken;