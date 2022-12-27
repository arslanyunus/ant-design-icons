// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpTwoTone: DirectUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpTwoToneSvg}></AntdIcon>;
};

DirectUpTwoTone.displayName = 'DirectUpTwoTone';
DirectUpTwoTone.inheritAttrs = false;
export default DirectUpTwoTone;