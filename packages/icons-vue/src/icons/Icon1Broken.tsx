// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Icon1BrokenSvg from '@ant-design/icons-svg/lib/asn/Icon1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Icon1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Icon1Broken: Icon1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Icon1BrokenSvg}></AntdIcon>;
};

Icon1Broken.displayName = 'Icon1Broken';
Icon1Broken.inheritAttrs = false;
export default Icon1Broken;