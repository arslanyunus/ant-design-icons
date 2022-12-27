// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame4BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame4Broken: Frame4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame4BrokenSvg}></AntdIcon>;
};

Frame4Broken.displayName = 'Frame4Broken';
Frame4Broken.inheritAttrs = false;
export default Frame4Broken;