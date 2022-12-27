// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossTwoToneSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossTwoTone: BrifecaseCrossTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossTwoToneSvg}></AntdIcon>;
};

BrifecaseCrossTwoTone.displayName = 'BrifecaseCrossTwoTone';
BrifecaseCrossTwoTone.inheritAttrs = false;
export default BrifecaseCrossTwoTone;