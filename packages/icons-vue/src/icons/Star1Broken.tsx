// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1BrokenSvg from '@ant-design/icons-svg/lib/asn/Star1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1Broken: Star1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1BrokenSvg}></AntdIcon>;
};

Star1Broken.displayName = 'Star1Broken';
Star1Broken.inheritAttrs = false;
export default Star1Broken;