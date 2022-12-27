// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectNormalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalBroken: DirectNormalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalBrokenSvg}></AntdIcon>;
};

DirectNormalBroken.displayName = 'DirectNormalBroken';
DirectNormalBroken.inheritAttrs = false;
export default DirectNormalBroken;