// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Receipt1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1TwoTone: Receipt1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1TwoToneSvg}></AntdIcon>;
};

Receipt1TwoTone.displayName = 'Receipt1TwoTone';
Receipt1TwoTone.inheritAttrs = false;
export default Receipt1TwoTone;