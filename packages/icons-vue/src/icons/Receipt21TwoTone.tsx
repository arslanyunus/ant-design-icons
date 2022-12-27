// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt21TwoToneSvg from '@ant-design/icons-svg/lib/asn/Receipt21TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt21TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt21TwoTone: Receipt21TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt21TwoToneSvg}></AntdIcon>;
};

Receipt21TwoTone.displayName = 'Receipt21TwoTone';
Receipt21TwoTone.inheritAttrs = false;
export default Receipt21TwoTone;