// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickTwoTone: BoxTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickTwoToneSvg}></AntdIcon>;
};

BoxTickTwoTone.displayName = 'BoxTickTwoTone';
BoxTickTwoTone.inheritAttrs = false;
export default BoxTickTwoTone;