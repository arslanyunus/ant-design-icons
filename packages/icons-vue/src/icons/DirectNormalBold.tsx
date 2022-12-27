// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalBoldSvg from '@ant-design/icons-svg/lib/asn/DirectNormalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalBold: DirectNormalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalBoldSvg}></AntdIcon>;
};

DirectNormalBold.displayName = 'DirectNormalBold';
DirectNormalBold.inheritAttrs = false;
export default DirectNormalBold;