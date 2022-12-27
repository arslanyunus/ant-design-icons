// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame3BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame3Broken: Frame3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame3BrokenSvg}></AntdIcon>;
};

Frame3Broken.displayName = 'Frame3Broken';
Frame3Broken.inheritAttrs = false;
export default Frame3Broken;