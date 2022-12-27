// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2BrokenSvg from '@ant-design/icons-svg/lib/asn/More2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2Broken: More2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2BrokenSvg}></AntdIcon>;
};

More2Broken.displayName = 'More2Broken';
More2Broken.inheritAttrs = false;
export default More2Broken;