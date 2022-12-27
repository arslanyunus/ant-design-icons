// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslateTwoToneSvg from '@ant-design/icons-svg/lib/asn/TranslateTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslateTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslateTwoTone: TranslateTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslateTwoToneSvg}></AntdIcon>;
};

TranslateTwoTone.displayName = 'TranslateTwoTone';
TranslateTwoTone.inheritAttrs = false;
export default TranslateTwoTone;