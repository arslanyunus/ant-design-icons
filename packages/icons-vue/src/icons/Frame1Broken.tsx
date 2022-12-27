// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame1BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame1Broken: Frame1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame1BrokenSvg}></AntdIcon>;
};

Frame1Broken.displayName = 'Frame1Broken';
Frame1Broken.inheritAttrs = false;
export default Frame1Broken;