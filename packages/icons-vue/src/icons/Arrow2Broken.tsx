// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2BrokenSvg from '@ant-design/icons-svg/lib/asn/Arrow2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2Broken: Arrow2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2BrokenSvg}></AntdIcon>;
};

Arrow2Broken.displayName = 'Arrow2Broken';
Arrow2Broken.inheritAttrs = false;
export default Arrow2Broken;