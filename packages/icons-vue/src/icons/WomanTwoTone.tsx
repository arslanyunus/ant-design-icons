// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanTwoToneSvg from '@ant-design/icons-svg/lib/asn/WomanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanTwoTone: WomanTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanTwoToneSvg}></AntdIcon>;
};

WomanTwoTone.displayName = 'WomanTwoTone';
WomanTwoTone.inheritAttrs = false;
export default WomanTwoTone;