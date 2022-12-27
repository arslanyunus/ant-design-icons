// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame2BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame2Broken: Frame2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame2BrokenSvg}></AntdIcon>;
};

Frame2Broken.displayName = 'Frame2Broken';
Frame2Broken.inheritAttrs = false;
export default Frame2Broken;