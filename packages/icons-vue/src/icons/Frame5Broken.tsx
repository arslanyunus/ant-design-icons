// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Frame5BrokenSvg from '@ant-design/icons-svg/lib/asn/Frame5Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Frame5BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Frame5Broken: Frame5BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Frame5BrokenSvg}></AntdIcon>;
};

Frame5Broken.displayName = 'Frame5Broken';
Frame5Broken.inheritAttrs = false;
export default Frame5Broken;