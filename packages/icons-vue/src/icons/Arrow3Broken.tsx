// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow3BrokenSvg from '@ant-design/icons-svg/lib/asn/Arrow3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow3Broken: Arrow3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow3BrokenSvg}></AntdIcon>;
};

Arrow3Broken.displayName = 'Arrow3Broken';
Arrow3Broken.inheritAttrs = false;
export default Arrow3Broken;