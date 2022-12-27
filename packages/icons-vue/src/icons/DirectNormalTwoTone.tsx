// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectNormalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalTwoTone: DirectNormalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalTwoToneSvg}></AntdIcon>;
};

DirectNormalTwoTone.displayName = 'DirectNormalTwoTone';
DirectNormalTwoTone.inheritAttrs = false;
export default DirectNormalTwoTone;