// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTwoTone: BoxTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTwoToneSvg}></AntdIcon>;
};

BoxTwoTone.displayName = 'BoxTwoTone';
BoxTwoTone.inheritAttrs = false;
export default BoxTwoTone;